import React from "react";
import "./styles/header.css";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.png";

const styles = theme => ({
  signOutBtn: {
    color: "#ffffff",
    borderColor: "#ffffff"
  }
});

function RciHeader(props) {
  const { classes } = props;
  return (
    <div className="header">
      <Grid container spacing={0}>
        <Grid item xs={6} className="logo">
          <img src={logo} />
        </Grid>

        <Grid item xs={6}>
          <div className="usrProf">
            <label className="lbl">Welcome {props.userName}</label>
            <Button
              variant="outlined"
              color="primary"
              className={classNames(classes.signOutBtn)}
            >
              SIGN OUT
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(RciHeader);
