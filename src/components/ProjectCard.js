import React from "react";
import { makeStyles } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "8.5rem",
    borderRadius: 10,
    backgroundColor: theme.palette.common.blueLight2,
    boxShadow: "none",
    overflow: "hidden",
    position: "relative",
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
      alignItems: "center",
      justifyContent: "center",
    },
  },
  avatar: {
    backgroundColor: "#fff",
    width: 45,
    height: 45,
    transform: "translateY(-20px)",
  },
  initial: {
    ...theme.typography.mainProjectInitial,
  },
  detail: {
    width: "60%",
    marginLeft: theme.spacing(1.5),
  },
  projectName: {
    ...theme.typography.mainProjectName,
    textTransform: "none",
    marginBottom: theme.spacing(2.5),
  },
  progressText: {
    ...theme.typography.small,
    textTransform: "none",
  },
  progressBar: {
    marginBottom: theme.spacing(0.5),
    boxShadow: `0 2px 2px #ecf2ff`,
    "&.MuiLinearProgress-colorPrimary": {
      backgroundColor: "#fff",
      borderRadius: 3,
    },
    "& .MuiLinearProgress-barColorPrimary": {
      borderRadius: 3,
      backgroundImage: `linear-gradient(to right,#3755e3, #74a3ff 85%)`,
    },
  },
}));

const ProjectCard = ({ projectName, initialColor, finished, total }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Button className={classes.button} classes={{ root: classes.btnRoot }}>
        <Avatar className={classes.avatar}>
          <Typography
            className={classes.initial}
            style={{ color: initialColor }}
          >
            {projectName && projectName.slice(0, 1).toUpperCase()}
          </Typography>
        </Avatar>
        <Box className={classes.detail}>
          <Typography align="left" className={classes.projectName}>
            {projectName}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={(finished / total) * 100}
            className={classes.progressBar}
          />
          <Typography align="left" className={classes.progressText}>
            {finished}/{total}
          </Typography>
        </Box>
      </Button>
    </Card>
  );
};

export default ProjectCard;
