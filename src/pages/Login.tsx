import { Grid, Paper } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import banner from '../assets/images/banner.jpg';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid
      component='main'
      justify='flex-start'
      container
      className={classes.loginContainer}
    >
      <Grid
        className={classes.formContainer}
        component={Paper}
        elevation={0}
        xs={12}
        sm={6}
        md={5}
        item
      >
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loginContainer: {
      // border: '1px solid #000',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backgroundImage: `url(${banner})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'left left',
      height: '100vh',
    },
    formContainer: {
      // border: '1px solid #000',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      margin: theme.spacing(2, 5),
      boxShadow: theme.neumorphism.flat,
      borderRadius: theme.spacing(3),
      height: '90%',
    },
  })
);
