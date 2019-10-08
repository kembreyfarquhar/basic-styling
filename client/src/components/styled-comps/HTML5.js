import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/global.scss";

import CodeData from "../CodeData";

function HTML5() {
  return (
    <div className="Main">
      <NavLink className="link" to="/">
        Back to Home
      </NavLink>
      <h1>HTML5 Default</h1>
      <div className="html5-page">
        <h2>Welcome Back!</h2>
        <h3>Login to ThisApp</h3>
        <br />
        <form>
          <label>
            Username:
            <input type="text" />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input type="password" />
          </label>
          <br />
          <br />
          <label>
            Remember Me
            <input type="checkbox" />
          </label>
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
      <CodeData
        url={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/components/styled-comps/NoStyling.js"
        }
      />
    </div>
  );
}

export default HTML5;
