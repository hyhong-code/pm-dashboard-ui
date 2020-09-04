import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ShowChartOutlinedIcon from "@material-ui/icons/ShowChartOutlined";
import FolderOutlinedIcon from "@material-ui/icons/FolderOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5.5),
    borderRight: `1px solid #eeeeee`,
    height: "100vh",
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
    </Box>
  );
};

export default Sidebar;
