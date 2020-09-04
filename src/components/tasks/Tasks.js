import React, { Fragment } from "react";
import { useTheme, makeStyles, useMediaQuery } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

import { red, green, purple } from "../../theme";
import TaskItem from "./TaskItem";

const useStyles = makeStyles((theme) => ({
  taskList: {
    borderRadius: 10,
    backgroundColor: theme.palette.common.blueLight2,
    padding: 20,
    boxShadow: "none",
  },
}));

const tasks = [
  {
    color: red,
    taskName: "Better quality favicon",
    type: "Design",
  },
  {
    color: green,
    taskName: "Social accounts setup",
    type: "Marketing",
    extraInfoText: "12:30",
    extraInfoIcon: (
      <QueryBuilderIcon style={{ fontSize: 18, marginRight: 3 }} />
    ),
  },
  {
    color: purple,
    taskName: "Upgrade plan page",
    type: "Development",
    extraInfoText: "14:30",
    extraInfoIcon: (
      <QueryBuilderIcon style={{ fontSize: 18, marginRight: 3 }} />
    ),
  },
  {
    color: red,
    taskName: "Email templates",
    type: "Design",
    extraInfoText: "6",
    extraInfoIcon: <AttachFileIcon style={{ fontSize: 18, marginRight: 3 }} />,
  },
];

const Tasks = () => {
  const theme = useTheme();
  const classes = useStyles();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Fragment>
      <Typography
        style={{
          ...theme.typography.mainTitle,
          marginBottom: theme.spacing(2),
          marginTop: mdDown ? theme.spacing(2) : undefined,
        }}
      >
        Your Tasks
      </Typography>
      <List className={classes.taskList}>
        {tasks.map(
          ({ color, taskName, type, extraInfoText, extraInfoIcon }, idx) => (
            <TaskItem
              key={idx}
              color={color}
              taskName={taskName}
              type={type}
              extraInfoText={extraInfoText}
              extraInfoIcon={extraInfoIcon}
            />
          )
        )}
      </List>
    </Fragment>
  );
};

export default Tasks;
