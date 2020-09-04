import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import Topbar from "./Topbar";
import Folders from "./Folders";
import Projects from "./Projects";
import Tasks from "./Tasks";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    paddingLeft: theme.spacing(8.875),
    paddingRight: theme.spacing(8.875),
  },
  leftGrid: {
    paddingRight: theme.spacing(8.875),
  },
}));

const Main = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Topbar />
      <Grid container className={classes.mainGrid}>
        <Grid item xs={7} className={classes.leftGrid}>
          <Folders />
          <Projects />
        </Grid>
        <Grid item xs={5}>
          <Tasks />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Main;
