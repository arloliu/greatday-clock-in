import Moment from 'moment';
import Store from 'store2';
import Greatday from '../lib/greatday';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
      minWidth: "50%",
    },
    button: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      verticalAlign: 'bottom',
    },
    success: {
      color: '#009688',
    },
  })
);

const store = Store;
const gd = new Greatday(store);

function Login() {
  const classes = useStyles({});
  const router = useRouter();

  const [attendLog, setAttendLog] = React.useState([]);

  const getAttendanceLog = async () => {
    try {
      const result = await gd.getAttendanceLog();
  
      setAttendLog(result.map((log) => {
        let message = 'Unknown';
        switch(log.uploadstatus) {
          case 1:
            message = (<span className={classes.success}>Has been processed</span>);
            break;
          case 3:
            message = 'Not first or not last time ';
            break;
        }
        return {
          key: log.attendDate,
          time: Moment.utc(log.attendDate).format('DD MMM YYYY HH:mm:ss'),
          status: message,
        };
      }));
    } catch(e) {
      console.error(`fail to get attendance log, error: ${e.message}`);
    }
  };

  useEffect(() => {
    getAttendanceLog();

    return () => {
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>GreatDay Genie</title>
      </Head>
      <div className={classes.root} style={{'overflow': 'hidden' }}>
        <Grid container direction="column" spacing={3}>
          <Grid item xs={12} align="left">
            <Button variant="contained" color="secondary" className={classes.button} onClick={getAttendanceLog}>
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
                    <TableCell align="left">Attendance Time</TableCell>
                    <TableCell align="left">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {attendLog.map((row) => (
                    <TableRow key={row.key}>
                      <TableCell align="left">{row.time}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
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
