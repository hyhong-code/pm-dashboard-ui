import React, { Fragment } from "react";
import { makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import Topbar from "./Topbar";
import Folders from "./Folders";
import Projects from "./Projects";
import Tasks from "./Tasks";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    paddingLeft: theme.spacing(6.25),
    paddingRight: theme.spacing(6.25),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fragment>
      <Topbar />
      <Grid container className={classes.mainGrid}>
        <Grid
          item
          xs={12}
          md={7}
          style={{ paddingRight: smDown ? undefined : theme.spacing(6.25) }}
        >
          <Folders />
          <Projects />
        </Grid>
        <Grid item xs={12} md={5}>
          <Tasks />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Main;
