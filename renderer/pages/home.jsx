import electron from 'electron';
import Store from 'electron-store';
import Greatday from '../lib/greatday';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Link from '../components/Link';

const ipcRenderer = electron.ipcRenderer || false;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 150,
      verticalAlign: 'top',
    },
    selectField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 120,
      verticalAlign: 'bottom',
    },
    button: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      verticalAlign: 'bottom',
    },
    scheduleInfo: {
      marginLeft: theme.spacing(2),
    },
  })
);

function convertTimeString(str) {
  const token = str.split(':');
  return {
    hour: parseInt(token[0]),
    min: parseInt(token[1]),
    sec: token.length > 2 ? parseInt(token[2]) : 0,
  };
}

function calcShiftTime(shiftTimeStr, randomRange) {
  const parsedTime = convertTimeString(shiftTimeStr);
  parsedTime.min += Math.floor(Math.random() * randomRange) + 0;
  const nowDate = new Date();
  const shiftDate = new Date();

  shiftDate.setHours(parsedTime.hour);
  shiftDate.setMinutes(parsedTime.min);
  shiftDate.setSeconds(0);

  if (nowDate > shiftDate) {
    shiftDate.setDate(shiftDate.getDate() + 1);
  }

  return shiftDate;
}

const store = new Store();
const gd = new Greatday(store);

function Home() {
  const classes = useStyles();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = React.useState('');

  const [randomRange, setRandomRange] = React.useState(store.get('randomRange') || 30);
  const [shiftStartTime, setShiftStartTime] = React.useState(store.get('shiftStartTime') || '10:00');
  const [shiftEndTime, setShiftEndTime] = React.useState(store.get('shiftEndTime') || '19:00');
  const [nextShiftStartTimeStr, setNextShiftStartTimeStr] = React.useState(store.get('nextShiftStartTimeStr'));
  const [nextShiftEndTimeStr, setNextShiftEndTimeStr] = React.useState(store.get('nextShiftEndTimeStr'));
  const [lastClockInTime, setLastClockInTime] = React.useState(store.get('lastClockInTime'));
  const [attendList, setAttendList] = React.useState([]);

  const updateStartShiftTime = () => {
    const shiftTime = calcShiftTime(shiftStartTime, randomRange);
    setNextShiftStartTimeStr(shiftTime.toLocaleString());
    store.set('nextShiftStartTime', shiftTime);
    store.set('nextShiftStartTimeStr', shiftTime.toLocaleString());
  };

  const updateEndShiftTime = () => {
    const shiftTime = calcShiftTime(shiftEndTime, randomRange);
    setNextShiftEndTimeStr(shiftTime.toLocaleString());
    store.set('nextShiftEndTime', shiftTime);
    store.set('nextShiftEndTimeStr', shiftTime.toLocaleString());
  };

  const updateShiftTime = () => {
    updateStartShiftTime();
    updateEndShiftTime();
  }

  const clearErrorMessage = () => {
    setTimeout(() => {
      setErrorMessage('');
    }, 5000);
  }

  const clockIn = async () => {
    try {
      setErrorMessage('Sending clock in request to GreatDay');

      await gd.clockIn();

      setErrorMessage('Clock in success');
      clearErrorMessage();

      const clockInTime = (new Date()).toString();
      setLastClockInTime(clockInTime);
      store.set('lastClockInTime', clockInTime);

      await getAttendanceList();
    } catch(e) {
      console.log('clockIn failed, error:', e.message);
      setErrorMessage('Clock In failed');
      clearErrorMessage();
    }
  };

  const getAttendanceList = async () => {
    // ipcRenderer.send('getAttendanceList');
    try {
      const data = await gd.getAttendanceList();

      setAttendList(data.map((row) => {
        let startTimeStr = '';
        let endTimeStr = '';
        if (row.starttime) {
          let time = new Date(row.starttime);
          startTimeStr = `${time.getUTCHours()}:${time.getUTCMinutes()}`;
        }
        if (row.endtime) {
          let time = new Date(row.endtime);
          endTimeStr = `${time.getUTCHours()}:${time.getUTCMinutes()}`;
        }

        return {
          key: `${row.shiftstarttime}-${row.shiftendtime}`,
          name: row.fullName,
          date: (new Date(row.shiftstarttime)).toDateString(),
          startTime: startTimeStr,
          endTime: endTimeStr,
        }
      }));
    } catch(e) {
      console.log('getAttendanceList failed, error:', e.message);
      setAttendList([{
        key: 'getAttendanceListFailed',
        name: 'N/A',
        date: 'Failed',
        startTime: 'Failed',
        endTime: 'Failed',
      }]);

      setErrorMessage('Fail to Get attendance list.');
      clearErrorMessage();
    }
  };


  let startIntervalId = null;
  let endIntervalId = null;
  const scheduleClockIn = () => {
    if (startIntervalId) {
      clearInterval(startIntervalId);
      startIntervalId = null;
    }

    if (endIntervalId) {
      clearInterval(endIntervalId);
      endIntervalId = null;
    }

    console.log('scheduleClockIn start');
    const nextShiftStartTime = store.get('nextShiftStartTime');
    const nextShiftEndTime = store.get('nextShiftEndTime');
    const nowTime = new Date();

    if (!nextShiftStartTime || !nextShiftEndTime) {
      return;
    }

    startIntervalId = setInterval( async () => {
      const curTime = new Date();
      const nextTime = new Date(store.get('nextShiftStartTime'));
      if (curTime >= nextTime) {
        console.log('invoke start clock-in');
        await clockIn();
        updateStartShiftTime();
      }
    }, 30000);

    endIntervalId = setInterval( async () => {
      const curTime = new Date();
      const nextTime = new Date(store.get('nextShiftEndTime'));
      if (curTime >= nextTime) {
        console.log('invoke end clock-in');
        await clockIn();
        updateEndShiftTime();
      }
    }, 30000);
  }

  useEffect(() => {
    if (!store.get('auth-token')) {
      router.push('/login');
    }

    getAttendanceList();

    scheduleClockIn();

    return () => {
      // unregister it
      clearInterval(startIntervalId);
      clearInterval(endIntervalId);
    };

  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Great Day Auto. Clock In</title>
      </Head>
      <div className={classes.root} style={{'overflow': 'hidden' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
                <TextField
                  id="shiftStartTime"
                  label="Shift Start Time"
                  type="time"
                  className={classes.textField}
                  defaultValue={shiftStartTime}
                  size="medium"
                  inputProps={{ step: 60 }}
                  onChange={e => {
                    setShiftStartTime(e.target.value);
                    store.set('shiftStartTime', e.target.value);
                  }}
                />
                <TextField
                  id="shiftEndTime"
                  label="Shift End Time"
                  type="time"
                  className={classes.textField}
                  defaultValue={shiftEndTime}
                  size="medium"
                  inputProps={{ step: 60 }}
                  onChange={e => {
                    setShiftEndTime(e.target.value)
                    store.set('shiftEndTime', e.target.value);
                  }}
                />
                <FormControl>
                  <InputLabel id="random-range-label">Random Range</InputLabel>
                  <Select
                    value={randomRange}
                    className={classes.selectField}
                    onChange={e => {
                      setRandomRange(e.target.value);
                      store.set('randomRange', e.target.value);
                    }}
                  >
                    <MenuItem value={0}>0 Minutes</MenuItem>
                    <MenuItem value={10}>10 Minutes</MenuItem>
                    <MenuItem value={20}>20 Minutes</MenuItem>
                    <MenuItem value={30}>30 Minutes</MenuItem>
                    <MenuItem value={60}>70 Minutes</MenuItem>
                  </Select>
                </FormControl>
                <Button variant="contained" color="primary" className={classes.button} onClick={updateShiftTime}>
                  Update
                </Button>
          </Grid>

          <Grid item xs={12} align="left">
            <Divider />
            <Typography variant="subtitle1" gutterBottom className={classes.scheduleInfo}>
              Next Scheduled Shift Start Time: {nextShiftStartTimeStr}
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.scheduleInfo}>
              Next Scheduled  Shift End Time: &nbsp; {nextShiftEndTimeStr}
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.scheduleInfo}>
              Last Clock-In Time: {lastClockInTime ? (new Date(lastClockInTime)).toLocaleString() : ''}
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="secondary" className={classes.button}
              onClick={async () => {
                await clockIn();
              }}
            >
              Manual Clock In
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={() => { router.push('/login'); }}>
              Back to Login Page
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {errorMessage}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell align="center">DATE</TableCell>
                    <TableCell align="center">START TIME</TableCell>
                    <TableCell align="center">END TIME</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendList.map((row) => (
                    <TableRow key={row.key}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.startTime}</TableCell>
                      <TableCell align="center">{row.endTime}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Home;
