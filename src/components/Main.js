import React, { Fragment } from "react";
import { useTheme, makeStyles } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Folders from "./Folders";
import Projects from "./Projects";
import Topbar from "./Topbar";

const useStyles = makeStyles((theme) => ({
  leftGrid: {
    paddingLeft: theme.spacing(8.875),
    paddingRight: theme.spacing(8.875),
  },
}));

const Main = () => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Fragment>
      <Topbar />
      <Grid container>
        <Grid item xs={7} className={classes.leftGrid}>
          <Folders />
          <Projects />
        </Grid>
        <Grid item xs={5}>
          <Typography style={{ ...theme.typography.mainTitle }}>
            Your Tasks
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Main;
