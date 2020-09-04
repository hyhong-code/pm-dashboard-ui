import React from "react";
import { makeStyles } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const useStyles = makeStyles((theme) => ({
  container: {
    height: 90,
    background: "#ddd",
  },
  formControl: {
    width: "21.5rem",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    top: "50%",
    transform: `translateY(-50%)`,
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
      transform: `translate(58px, 20px)`,
      ...theme.typography.headerSearch,

      "&.MuiInputLabel-shrink": {
        transform: `translate(16px, -3px) scale(0.75)`,
        color: `#3f51b5`,
        fontWeight: 700,
      },
    },
  },
}));

const Topbar = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box component="form" className={classes.formControl}>
        <SearchOutlinedIcon className={classes.searchIcon} />
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          label="Search"
        />
      </Box>
    </Box>
  );
};

export default Topbar;
