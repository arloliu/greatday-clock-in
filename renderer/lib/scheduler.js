class Scheduler {
  constructor(greatday, store) {
    this.gd = greatday;
    this.store = store;
    this.callback = undefined;
    this.startIntervalId = null;
    this.endIntervalId = null;

    this.started = false;
  }

  setCallback(cb) {
    this.callback = cb;
  }

  async clockIn() {
    try {

      await this.gd.clockIn();

      const clockInTime = (new Date()).toString();
      this.store.set('lastClockInTime', clockInTime);

      return true;
    } catch(e) {
      console.log('clockIn failed, error:', e.message);
      return false;
    }
  }

  start() {
    if (this.started) {
      return;
    }
    // console.log('scheduler start');
    this.started = true;
    const store = this.store;

    if (this.startIntervalId) {
      clearInterval(this.startIntervalId);
      this.startIntervalId = null;
    }

    if (this.endIntervalId) {
      clearInterval(this.endIntervalId);
      this.endIntervalId = null;
    }

    const nextShiftStartTime = store.get('nextShiftStartTime');
    const nextShiftEndTime = store.get('nextShiftEndTime');

    // console.log('nextShiftEndTime:', nextShiftEndTime);
    // if (!nextShiftStartTime || !nextShiftEndTime) {
    //   console.log('scheduler exit');
    //   return;
    // }

    let retryCount = 0;

    this.startIntervalId = setInterval( async () => {
      const curTime = new Date();
      const lastShiftTime = store.get('nextShiftStartTime');
      const nextTime = new Date(lastShiftTime);

      // console.log(`schedule clockin for start, curTime=${curTime}, nextTime=${nextTime}`);
      if (lastShiftTime && curTime >= nextTime) {
        this.gd.pushLog('clockInLog', `Execute schedule clock in for shift start, retry count=${retryCount}`);
        const result = await this.clockIn();
        console.log('clockIn result:', result);
        if (result) {
          retryCount = 0;
          if (this.callback) {
            console.log('invoke callback');
            this.callback('shift-start');
          }
        } else {
          retryCount++;
        }
      }
    }, 10000);

    this.endIntervalId = setInterval( async () => {
      const curTime = new Date();
      const lastShiftTime = store.get('nextShiftEndTime');
      const nextTime = new Date(lastShiftTime);

      // console.log(`schedule clockin for end, curTime=${curTime}, nextTime=${nextTime}`);
      if (lastShiftTime && curTime >= nextTime) {
        this.gd.pushLog('clockInLog', `Execute schedule clock in for shift end retry count=${retryCount}`);
        const result = await this.clockIn();
        if (result) {
          retryCount = 0;
          if (this.callback) {
            this.callback('shift-end');
          }
        } else {
          retryCount++;
        }
      }
    }, 10000);
  }
}

module.exports = Scheduler;
