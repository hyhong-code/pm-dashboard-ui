import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

import Drawer from "./ui/Drawer";
import Sidebar from "./ui/Sidebar";
import Main from "./Main";

const App = () => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Box
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Container>
        <Box
          style={
            lgUp
              ? {
                  borderRight: `1px solid #eeeeee`,
                  borderLeft: `1px solid #eeeeee`,
                  minHeight: "100vh",
                }
              : { minHeight: "100vh" }
          }
        >
          <Drawer
            onClose={() => setDrawerOpen(false)}
            onOpen={() => setDrawerOpen(true)}
            open={drawerOpen}
          />
          <Grid container>
            <Hidden mdDown>
              <Grid item xs={3}>
                <Sidebar />
              </Grid>
            </Hidden>
            <Grid item xs={12} lg={9}>
              <Main onOpen={() => setDrawerOpen(true)} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default App;
