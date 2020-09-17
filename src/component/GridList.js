import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from './OpticalList';
import CusSett from './CustomerSettList';
import DrawingFree from './DrawingFree';
import Picture from './Picture';
import ProgressBar from './Progressbar';

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
        <Grid item xs={12}>
            <ProgressBar/>
        </Grid>
        <Grid item xs={6}>
            <main style={{marginLeft: '10px'}}>
                <List/>
                <main style={{marginTop: '20px'}}>
                  <DrawingFree/>
                </main>
            </main>
        </Grid>
        <Grid item xs={6}>
            <main style={{marginLeft: '10px'}}>
                <CusSett/>
                <main style={{marginTop: '20px'}}>
                  <Picture/>
                </main>
            </main>
        </Grid>
        
      </Grid>
    </div>
  );
}