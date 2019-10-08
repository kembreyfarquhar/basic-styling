import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/semanticui.scss";
import "../../styles/global.scss";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

import CodeData from "../CodeData";

function SemanticUI() {
  return (
    <div className="Main semanticui-container">
      <div className="grid-column">
        <NavLink className="link" to="/">
          Back to Home
        </NavLink>
        <Header as="h1" textAlign="center">
          Semantic-UI Basic
        </Header>
        <div className="login-box">
          <Header className="welcome-back" as="h2" textAlign="center">
            Welcome back!
          </Header>
          <Header className="login-message" as="h3" textAlign="center">
            Login to ThisApp
          </Header>
          <Form>
            <Segment className="form">
              <Form.Input
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <label className="remember-me">
                Remember Me
                <Form.Input className="check" type="checkbox" />
              </label>
              <Button
                className="login-button"
                color="orange"
                fluid
                size="large"
              >
                Login
              </Button>
            </Segment>
          </Form>
        </div>
      </div>
      <CodeData
        url={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/components/styled-comps/SemanticUI.js"
        }
        styles={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/styles/semanticui.scss"
        }
      />
    </div>
  );
}

export default SemanticUI;
