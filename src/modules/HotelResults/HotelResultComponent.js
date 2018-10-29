import React from "react";
import HotelDetailsRowComponent from "./HotelDetailsRowComponent";

export class HotelResultComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const _hotelList = this.props.hotelList;
    return (
      <ul>
        {_hotelList.map(function(row, i) {
          return (
            <li key={i}>
              <HotelDetailsRowComponent hotelRow={row} />
            </li>
          );
        })}
      </ul>
    );
  }
}
