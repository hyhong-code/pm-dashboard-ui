import React, { Fragment } from "react";
import { useTheme } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import FolderCard from "./FolderCard";

const folders = [
  { folderName: "Invoices", notifination: false },
  { folderName: "Customers", notifination: true },
  { folderName: "Products", notifination: true },
  { folderName: "Services", notifination: false },
];

const Folders = () => {
  const theme = useTheme();

  return (
    <Fragment>
      <Typography
        style={{
          ...theme.typography.mainTitle,
          marginBottom: theme.spacing(2),
        }}
      >
        Recent Folders
      </Typography>
      <Grid container spacing={2}>
        {folders.map(({ folderName, notifination }, idx) => (
          <Grid item xs={4} key={idx}>
            <FolderCard folderName={folderName} notification={notifination} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Folders;
