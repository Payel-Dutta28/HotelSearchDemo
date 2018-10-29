import React from "react";
import classNames from "classnames";
import "./RowComponentStyle.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function HotelDetailsRowComponent(props) {
  const { classes } = props;
  console.log("Row component phones", props.hotelRow.hotel.phones);
  const phonesArray = props.hotelRow.hotel.phones;
  const amenities = props.hotelRow.hotel.amenities;

  return (
    <div className="row-wrapper">
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <img src={props.hotelRow.hotel.url} />
        </Grid>
        <Grid item xs={4}>
          <div className="hotelNameContainer">
            <h2>{props.hotelRow.hotel.name}</h2>
          </div>
          <div className="hotelDetailsContainer">
            <p className="rating">
              Rating
              <span>{props.hotelRow.hotel.rating}</span>
            </p>
            <p className="address">
              {props.hotelRow.hotel.address.streetNumber},
              {props.hotelRow.hotel.address.streetName},
              {props.hotelRow.hotel.address.city}
              <br />
              {props.hotelRow.hotel.address.zip}
              {props.hotelRow.hotel.address.country}
            </p>

            {phonesArray.map(function(row, i) {
              return (
                <p>
                  <span> {row.phoneType}</span>
                  <span>{row.phoneNumber}</span>
                </p>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={3} className="hotelInfo">
          <ul>
            {amenities.map(function(amenitie) {
              return <li key={amenitie.id}>{amenitie.description}</li>;
            })}
          </ul>
        </Grid>
        <Grid item xs={2} className="rateContainer">
          <div>
            <div className="rate">
              <span>From</span>
              <div className="min-rate">{props.hotelRow.minimum.price}</div>
              <Button
                variant="contained"
                color="primary"
                className="search-btn"
              >
                Select
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HotelDetailsRowComponent;
