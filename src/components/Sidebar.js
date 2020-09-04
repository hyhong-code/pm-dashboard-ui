import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import avatar from "../assets/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5.5),
    borderRight: `1px solid #eeeeee`,
    height: "calc(100vh - 6rem)",
    position: "relative",
  },
  brand: {
    ...theme.typography.sidebarBrand,
    paddingLeft: theme.spacing(6.25),
    marginBottom: theme.spacing(4.5),
  },
  list: {
    paddingLeft: theme.spacing(4.375),
    paddingRight: theme.spacing(4.375),
  },
  listItem: {
    borderRadius: theme.spacing(3.5),
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2.875),
  },
  listItemActive: {
    backgroundColor: theme.palette.common.blueLight2,
    "&:hover": {
      backgroundColor: theme.palette.common.blueLight2,
    },
  },
  listIcon: {
    minWidth: 0,
    marginRight: theme.spacing(1.625),
    "& .MuiSvgIcon-root": {
      color: theme.palette.common.black,
      width: 20,
    },
  },
  listText: {
    ...theme.typography.sidebarName,
  },
  userBox: {
    height: 100,
    borderTop: `1px solid #eeeeee`,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingLeft: 35,
    paddingRight: 35,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  userName: {
    ...theme.typography.sidebarName,
    marginLeft: 10,
  },
  chevIcon: {
    color: theme.palette.common.blue,
    backgroundColor: theme.palette.common.blueLight2,
    borderRadius: "1rem",
    fontSize: "1.8rem",
  },
}));

const sidebarOptions = [
  { icon: <ShowChartOutlinedIcon />, text: "Dashboard" },
  { icon: <FolderOutlinedIcon />, text: "Folders" },
  { icon: <NoteOutlinedIcon />, text: "Projects" },
  { icon: <AssignmentTurnedInOutlinedIcon />, text: "Tasks" },
  { icon: <SettingsOutlinedIcon />, text: "Settings" },
];

const Sidebar = () => {
  const classes = useStyles();
  const [activeItemIdx, setActiveItemIdx] = useState(0);

  return (
    <Box className={classes.container}>
      <Typography className={classes.brand}>S</Typography>
      <List className={classes.list}>
        {sidebarOptions.map((option, idx) => (
          <ListItem
            className={
              idx === activeItemIdx
                ? [classes.listItemActive, classes.listItem].join(" ")
                : classes.listItem
            }
            button
            key={idx}
            onClick={() => setActiveItemIdx(idx)}
          >
            <ListItemIcon className={classes.listIcon}>
              {option.icon}
            </ListItemIcon>
            <ListItemText className={classes.listText} primary={option.text} />
          </ListItem>
        ))}
      </List>
      <Box className={classes.userBox}>
        <Avatar src={avatar} style={{ width: 45, height: 45 }} />
        <Typography className={classes.userName}>Devin Lee</Typography>
        <IconButton style={{ marginLeft: "auto" }}>
          <ChevronRightIcon className={classes.chevIcon} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Sidebar;
