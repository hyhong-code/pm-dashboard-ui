import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => {
  return (
    <Box style={{ backgroundColor: "#fff" }}>
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <Main />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
