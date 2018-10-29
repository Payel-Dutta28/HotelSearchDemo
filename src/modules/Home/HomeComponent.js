import React from "react";
import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import Breadcrumbs from "../../_components/RciCatTitleBreadCrumb";
import Grid from "@material-ui/core/Grid";
import "../Home/ducks/style.css";

const sideBar = {
  backgroundColor: "#0964a9",
  height: "100%",
  borderRadius: "5px 0px 0px 5px"
};

export const HomeComponent = props => {
  return (
    <div>
      <Grid item xs={12}>
        {/* <Header userName="John Doe" /> */}
      </Grid>

      <Grid container spacing={0} className="innerComponent">
        {/* <Grid item xs={1}>
          <div style={sideBar}>
            <SideBar />
          </div> */}
        {/* </Grid> */}
        <Grid item xs={12}>
          <div className="rightComponent">
            <Breadcrumbs />
            <Switch>{renderRoutes(props.routes)}</Switch>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
