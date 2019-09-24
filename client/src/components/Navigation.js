import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

function Navigation() {
  return (
    <div className="navigation-container">
      <Mobile
        image={"https://docs.webix.com/media/desktop/htmlform.png"}
        linkTo={"/no-styling"}
      />
      <Mobile image={"https://docs.webix.com/media/desktop/htmlform.png"} />
      <Mobile image={"https://docs.webix.com/media/desktop/htmlform.png"} />
      <Mobile image={"https://docs.webix.com/media/desktop/htmlform.png"} />
      {/* <NavLink to="/no-styling">No Styling</NavLink> */}
    </div>
  );
}

function Mobile(props) {
  return (
    <div className="mobile-container">
      <Link to={props.linkTo}>
        <div className="mobile">
          <img className="image" src={props.image} alt="form with no styling" />
          <div className="home-button"></div>
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
