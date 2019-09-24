import React from "react";
import { NavLink } from "react-router-dom";

function NoStyling() {
  return (
    <div>
      <NavLink to="/">Back to Home</NavLink>
      <h1>No Styling</h1>
      <div className="page">
        <h2>Welcome Back!</h2>
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
    </div>
  );
}

export default NoStyling;
