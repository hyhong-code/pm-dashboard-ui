import { createMuiTheme } from "@material-ui/core";

const black = "#0a0e1c";
const blue = "#4c6ae6";
const red = "#ff6161";
const green = "#90c335";
const purple = "#985bff";
const white = "#fff";
const blueLight1 = "#75a4ff";
const blueLight2 = "#f4f9ff";

export default createMuiTheme({
  palette: {
    common: {
      black,
      blue,
      red,
      green,
      purple,
      blueLight1,
      blueLight2,
    },
  },
  typography: {
    fontFamily: "muli, sans-serif",
    headerTime: {
      fontSize: 36,
      color: black,
    },
    headerDate: {
      fontSize: 14,
      color: black,
    },
    headerSearch: {
      fontSize: 16,
      color: `rgba(0,0,0,0.5)`,
    },
    sidebarBrand: {
      fontSize: 33,
      fontWeight: 900,
      color: black,
    },
    sidebarText: {
      fontSize: 16,
      color: black,
    },
    sidebarName: {
      fontSize: 16,
      fontWeight: "700",
      color: black,
    },
    mainTitle: {
      fontSize: 14,
      fontWeight: 700,
      color: black,
    },
    mainProjectName: {
      fontSize: 18,
      fontWeight: 700,
      color: black,
    },
    mainProjectInitial: {
      fontSize: 20,
      fontWeight: 900,
    },
    taskTitle: {
      fontSize: 16,
      color: black,
    },
    taskType: {
      fontSize: 12,
      fontWeight: 700,
      color: white,
    },
    small: {
      fontSize: 12,
      color: black,
    },
  },
});
