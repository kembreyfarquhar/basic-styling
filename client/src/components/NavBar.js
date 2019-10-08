import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/global.scss";
import "../styles/navbar.scss";
import { Button, Header, Modal } from "semantic-ui-react";
import { Tooltip } from "@material-ui/core";

import html5 from "../images/mobile-html5.png";
import customsass from "../images/mobile-customsass.png";
import materialui from "../images/mobile-materialui.png";
import semanticui from "../images/mobile-semanticui.png";

function NavBar() {
  const links = {
    "html-5": html5,
    "custom-sass": customsass,
    "material-ui": materialui,
    "semantic-ui": semanticui
  };

  return (
    <div className="nav-bar">
      <NavLink className="back-container" to="/">
        <Button className="back">Back to Home</Button>
      </NavLink>

      <div className="nav-imgs">
        {Object.keys(links).map(link => {
          if (`/views/${link}` !== window.location.pathname) {
            return (
              <NavLink to={`/views/${link}`}>
                <img src={links[link]} alt={`link to ${link} styled form`} />
              </NavLink>
            );
          }
        })}
      </div>

      <div className="modal">
        <Modal
          trigger={
            <Tooltip title="Page Details">
              <Button className="modal-button">?</Button>
            </Tooltip>
          }
          basic
          size="small"
        >
          <Header
            content={`${window.location.pathname.slice(7).toUpperCase()}`}
          />
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
              different behaviors each styling option comes with. Poke around
              and have fun :)
            </p>
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}

export default NavBar;
