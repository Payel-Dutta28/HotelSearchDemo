import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff8433",
      main: "#da6700",
      dark: "#b24700",
      contrastText: "#fff"
    },
    secondary: {
      light: "#999999",
      main: "#565656",
      dark: "#4E4848",
      contrastText: "#000"
    }
  }
});

export default theme;
