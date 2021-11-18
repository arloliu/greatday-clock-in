import { CompareSharp } from '@material-ui/icons';
import axios from 'axios';
const isElectron = checkElectron();

// const Store = isElectron ? (await import('electron-store')).default : (await import('conf')).default;

function checkElectron() {
  // Renderer process
  if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
      return true;
  }

  // Main process
  if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
      return true;
  }

  // Detect the user agent when the `nodeIntegration` option is set to true
  if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
      return true;
  }

  return false;
}
// import Store from 'electron-store';

class GreatDay {
  constructor(store) {
    this.apiReq = null;
    this.apiConfig = null;
    this.loginInfo = null;
    this.token = null;
    this.store = store;
    console.log('GreatDay ctor, Store:', this.store.constructor.name)
    // console.log('store path:', this.store.path);
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
        // 'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36',
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
      throw new Error(`login fail, error: ${e.message}`);
    }
  }

  async checkToken() {
    let token = this.store.get('auth-token');

    if (!token) {
      console.log('token is null');
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
          console.log('get currentTime fail, error:', e)
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

  async clockIn() {
    await this.checkToken();

    try {
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
    } catch (e) {
      throw new Error(`clockIn failed, error: ${e.message}`);
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
      console.log(e);
      throw new Error(`getAttendanceLog failed, error: ${e.message}`);
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
      console.log(e);
      throw new Error(`getAttendanceLog failed, error: ${e.message}`);
    }
  }

  setReqHeader(key, value) {
    const param = {}
    param[key] = value;
    Object.assign(this.apiReq.defaults.headers.common, param);
  }

}
export default GreatDay;

class HashHelper {
  getEncode(t) {
    let e = t.replace(/[\u0080-\u07ff]/g, (t) => {
      const e = t.charCodeAt(0);
      return String.fromCharCode(192 | (e >> 6), 128 | (63 & e));
    });
    return (
      (e = e.replace(/[\u0800-\uffff]/g, (t) => {
        const e = t.charCodeAt(0);
        return String.fromCharCode(
          224 | (e >> 12),
          128 | ((e >> 6) & 63),
          128 | (63 & e)
        );
      })),
      e
    );
  }
  getDecode(t) {
    let e = t.replace(
      /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,
      (t) => {
        const e =
          ((15 & t.charCodeAt(0)) << 12) |
          ((63 & t.charCodeAt(1)) << 6) |
          (63 & t.charCodeAt(2));
        return String.fromCharCode(e);
      }
    );
    return (
      (e = e.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, (t) => {
        const e =
          ((31 & t.charCodeAt(0)) << 6) | (63 & t.charCodeAt(1));
        return String.fromCharCode(e);
      })),
      e
    );
  }
  getF(t, e, n, i) {
    switch (t) {
      case 0:
        return (e & n) ^ (~e & i);
      case 1:
        return e ^ n ^ i;
      case 2:
        return (e & n) ^ (e & i) ^ (n & i);
      case 3:
        return e ^ n ^ i;
    }
  }
  getROTL(t, e) {
    return (t << e) | (t >>> (32 - e));
  }
  getToHexStr(t) {
    let e,
      n = '';
    for (let i = 7; i >= 0; i--)
      (e = (t >>> (4 * i)) & 15), (n += e.toString(16));
    return n;
  }
  setHash(t, e, n) {
    const i = this;
    null == n && (n = 2), (e = void 0 === e || e) && (t = i.getEncode(t));
    const o = [1518500249, 1859775393, 2400959708, 3395469782];
    t += String.fromCharCode(128);
    const r = Math.ceil((t.length / 4 + 2) / 16),
      s = new Array(r);
    for (let y = 0; y < r; y++) {
      s[y] = new Array(16);
      for (let e = 0; e < 16; e++)
        s[y][e] =
          (t.charCodeAt(64 * y + 4 * e) << 24) |
          (t.charCodeAt(64 * y + 4 * e + 1) << 16) |
          (t.charCodeAt(64 * y + 4 * e + 2) << 8) |
          t.charCodeAt(64 * y + 4 * e + 3);
    }
    (s[r - 1][14] = (8 * (t.length - 1)) / Math.pow(2, 32)),
      (s[r - 1][14] = Math.floor(s[r - 1][14])),
      (s[r - 1][15] = (8 * (t.length - 1)) & 4294967295);
    let a = 1732584193,
      l = 4023233417,
      c = 2562383102,
      u = 271733878,
      d = 3285377520;
    const h = new Array(80);
    let p, m, f, g, _;
    for (let y = 0; y < r; y++) {
      for (let t = 0; t < 16; t++) h[t] = s[y][t];
      for (let t = 16; t < 80; t++)
        h[t] = i.getROTL(
          h[t - 3] ^ h[t - 8] ^ h[t - 14] ^ h[t - 16],
          1
        );
      (p = a), (m = l), (f = c), (g = u), (_ = d);
      for (let t = 0; t < 80; t++) {
        const e = Math.floor(t / 20),
          n =
            (i.getROTL(p, 5) +
              i.getF(e, m, f, g) +
              _ +
              o[e] +
              h[t]) &
            4294967295;
        (_ = g), (g = f), (f = i.getROTL(m, 30)), (m = p), (p = n);
      }
      (a = (a + p) & 4294967295),
        (l = (l + m) & 4294967295),
        (c = (c + f) & 4294967295),
        (u = (u + g) & 4294967295),
        (d = (d + _) & 4294967295);
    }
    let v =
      i.getToHexStr(a) +
      i.getToHexStr(l) +
      i.getToHexStr(c) +
      i.getToHexStr(u) +
      i.getToHexStr(d);
    return (
      1 === n ? (v = v.toLowerCase()) : 2 === n && (v = v.toUpperCase()),
      v
    );
  }
  getHash(t, e, n) {
    const i = this;
    let o = '';
    if (0 === n) {
      o = i.setHash(t, !0, null);
      const e = [
        o.substr(0, 4),
        o.substr(4, o.length - 8),
        o.substr(o.length - 4, 4),
      ];
      o =
        e[0].split('').reverse().join('') +
        e[1].split('').reverse().join('') +
        e[2].split('').reverse().join('');
    } else {
      (e = e.split('').reverse().join('')),
        (o = i.setHash(t + e, !0, null));
      for (let t = 1; t < n; t++) o = i.setHash(o + e, !0, null);
    }
    return o;
  }
}
