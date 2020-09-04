import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import TopbarSearch from "./TopbarSearch";
import Sidebar from "./Sidebar";

const useStyles = makeStyles((theme) => ({}));

const Drawer = ({ open, onClose, onOpen }) => {
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="left"
      open={false}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <TopbarSearch width="75%" />
      </Box>
      <Sidebar brand={false} />
    </SwipeableDrawer>
  );
};

export default Drawer;
