import React, { Fragment } from "react";
import { useTheme } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import ProjectCard from "./ProjectCard";
import { purple, red, green } from "../theme";

const projects = [
  { projectName: "Sintex", finished: 26, total: 47, color: purple },
  { projectName: "Tetrion", finished: 7, total: 21, color: red },
  { projectName: "Petron", finished: 14, total: 16, color: green },
];

const Projects = () => {
  const theme = useTheme();
  return (
    <Fragment>
      <Typography
        style={{
          ...theme.typography.mainTitle,
          marginTop: theme.spacing(3),
          marginBottom: theme.spacing(2),
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map(({ projectName, finished, total, color }, idx) => (
          <Grid item xs={6} key={idx}>
            <ProjectCard
              projectName={projectName}
              finished={finished}
              total={total}
              initialColor={color}
            />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default Projects;
