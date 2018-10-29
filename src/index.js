import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import theme from "./RciTheme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import "./index.css";
import App from "./App/App";
import { store } from "./store";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
