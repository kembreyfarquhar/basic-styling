import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.scss";
import nostyling from "../images/nostyling.png";
import basicstyling from "../images/basicstyling.png";
import materialuibasic from "../images/materialuibasic.png";

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="intro">Click the example to view the code 👀</div>
      <div className="mobile-all">
        <Mobile
          title="No Styling"
          image={nostyling}
          linkTo={"/no-styling"}
          alt={"form with no styling"}
        />
        <Mobile
          title="Basic Styling (SASS)"
          image={basicstyling}
          linkTo={"/basic-styling"}
          alt={"form with basic styling"}
        />
        <Mobile
          title="Basic Material-UI"
          image={materialuibasic}
          linkTo={"/materialui-basic"}
          alt={"form styled with basic material-u-i components"}
        />
      </div>
    </div>
  );
}

function Mobile(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <div className="mobile-container">
        <Link to={props.linkTo}>
          <div className="mobile">
            <img className="image" src={props.image} alt={props.alt} />
            <div className="home-button"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
