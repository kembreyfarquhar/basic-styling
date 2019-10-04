import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.scss";
import nostyling from "../images/nostyling.png";
import basicstyling from "../images/basicstyling.png";
import materialuibasic from "../images/materialuibasic.png";
import semanticuibasic from "../images/semanticuibasic.png";

function Navigation() {
  return (
    <div className="navigation-container">
      <div className="mobile-all">
        <Mobile
          title="No Styling"
          image={nostyling}
          linkTo={"/no-styling"}
          alt={"form with no styling"}
        />
        <Mobile
          title="Styling (SASS)"
          image={basicstyling}
          linkTo={"/basic-styling"}
          alt={"form with basic styling"}
        />
        <Mobile
          title="Material-UI"
          image={materialuibasic}
          linkTo={"/materialui-basic"}
          alt={"form styled with basic material-u-i components"}
        />
        <Mobile
          title="Semantic-UI"
          image={semanticuibasic}
          linkTo={"/semanticui-basic"}
          alt={"form styled with basic semantic-u-i components"}
        />
      </div>
      <hr />
      <footer>
        Made by<a href="https://github.com/kmcknight1">Katie McKnight</a>
        September 2019
      </footer>
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
