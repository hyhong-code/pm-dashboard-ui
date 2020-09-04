import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Sidebar from "./Sidebar";
import Main from "./Main";

const App = () => {
  return (
    <Box style={{ backgroundColor: "#fff", padding: "3rem" }}>
      <Container>
        <Box
          style={{
            boxShadow: "0 27px 78px -48px #709efd",
            borderRadius: "15px",
          }}
        >
          <Grid container>
            <Grid item xs={3}>
              <Sidebar />
            </Grid>
            <Grid item xs={9}>
              <Main />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
