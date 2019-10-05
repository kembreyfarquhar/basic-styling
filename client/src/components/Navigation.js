import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Tooltip } from "@material-ui/core";
import "../styles/navigation.scss";

import nostyling from "../images/nostyling.png";
import basicstyling from "../images/basicstyling.png";
import materialuibasic from "../images/materialuibasic.png";
import semanticuibasic from "../images/semanticuibasic.png";

function Navigation() {
  return (
    <div className="navigation-container">
      <Modal
        trigger={
          <Tooltip title="How to use this app">
            <Button className="modal-button">?</Button>
          </Tooltip>
        }
        basic
        size="small"
      >
        <Header content="Styling got you down?" />
        <Modal.Content>
          <p>
            This app provides basic styling examples, aiming to
            <br />
            <br />
            1) display differences between styling options
            <br />
            2) demonstrate how to implement/execute said styling options
            <br />
            3) provide guidance & inspiration for styling your apps.
            <br />
            <br />
            Click the phones to view the forms as well as the code files that
            style them. Each form element is clickable, demonstrating the
            different behaviors each styling option comes with. Poke around and
            have fun :)
          </p>
        </Modal.Content>
      </Modal>
      <div className="mobile-all">
        <Mobile
          title="HTML5 Default"
          image={nostyling}
          linkTo={"/no-styling"}
          alt={"form with no styling"}
        />
        <Mobile
          title="Custom (SASS)"
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
  const [active, setActive] = useState(false);

  return (
    <div className="card">
      <h1 className={active ? "active" : "not-active"}>{props.title}</h1>
      <div
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="mobile-container"
      >
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
