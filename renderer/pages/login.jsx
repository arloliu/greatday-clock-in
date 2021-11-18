import electron from 'electron';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Store from 'electron-store';
import Greatday from '../lib/greatday';

const ipcRenderer = electron.ipcRenderer || false;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  })
);

const store = new Store();
const gd = new Greatday(store);

function Login() {
  const classes = useStyles({});
  const router = useRouter();

  const [email, setEmail] = useState(store.get('email'));
  const [password, setPassword] = useState(store.get('password'));
  const [message, setMessage] = useState('');
  const handleLogin = async () => {
    store.set('email', email);
    store.set('password', password);
    setMessage('Login...');

    try {
      await gd.login();
      setMessage('');
      router.push('/home');
    } catch(e) {
      setMessage('Login failed.');
    }
  };

  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Great Day Auto. Clock In</title>
      </Head>
      <div className={classes.root} style={{'overflow': 'hidden' }}>
        <Grid container direction="column" spacing={3} >
          <Grid item >
            <TextField id="account" label="Account" value={email} onChange={e => setEmail(e.target.value)} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="password" label="Password" label="Password"
              type="password" autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)} 
            />
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" color="secondary" onClick={handleLogin}>
              Login
           </Button>
          </Grid>
          <Grid item xs={12}>
            <h3>{message}</h3>
          </Grid>

        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Login;
