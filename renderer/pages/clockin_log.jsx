import Moment from 'moment';
import Store from 'store2';
import Greatday from '../lib/greatday';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
    table: {
      width: "max-content",
    },
    button: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      verticalAlign: 'bottom',
    },
    error: {
      color: '#fc0345',
    },
    info: {
      color: '#000',
    },
    warn: {
      color: '#bf5e0a',
    },
  })
);

const store = Store;
const gd = new Greatday(store);

function Login() {
  const classes = useStyles({});
  const router = useRouter();

  const [clockInLog, setClockInLog] = React.useState([]);

  const getClockInLog = async () => {
    try {
      const logs = gd.getLogs()
      setClockInLog(logs.map((log) => ({
        key: log.timestamp,
        time: Moment(log.timestamp).format('DD MMM YYYY HH:mm:ss'),
        level: log.level,
        className: classes[log.level.toLowerCase()],
        message: log.message,
      })));
    } catch(e) {
      console.error(`fail to get attendance log, error: ${e.message}`);
      setClockInLog([]);
    }
  };

  useEffect(() => {
    getClockInLog();

    return () => {
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Process Log - GreatDay Genie</title>
      </Head>
      <div className={classes.root} style={{'overflow': 'hidden' }}>
        <Grid container direction="column" spacing={3}>
          <Grid item xs={12} align="left">
            <Button variant="contained" color="secondary" className={classes.button} onClick={getClockInLog}>
              Refresh
            </Button>
            <Button variant="contained" color="default" className={classes.button} onClick={() => { router.push('/'); }}>
              Back to Home
            </Button>
          </Grid>

          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="attendance log">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Time</TableCell>
                    <TableCell align="left">Level</TableCell>
                    <TableCell align="left">Log Message</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clockInLog.map((row) => (
                    <TableRow key={row.key}>
                      <TableCell align="left">{row.time}</TableCell>
                      <TableCell align="left" className={row.className}>{row.level}</TableCell>
                      <TableCell align="left" className={row.className}>{row.message}</TableCell>
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

export default Login;
