import React from "react";

import "./ducks/style.css";
import { InlineDatePicker } from "material-ui-pickers/DatePicker";
import MomentUtils from "material-ui-pickers/utils/moment-utils";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import MinusIcon from "@material-ui/icons/Remove";

import Button from "@material-ui/core/Button";

import { NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export class SearchResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: "",
      checkOutDate: "",
      inputValue: "",
      location: "",
      adults: 1,
      children: 0,
      count: 1
    };
  }

  handleChange = name => event => {
    if (event.target.value.length > 2) {
      console.log(
        "greater than 3",
        event.target.value.length,
        event.target.value
      );
      this.props.action.fetchLocationSearchResult(event.target.value);
    }
    this.setState({
      location: event.target.value
    });
    console.log("LOCATION in state", this.state.location);
  };

  handleCheckInDateChange = date => {
    this.setState({ checkInDate: date.format("YYYY-MM-DD") });
  };
  handleCheckOutDateChange = date => {
    this.setState({ checkOutDate: date.format("YYYY-MM-DD") });
  };
  handleMenuItemClick = value => {
    console.log("Selected location", value);
    this.setState({
      location: value
    });
    this.props.action.hideSuggestions();
  };
  handleCountChange = (eventName, field) => {
    switch (eventName) {
      case "add": {
        switch (field) {
          case "adults": {
            this.setState({ adults: this.state.adults + 1 });
            return;
          }
          case "children": {
            this.setState({ children: (this.state.children += 1) });
            return;
          }
          case "count": {
            this.setState({ count: (this.state.count += 1) });
            return;
          }
        }
      }
      case "sub": {
        switch (field) {
          case "adults": {
            this.setState({ adults: this.state.adults - 1 });
            return;
          }
          case "children": {
            this.setState({ children: (this.state.children -= 1) });
            return;
          }
          case "count": {
            this.setState({ count: (this.state.count -= 1) });
            return;
          }
        }
      }
    }
  };

  render() {
    const {
      route,
      adults,
      action,
      showSuggestion,
      locationListResult
    } = this.props;
    console.log(
      "Will Show Suggestion",
      showSuggestion,
      this.props.showSuggestion,
      locationListResult
    );
    return (
      <div className="search-wrapper">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          {/* <Grid container spacing={0} className="row"> */}
          <div className="destination-row">
            <h3>*Destination</h3>
            {showSuggestion ? (
              <div>
                <TextField
                  required
                  id="standard-dense"
                  margin="normal"
                  onChange={this.handleChange("name")}
                  margin="dense"
                  className="destination-text-field"
                  value={this.state.location}
                />

                {locationListResult.map(option => (
                  <MenuItem
                    key={option.clarifiedLocation}
                    value={option.clarifiedLocation}
                    onClick={event =>
                      this.handleMenuItemClick(option.clarifiedLocation)
                    }
                  >
                    {option.clarifiedLocation}
                  </MenuItem>
                ))}
              </div>
            ) : (
              <TextField
                required
                id="standard-dense"
                margin="normal"
                onChange={this.handleChange("name")}
                margin="dense"
                className="destination-text-field"
                value={this.state.location}
              />
            )}
          </div>

          {/* <input
                type="text"
                name="fname"
                value={this.state.location}
                onChange={this.handleChange("name")}
              /> */}
          {/* </Grid> */}
          {/* </Grid> */}
          <Grid container spacing={0} className="row">
            {" "}
            <Grid item xs={6}>
              <div className="picker">
                <h3>Check In</h3>
                <InlineDatePicker
                  required
                  keyboard
                  // label="Check In"
                  // InputProps={{
                  //   disableUnderline: true
                  // }}
                  format="DD/MM/YYYY"
                  mask={[
                    /\d/,
                    /\d/,
                    "/",
                    /\d/,
                    /\d/,
                    "/",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/
                  ]}
                  disablePast
                  value={this.state.checkInDate}
                  onChange={this.handleCheckInDateChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="picker">
                <h3>Check Out</h3>
                <InlineDatePicker
                  required
                  keyboard
                  // label="Check Out"
                  // InputProps={{
                  //   disableUnderline: true
                  // }}
                  minDate={this.state.checkInDate}
                  value={this.state.checkOutDate}
                  onChange={this.handleCheckOutDateChange}
                  format="DD/MM/YYYY"
                  mask={[
                    /\d/,
                    /\d/,
                    "/",
                    /\d/,
                    /\d/,
                    "/",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/
                  ]}
                />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={0} className="row">
            <Grid item xs={4}>
              <h3>Adults</h3>
              <div className="incrementer-box">
                <IconButton
                  onClick={() => {
                    this.handleCountChange("add", "adults");
                  }}
                  //onClick={action.addition}
                  aria-label="add"
                >
                  <AddIcon />
                </IconButton>
                {/* <TextField required value={this.state.adults} margin="normal" /> */}
                <input type="text" name="fname" value={this.state.adults} />
                <IconButton
                  aria-label="Delete"
                  onClick={evt => {
                    this.handleCountChange("sub", "adults");
                  }}
                  id="minus"
                >
                  <MinusIcon />
                </IconButton>
              </div>
            </Grid>
            <Grid item xs={4}>
              <h3>Children</h3>
              <div className="incrementer-box">
                <IconButton
                  aria-label="Delete"
                  onClick={() => {
                    this.handleCountChange("add", "children");
                  }}
                >
                  <AddIcon />
                </IconButton>
                {/* <TextField
                  required
                  id="children"
                  label="children"
                  value={this.state.children}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  variant="filled"
                /> */}
                <input type="text" name="fname" value={this.state.children} />
                <IconButton
                  aria-label="Delete"
                  onClick={() => {
                    this.handleCountChange("sub", "children");
                  }}
                >
                  <MinusIcon />
                </IconButton>
              </div>
            </Grid>
            <Grid item xs={4}>
              <h3>Rooms</h3>

              <div className="incrementer-box">
                <IconButton
                  aria-label="Delete"
                  onClick={() => {
                    this.handleCountChange("add", "count");
                  }}
                >
                  <AddIcon />
                </IconButton>
                {/* <TextField
                  required
                  id="rooms"
                  label="Rooms"
                  value={this.state.rooms}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  variant="filled"
                /> */}
                <input type="text" name="fname" value={this.state.count} />
                <IconButton
                  aria-label="Delete"
                  onClick={() => {
                    this.handleCountChange("sub", "count");
                  }}
                >
                  <MinusIcon />
                </IconButton>
              </div>
              {/* </div> */}
            </Grid>
            {/* <Grid item xs={6} className="preference-row"> */}
            {/* <h3>Rate Preference</h3>
          <input /> */}
            {/* </Grid> */}
          </Grid>
          <div className="search-btn-home">
            <NavLink to="/hotelsearchresult">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  action.fetchHotelSearchResult(this.state);
                }}
              >
                {/* //<img src={icons.searchBtnIcon} className="search-btn-img" />{" "} */}
                Search
              </Button>
            </NavLink>
          </div>
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}
