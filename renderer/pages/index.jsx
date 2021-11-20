import Moment from 'moment';
import Store from 'store2';
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
    remaining: {
      marginLeft: theme.spacing(1),
      fontSize: '90%',
      color: '#6fa5b3',
    }
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


function calcShiftTime(shiftTimeStr, randomRange, lastShiftTime, nextDay = false) {
  const parsedTime = convertTimeString(shiftTimeStr);
  parsedTime.min += Math.floor(Math.random() * randomRange);
  const nowTime = new Date();
  const shiftTime = new Date();

  shiftTime.setHours(parsedTime.hour);
  shiftTime.setMinutes(parsedTime.min);
  shiftTime.setSeconds(0);

  if (nextDay || lastShiftTime > shiftTime || nowTime >= shiftTime) {
    shiftTime.setDate(shiftTime.getDate() + 1);
  }

  return shiftTime;
}

const formatShiftTimeStr = (time) => {
  if (!time) {
    return '';
  }

  const d = Moment(time)
  if (d == 'Invalid date') {
    return '';
  }
  return d.format('YYYY/MM/DD HH:mm:ss');
};

const store = Store;
const gd = new Greatday(store);

function Index(props) {
  const classes = useStyles(props);
  const router = useRouter();

  let [errorMessage, setErrorMessage] = React.useState('');

  let [randomRange, setRandomRange] = React.useState(store.get('randomRange') || 20);
  let [shiftStartTime, setShiftStartTime] = React.useState(store.get('shiftStartTime') || '10:00');
  let [shiftEndTime, setShiftEndTime] = React.useState(store.get('shiftEndTime') || '19:00');

  let [nextShiftStartTime, setNextShiftStartTime] = React.useState(store.get('nextShiftStartTime'));
  let [nextShiftEndTime, setNextShiftEndTime] = React.useState(store.get('nextShiftEndTime'));
  let [nextShiftStartTimeStr, setNextShiftStartTimeStr] = React.useState(formatShiftTimeStr(nextShiftStartTime));
  let [nextShiftEndTimeStr, setNextShiftEndTimeStr] = React.useState(formatShiftTimeStr(nextShiftEndTime));

  let [nextShiftStartRemaining, setNextShiftStartRemaining] = React.useState('');
  let [nextShiftEndRemaining, setNextShiftEndRemaining] = React.useState('');


  let [lastClockInTime, setLastClockInTime] = React.useState(store.get('lastClockInTime'));
  let [attendList, setAttendList] = React.useState([]);


  const updateShiftStartTime = (nextDay = false) => {
    const lastShiftTime = new Date(store.get('lastClockInTime'));
    const shiftTime = calcShiftTime(shiftStartTime, randomRange, lastShiftTime, nextDay);

    setNextShiftStartTime(shiftTime);
    store.set('nextShiftStartTime', shiftTime);

    setNextShiftStartTimeStr(formatShiftTimeStr(shiftTime));
  };

  const updateShiftEndTime = (nextDay = false) => {
    const lastShiftTime = new Date(store.get('lastClockInTime'));
    const shiftTime = calcShiftTime(shiftEndTime, randomRange, lastShiftTime, nextDay);

    setNextShiftEndTime(shiftTime);
    store.set('nextShiftEndTime', shiftTime);

    setNextShiftEndTimeStr(formatShiftTimeStr(shiftTime));
  };

  const updateShiftTime = () => {
    updateShiftStartTime(false);
    updateShiftEndTime(false);
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

      await getAttendanceList(true);

      return true;
    } catch(e) {
      console.error('clockIn failed, error:', e.message);
      setErrorMessage('Clock In failed');
      // clearErrorMessage();
      return false;
    }
  };

  const getAttendanceList = async (forceUpdate = false) => {
    try {
      const data = await gd.getAttendanceList();

      setAttendList(data.map((row) => (
        {
          key: `${row.shiftstarttime}-${row.shiftendtime}`,
          name: row.fullName,
          date: (new Date(row.shiftstarttime)).toDateString(),
          startTime: row.starttime ? Moment.utc(row.starttime).format('HH:mm') : 'N/A',
          endTime: row.endtime ? Moment.utc(row.endtime).format('HH:mm') : 'N/A',
        }
      )));
    } catch(e) {
      console.error('getAttendanceList failed, error:', e.message);
      setAttendList([{
        key: 'getAttendanceListFailed',
        name: 'N/A',
        date: 'Failed',
        startTime: 'Failed',
        endTime: 'Failed',
      }]);

      setErrorMessage('Fail to Get attendance list.');
      clearErrorMessage();

      return [];
    }
  };

  const clockInCallack = (action) => {
    switch(action) {
      case 'shift-start':
        updateShiftStartTime(true);
        break;
      case 'shift-end':
        updateShiftEndTime(true);
        break;
    }
    setLastClockInTime(store.get('lastClockInTime'));
  };

  useEffect(() => {
    if (!store.get('auth-token')) {
      router.push('/login');
    }

    props.scheduler.setCallback(clockInCallack);
  });

  useEffect(() => {
    getAttendanceList();

  }, [lastClockInTime]);

  useEffect(() => {
    const calRemaining = (secs) => ({
      day: secs > 86400 ? parseInt(secs / 86400) : 0,
      hour: secs > 3600 ? parseInt((secs % 86400) / 3600) : 0,
      min: secs > 60 ? parseInt((secs % 3600) / 60 ) : 0,
      sec: parseInt(secs % 60),
    });

    let remainingIntervalId = setInterval(() => {
      const now = Moment.utc();
      const start_secs = Moment.utc(nextShiftStartTime).diff(now, 'seconds');
      const end_secs = Moment.utc(nextShiftEndTime).diff(now, 'seconds');
      const start = calRemaining(start_secs);
      const end = calRemaining(end_secs);

      setNextShiftStartRemaining(start_secs > 0 ? `(Remaining ${start.day} days ${start.hour} hrs ${start.min} mins ${start.sec} secs)` : '');
      setNextShiftEndRemaining(end_secs > 0 ? `(Remaining ${end.day} days ${end.hour} hrs ${end.min} mins ${end.sec} secs)` : '');
    }, 1000);

    return () => {
      // unregister it
      if (remainingIntervalId) {
        clearInterval(remainingIntervalId);
        remainingIntervalId = null;
      }
    };

  }, [nextShiftStartTime, nextShiftEndTime]);

  return (
    <React.Fragment>
      <Head>
        <title>GreatDay Genie</title>
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
              <span className={classes.remaining}>{nextShiftStartRemaining}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.scheduleInfo}>
              Next Scheduled  Shift End Time: &nbsp; {nextShiftEndTimeStr}
              <span className={classes.remaining}>{nextShiftEndRemaining}</span>
            </Typography>
            <Typography variant="subtitle1" gutterBottom className={classes.scheduleInfo}>
              Last Clock-In Time: <b>{lastClockInTime ? (formatShiftTimeStr(lastClockInTime)) : ''}</b>
            </Typography>
            <Divider />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" color="secondary" className={classes.button}
              onClick={async () => {
                gd.pushLog('clockInLog', 'Execute manual clock in');
                await clockIn();
              }}
            >
              Manual Clock In
            </Button>
            <Button variant="contained" color="default" className={classes.button} onClick={() => { router.push('/attendance_log'); }}>
              Attendance Logs
            </Button>
            <Button variant="contained" color="default" className={classes.button} onClick={() => { router.push('/clockin_log'); }}>
              Clock-In Logs
            </Button>
            <Button variant="contained" color="default" className={classes.button} onClick={() => { router.push('/login'); }}>
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

export default Index;
