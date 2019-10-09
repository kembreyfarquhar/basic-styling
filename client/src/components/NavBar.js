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
                <Tooltip title={`${link.toUpperCase()}`}>
                  <img src={links[link]} alt={`link to ${link} styled form`} />
                </Tooltip>
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
            {window.location.pathname === "/views/html-5" && (
              <>
                <p>
                  The purpose of this form is to demonstrate the default styling
                  of html5 elements.
                  <br />
                  <br />
                  Knowing the default styles and behavior of elements is really
                  helpful when building/styling an app from scratch. You'll
                  probably change quite a bit, but this is like your starting
                  point... a very basic foundation to build on top of.
                </p>
              </>
            )}
            {window.location.pathname === "/views/custom-sass" && (
              <>
                <p>
                  If you've never used SASS to style one of your apps before,
                  you should definitely check it out.
                  <br />
                  <br />
                  SASS is CSS, but extra. It allows for nested styles,
                  variables, custom functions, and more features & abilities
                  than any other CSS extension language.
                  <br />
                  <br />
                  For help getting started using SASS in your react app{" "}
                  <a
                    href="https://www.w3schools.com/react/react_sass.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here
                  </a>
                  .
                </p>
              </>
            )}
            {window.location.pathname === "/views/material-ui" && (
              <>
                <p>
                  This styling library is used all over the internet. Several
                  famous apps use it and it's easy to see why. Click around the
                  form to see the default behavior of Material-UI components.
                  <br />
                  <br />
                  The purpose of this form is to show some of the basic
                  components available to you straight out of the Material-UI
                  library. To get started using this library in your react app{" "}
                  <a
                    href="https://material-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here
                  </a>
                  .
                </p>
              </>
            )}
            {window.location.pathname === "/views/semantic-ui" && (
              <>
                <p>
                  This styling library is also one of the most popular. You'll
                  find instances of Semantic-UI all throughout the web. Click
                  around this form to see some of the default behaviors of
                  Semantic-UI components.
                  <br />
                  <br />
                  The purpose of this form is to show some of the basic
                  components available to you straight out of the Semantic-UI
                  library. To get started using this library in your react app{" "}
                  <a
                    href="https://react.semantic-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    click here
                  </a>
                  .
                </p>
              </>
            )}
          </Modal.Content>
        </Modal>
      </div>
    </div>
  );
}

export default NavBar;
