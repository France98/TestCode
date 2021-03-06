import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function InteractiveList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={12}>
          <Typography variant="p" className={classes.title} >
            Drawing Free Hand
          </Typography>
          <div className={classes.demo}>
            <List style={{backgroundColor:'#D4D4D4'}}>
                <ListItem>
                  <ListItemText>
                      Pic Free Hand
                  </ListItemText>
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <VisibilityIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
