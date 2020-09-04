import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

import FolderIcon from "@material-ui/icons/Folder";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "8.5rem",
    borderRadius: 10,
    backgroundColor: theme.palette.common.blueLight2,
    boxShadow: "none",
    overflow: "hidden",
    position: "relative",
  },
  dotContainer: {
    background: "#fff",
    width: 20,
    height: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    position: "absolute",
    right: -3,
    top: -3,
  },
  dot: {
    fontSize: 15,
    color: theme.palette.common.red,
  },
  button: {
    height: "100%",
    width: "100%",
  },
  btnRoot: {
    "& .MuiButton-label": {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  icon: {
    fontSize: 65,
    color: theme.palette.common.blueLight1,
  },
  folderName: {
    ...theme.typography.mainTitle,
    textTransform: "initial",
    marginTop: theme.spacing(0.5),
  },
}));

const FolderCard = ({ folderName, notification }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised={false}>
      {notification && (
        <Box className={classes.dotContainer}>
          <FiberManualRecordIcon className={classes.dot} />
        </Box>
      )}
      <Button className={classes.button} classes={{ root: classes.btnRoot }}>
        <FolderIcon className={classes.icon} />
        <Typography className={classes.folderName}>{folderName}</Typography>
      </Button>
    </Card>
  );
};

export default FolderCard;
