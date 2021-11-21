#!/usr/bin/env node

const GreatDay = require('../renderer/lib/greatday');
const Store = require('conf');
const dotenv = require('dotenv');
dotenv.config();

const main = async () => {
  const gd = new GreatDay(new Store());
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  try {
    gd.setCredential(email, password);
    await gd.checkToken();
    await gd.keepAlive();
    // const loginInfo = await gd.login(email, password);
    // console.log(loginInfo);
    // const attendLog = await gd.getAttendanceLog();
    // console.log(attendLog);
    // await gd.clockIn();
  } catch (e) {
    console.error(e.message);
  }
} 

main();
