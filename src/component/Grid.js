import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from './Container';
import FormCon from './FormCon';
import Step from './Stepper';
import Tabs from './Tabs';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            <main style={{marginLeft: '40px'}}>
                <FormCon></FormCon>
            </main>
            <main style={{marginTop:'10px', marginLeft: '50px'}}>
              <Step/>
              <Tabs/>

            </main>
        </Grid>
        <Grid item xs={4}>
          <Container></Container>
        </Grid>
        
      </Grid>
    </div>
  );
}