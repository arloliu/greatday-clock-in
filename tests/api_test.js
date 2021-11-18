#!/usr/bin/env node

import GreatDay from '../main/greatday.js';
import dotenv from "dotenv";
dotenv.config();

const main = async () => {
  const gd = new GreatDay();
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  try {
    const loginInfo = await gd.login(email, password);
    // console.log(loginInfo);
    const attendLog = await gd.getAttendanceLog();
    console.log(attendLog);
    // await gd.clockIn();
  } catch (e) {
    console.error(e.message);
  }
}

main();
