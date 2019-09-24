import React from "react";
import { NavLink } from "react-router-dom";

function NoStyling() {
  return (
    <div>
      <NavLink to="/">Back</NavLink>
      <h2>No Styling</h2>
      <div className="page">
        <h1>Welcome Back!</h1>
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
    </div>
  );
}

export default NoStyling;
