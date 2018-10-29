import React from "react";
import "../App/CatComponentStyle.css";
import RouteComponent from "../routes/RouteComponent";
import backgroundImg from "../assets/traveling.jpg";

export const CatComponent = props => {
  return (
    <div className="container">
      {/* //<img src={backgroundImg} /> */}
      <div className="innerContainer">
        <RouteComponent />
      </div>
    </div>
  );
};
