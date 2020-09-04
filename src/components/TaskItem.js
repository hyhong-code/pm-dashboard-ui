import React, { useState } from "react";
import { useTheme, makeStyles } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

const useStyles = makeStyles((theme) => ({
  task: {
    backgroundColor: "#fff",
    borderRadius: 5,
    height: 90,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: theme.spacing(0.5),
    boxShadow: `0 4px 10px -7px ${theme.palette.common.blue}`,
    position: "relative",
    marginBottom: 10,
  },
  taskFinised: {
    boxShadow: "none",
  },
  taskName: {
    ...theme.typography.taskTitle,
    marginBottom: theme.spacing(1),
  },
  checkButton: {
    marginRight: theme.spacing(0.5),
    transform: `translateY(-1rem)`,
  },
  chip: {
    height: 25,
    borderRadius: 12.5,
    color: "#fff",
  },
  extraInfo: {
    position: "absolute",
    right: theme.spacing(2),
    bottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const TaskItem = ({ color, type, taskName, extraInfoText, extraInfoIcon }) => {
  const [checked, setChecked] = useState(false);
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ListItem
      className={
        checked ? [classes.task, classes.taskFinised].join(" ") : classes.task
      }
    >
      <IconButton
        className={classes.checkButton}
        onClick={() => setChecked((prev) => !prev)}
      >
        {checked ? (
          <CheckCircleIcon style={{ color: theme.palette.common.blue }} />
        ) : (
          <RadioButtonUncheckedIcon style={{ color: "#dedede" }} />
        )}
      </IconButton>
      <Box>
        <Typography className={classes.taskName}>{taskName}</Typography>
        <Chip
          className={classes.chip}
          style={{ backgroundColor: color }}
          label={type}
        />
        <Box className={classes.extraInfo}>
          {extraInfoIcon}
          <Typography style={{ ...theme.typography.small }}>
            {extraInfoText}
          </Typography>
        </Box>
      </Box>
    </ListItem>
  );
};

export default TaskItem;
