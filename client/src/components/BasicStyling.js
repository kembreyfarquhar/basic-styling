import React from "react";
import { NavLink } from "react-router-dom";

function BasicStyling() {
  return (
    <div
      style={{
        width: "15rem",
        fontFamily: "helvetica",
        fontWeight: 100,
        textAlign: "center"
      }}
    >
      <NavLink to="/">Back to Home</NavLink>

      <h2>Basic Styling</h2>

      <div
        style={{
          border: "1px solid black",
          height: "20rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <h2
          style={{
            fontWeight: 300,
            display: "inline-block",
            background: "darkslateblue",
            padding: "1rem",
            color: "white",
            width: "87%",
            margin: "0"
          }}
        >
          Welcome Back!
        </h2>

        <form
          style={{
            height: "100%",
            marginTop: "3rem"
          }}
        >
          <div
            style={{
              height: "40%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly"
            }}
          >
            <label>
              Username:
              <input
                style={{
                  height: "1rem",
                  margin: "0.3rem",
                  borderRadius: "5px"
                }}
                type="text"
              />
            </label>

            <label>
              Password:
              <input
                style={{
                  height: "1rem",
                  margin: "0.3rem",
                  borderRadius: "5px"
                }}
                type="password"
              />
            </label>
          </div>

          <label style={{ display: "block", marginBottom: "2rem" }}>
            Remember Me
            <input type="checkbox" />
          </label>

          <button
            type="submit"
            style={{
              background: "darkslateblue",
              color: "white",
              fontSize: "0.9rem",
              padding: "0.5rem 1.5rem",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default BasicStyling;
