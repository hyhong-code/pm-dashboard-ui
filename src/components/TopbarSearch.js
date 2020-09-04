import React from "react";
import { makeStyles } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const useStyles = makeStyles((theme) => ({
  formControl: {
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    top: "50%",
    transform: `translateY(-40%)`,
    left: theme.spacing(3),
    fontSize: 24,
    color: `rgba(0,0,0,0.4)`,
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: theme.spacing(8),
      paddingLeft: theme.spacing(4.5),
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.common.black,
      },
    },
    "& .MuiInputLabel-outlined": {
      transform: `translate(58px, 12px)`,
      ...theme.typography.headerSearch,
      "&.MuiInputLabel-shrink": {
        transform: `translate(14px, -7px) scale(0.75)`,
        color: theme.palette.common.black,
        fontWeight: 700,
      },
    },
  },
}));

const TopbarSearch = ({ width }) => {
  const classes = useStyles();
  return (
    <Box component="form" className={classes.formControl} style={{ width }}>
      <SearchOutlinedIcon className={classes.searchIcon} />
      <TextField
        margin="dense"
        className={classes.textField}
        fullWidth
        variant="outlined"
        label="Search"
      />
    </Box>
  );
};

export default TopbarSearch;
