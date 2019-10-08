import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/customsass.scss";
import "../../styles/global.scss";

import CodeData from "../CodeData";

function CustomSASS() {
  return (
    <div className="custom-sass-container Main">
      <NavLink className="link" to="/">
        Back to Home
      </NavLink>
      <h2>Custom (SASS)</h2>
      <div className="login-box">
        <h2 className="welcome-back">Welcome Back!</h2>

        <h4 className="login-message">Log in to ThisApp</h4>

        <form className="login-form">
          <div className="username-password">
            <input placeholder="Username" type="text" />
            <input placeholder="Password" type="password" />
          </div>

          <label className="check">
            Remember Me
            <input type="checkbox" />
          </label>

          <button className="submit-button" type="submit">
            Login
          </button>
        </form>
      </div>
      <CodeData
        url={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/components/styled-comps/CustomSASS.js"
        }
        styles={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/styles/customsass.scss"
        }
      />
    </div>
  );
}

export default CustomSASS;
