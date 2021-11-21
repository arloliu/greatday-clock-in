const axios = require('axios');
const HashHelper = require('./hash_helper');

class GreatDay {
  constructor(store) {
    this.apiReq = null;
    this.apiConfig = null;
    this.loginInfo = null;
    this.token = null;
    this.store = store;

    // const storeName = (typeof store) === 'function' ? store.toString() : this.store.constructor.name;
    // console.log('GreatDay Store:', storeName);
  }

  setCredential(email, password) {
    this.store.set('email', email);
    this.store.set('password', password);
  }

  async getApiConfig() {
    if (this.apiConfig) {
      return this.apiConfig;
    }

    const response = await axios.get('https://saas.greatdayhr.com/getAPIConfig?account=sfgo3894');
    this.apiConfig = response.data.DATA;
    this.apiReq = axios.create({
      baseURL: this.apiConfig.GOPATHNEW,
      timeout: 10000,
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    });
    return this.apiConfig;
  }

  async login(email = null, password = null) {
    await this.getApiConfig();

    console.log('Try to login.');
    if (!email) {
      email = this.store.get('email');
    } else {
      this.store.set('email', email);
    }

    if (!password) {
      password = this.store.get('password');
    } else {
      this.store.set('password', password);
    }

    if (!email || !password) {
      this.pushLog('ERROR', 'Login failed, email or password is empty');
      throw new Error('email or password is empty');
    }

    const hasHelper = new HashHelper();
    const salt = "5unf15h" + email + "D4740N";
    const npwd = hasHelper.getHash(password, salt, 0).toUpperCase();
    const pwdHash = hasHelper.getHash(password, salt, 7).toUpperCase();
    const apiConfig = this.apiConfig;
    const payload = {
        username: email,
        password: pwdHash,
        npwd: npwd,
        ist: 'sfgo3894',
        preLoginData: {
            SFPATH: apiConfig.SFPATH,
            MODE: apiConfig.MODE,
            ACCOUNT: apiConfig.ACCOUNT,
            IST: apiConfig.IST,
            CUSTOM: apiConfig.CUSTOM,
            ACCOUNTNAME: apiConfig.ACCOUNTNAME,
            GOPATH: apiConfig.GOPATH,
            GOPATHNEW: apiConfig.GOPATHNEW,
            PAYROLLPATH: 'https://payroll.greatdayhr.com',
        },
        deviceInfo: {
            SFGOVersionNumber: 'Development',
            SFGOVersionCode: '',
            Model: 'Chrome',
            Platform: 'Browser',
            Version: '94.0.4606.81',
            DeviceID: null,
            IMEI: null,
        },
        keep: true,
        versionApps: { code: '', number: 'Development' },
    };

    try {
      const resp = await this.apiReq.request({
        method: 'post',
        url: '/auth/login?',
        headers: { 'content-type': 'application/json' },
        data: payload,
      });
      console.log("login success");
      this.loginInfo = resp.data;
      this.token = this.loginInfo.id;

      this.store.set('auth-token', this.loginInfo.id);
      this.store.set('auth-token-created', this.loginInfo.created);
      this.store.set('auth-token-ttl', this.loginInfo.ttl);
      this.store.set('empId', this.loginInfo.empId);
      this.store.set('empNo', this.loginInfo.empNo);
      this.store.set('companyId', this.loginInfo.companyId);
      this.store.set('userId', this.loginInfo.userId);

      Object.assign(this.apiReq.defaults.headers.common, { Authorization: this.loginInfo.id });

      return this.loginInfo;
    } catch (e) {
      this.pushLog('ERROR', `Login failed, error: ${e.message}`);
      throw new Error(`Login fail, error: ${e.message}`);
    }
  }

  async checkToken() {
    let token = this.store.get('auth-token');

    if (!token) {
      console.log('token is null, try to login');
      await this.login();
    } else {
      const created = this.store.get('auth-token-created');
      const ttl = this.store.get('auth-token-ttl');
      if (Date.now >= (Date.parse(created) + ttl)) {
        console.log('token is expired');
        await this.login();
      } else {
        try {
          await this.getApiConfig();
          await this.apiReq.get('/currentTime');
        } catch(e) {
          console.log('get currentTime fail, try to re-login, error:', e)
          await this.login();
        }
      }
    }

    token = this.token ? this.token : this.store.get('auth-token');
    this.setReqHeader('Authorization', token);
  }

  async getCurrentTime() {
    return (await this.apiReq.get('/currentTime')).data.data;
  }

  async keepAlive() {
    try {
      if (!this.store.get('auth-token')) {
        throw new Error('Auth. token not exist');
      }
      const result = await axios({
        method: 'get',
        url: 'https://saas.greatdayhr.com/',
        headers: {
          'content-type': 'application/json; charset=utf-8',
          'authorization': this.token,
        },
      });
      return result.data;
    } catch(e) {
      this.pushLog('ERROR', `Keep alive failed, error: ${e.message}`);
      return false;
    }
  }

  async clockIn() {
    try {
      await this.checkToken();

      const empId = this.store.get('empId');
      const currentTime = await this.getCurrentTime();

      const addToTempData = {
        empid: empId,
        companyId: this.store.get('companyId'),
        datetime: currentTime,
        geolocation: {latitude: 0, longitude: 0},
        photo: '',
        attOn: 'online',
      };
      const addToTempResult = (await this.apiReq.post('/attendanceSf6/AddToTemp?', addToTempData)).data.data;
      console.log('addToTempResult:', addToTempResult);
      if (!addToTempResult.isvalidtoken || !addToTempResult.success) {
        throw new Error('AddToTemp failed');
      }

      const getNewTodayAttendanceData = {
        empId: empId,
        date: currentTime,
      };
      const getNewTodayAttendanceResult = (await this.apiReq.post('/attendances/getNewTodayAttendance?', getNewTodayAttendanceData)).data.data;
      console.log('getNewTodayAttendanceResult:', getNewTodayAttendanceResult);

      this.pushLog('INFO', 'Clock in success');
    } catch (e) {
      this.pushLog('ERROR', `Clock in fails, error: ${e.message}`);
      throw new Error(`Clock in fails, error: ${e.message}`);
    }

    return true;
  }
  // /attendances/getAttendanceTemp?
  async getAttendanceLog() {
    try {
      await this.checkToken();
      const currentTime = await this.getCurrentTime();
      const reqData = {
        date: currentTime,
        empId: this.store.get('empId'),
        userId: this.store.get('userId'),
      };

      const result = (await this.apiReq.post('/attendances/getAttendanceTemp?', reqData)).data.data;

      return result;
    } catch (e) {
      this.pushLog('ERROR', `Get attendance log failed, error: ${e.message}`);
      throw new Error(`Get attendance log failed, error: ${e.message}`);
    }
  }

  // /att/shared/attendance/getAttendanceList?limit=?&skip=?
  async getAttendanceList(limit = 7, skip = 0) {
    try {
      await this.checkToken();
      const endDate = new Date();
      const startDate = (new Date(endDate));
      startDate.setDate(startDate.getDate() - limit);

      const reqData = {
        empId: "",
        empIds: [this.store.get('empId')],
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        status: [],
        txtName: "",
        worklocationCodes: [],
      };
      const result = (await this.apiReq.post(`/att/shared/attendance/getAttendanceList?limit=${limit}&skip=${skip}`, reqData)).data.data;

      return result;
    } catch (e) {
      this.pushLog('ERROR', `Get attendance list failed, error: ${e.message}`);
      throw new Error(`Get attendance list failed, error: ${e.message}`);
    }
  }

  setReqHeader(key, value) {
    const param = {}
    param[key] = value;
    Object.assign(this.apiReq.defaults.headers.common, param);
  }

  pushLog(level, message) {
    console.log(` pushLog: [${level}] ${message}`);
    let decodedLogs = null;
    const logs = this.store.get('processLog');
    if (!logs) {
      decodedLogs = [{level: level.toUpperCase(), timestamp: Date.now(), message: message}];
    } else {
      decodedLogs = JSON.parse(logs);
      decodedLogs.unshift({level: level.toUpperCase(), timestamp: Date.now(), message: message});
    }
    if (decodedLogs.length > 100) {
      decodedLogs = decodedLogs.slice(0, 100);
    }
    this.store.set('processLog', JSON.stringify(decodedLogs));
  }

  getLogs() {
    const logs = this.store.get('processLog');
    if (!logs) {
      return [];
    }
    return JSON.parse(logs);
  }
}
module.exports = GreatDay;
