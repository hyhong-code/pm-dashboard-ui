import React from "react";
import { makeStyles } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(5.5),
    height: 90,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingLeft: theme.spacing(8.875),
    paddingRight: theme.spacing(6.25),
  },
  formControl: {
    width: "21.5rem",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    top: "50%",
    transform: `translateY(-40%)`,
    left: theme.spacing(3),
    width: 24,
    color: `rgba(0,0,0,0.4)`,
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.spacing(8),
      paddingLeft: theme.spacing(4.5),
    },
    "& .MuiInputLabel-outlined": {
      transform: `translate(58px, 12px)`,
      ...theme.typography.headerSearch,
      "&.MuiInputLabel-shrink": {
        transform: `translate(16px, -5px) scale(0.75)`,
        color: `#3f51b5`,
        fontWeight: 700,
      },
    },
  },
  right: {
    display: "flex",
    alignItems: "flex-start",
  },
  rightIcons: {
    color: theme.palette.common.black,
    width: 22,
    height: 22,
  },
  dateTime: {
    marginLeft: theme.spacing(6.875),
  },
  time: {
    ...theme.typography.headerTime,
    lineHeight: 1.2,
  },
  date: {
    ...theme.typography.headerDate,
    textAlign: "right",
  },
}));

const Topbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box component="form" className={classes.formControl}>
        <SearchOutlinedIcon className={classes.searchIcon} />
        <TextField
          margin="dense"
          className={classes.textField}
          fullWidth
          variant="outlined"
          label="Search"
        />
      </Box>
      <Box className={classes.right}>
        <IconButton>
          <MailOutlineIcon className={classes.rightIcons} />
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon className={classes.rightIcons} />
        </IconButton>
        <Box className={classes.dateTime}>
          <Typography className={classes.time}>17:30</Typography>
          <Typography className={classes.date}>18 August</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
