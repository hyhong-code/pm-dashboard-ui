import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import TopbarSearch from "./TopbarSearch";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({
  chevBtn: {
    alignSelf: "flex-end",
    marginTop: "1rem",
    marginRight: "1rem",
  },
  chevron: {
    color: "#fff",
    backgroundColor: theme.palette.common.blueLight1,
    fontSize: 30,
    borderRadius: 30,
  },
}));

const Drawer = ({ open, onClose, onOpen }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      classes={{ paper: classes.drawer }}
    >
      <IconButton edge="end" onClick={onClose} className={classes.chevBtn}>
        <ChevronLeftIcon className={classes.chevron} />
      </IconButton>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <TopbarSearch width="75%" />
      </Box>
      <Sidebar inDrawer={true} />
    </SwipeableDrawer>
  );
};

export default Drawer;
