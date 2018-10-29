import React, { Component } from "react";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store";
import "./App.css";
import "../_styles/style.css";

import CatContainer from "./CatContainer";

class App extends Component {
  render() {
    return (
      <div>
        <ConnectedRouter history={history}>
          <CatContainer />
        </ConnectedRouter>
      </div>
    );
  }
}

export default App;
