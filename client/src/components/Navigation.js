import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.scss";
import nostyling from "../images/nostyling.png";
import basicstyling from "../images/basicstyling.png";
import materialuibasic from "../images/materialuibasic.png";

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="intro">Click the desired example to view the code</div>
      <div className="mobile-all">
        <Mobile
          image={nostyling}
          linkTo={"/no-styling"}
          alt={"form with no styling"}
        />
        <Mobile
          image={basicstyling}
          linkTo={"/basic-styling"}
          alt={"form with basic styling"}
        />
        <Mobile
          image={materialuibasic}
          linkTo={"/materialui-basic"}
          alt={"form styled with basic material-u-i components"}
        />
        <Mobile
          image={"https://docs.webix.com/media/desktop/htmlform.png"}
          linkTo={"/materialui-custom"}
          alt={"form styled with customized material-u-i components"}
        />
        {/* <NavLink to="/no-styling">No Styling</NavLink> */}
      </div>
    </div>
  );
}

function Mobile(props) {
  return (
    <div className="mobile-container">
      <Link to={props.linkTo}>
        <div className="mobile">
          <img className="image" src={props.image} alt={props.alt} />
          <div className="home-button"></div>
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
