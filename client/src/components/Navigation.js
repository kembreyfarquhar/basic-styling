import React from "react";
import { NavLink } from "react-router-dom";
import "../main.css";

function Navigation() {
  return (
    <div>
      <Mobile />
      <NavLink to="/no-styling">No Styling</NavLink>
    </div>
  );
}

function Mobile(image) {
  return (
    <div className="mobile">
      <img className="image" src={image} alt="form with no styling" />
      <div className="home-button"></div>
    </div>
  );
}

export default Navigation;
