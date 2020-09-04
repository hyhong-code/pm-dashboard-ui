import React, { Fragment } from "react";
import { useTheme, makeStyles } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import FolderCard from "./FolderCard";
import Topbar from "./Topbar";

const folders = [
  { folderName: "Invoices", notifination: false },
  { folderName: "Customers", notifination: true },
  { folderName: "Products", notifination: true },
  { folderName: "Services", notifination: false },
];

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
          <Typography
            style={{
              ...theme.typography.mainTitle,
              marginBottom: theme.spacing(2),
            }}
          >
            Recent Folders
          </Typography>
          <Grid container spacing={3}>
            {folders.map(({ folderName, notifination }, idx) => (
              <Grid item xs={4} key={idx}>
                <FolderCard
                  folderName={folderName}
                  notification={notifination}
                />
              </Grid>
            ))}
          </Grid>
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
