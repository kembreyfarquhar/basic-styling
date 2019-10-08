import React from "react";
import "../../styles/materialui.scss";
import "../../styles/global.scss";
import {
  Container,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button
} from "@material-ui/core";

import CodeData from "../CodeData";

function MaterialUI() {
  return (
    <div className="Main materialui-container">
      <h2>Material-UI</h2>

      <Container className="login-box">
        <h2 className="welcome-back">Welcome Back!</h2>

        <h4 className="login-message">Log in to ThisApp</h4>

        <FormGroup className="login-form">
          <div className="username-password">
            <TextField label="Username" type="text" variant="outlined" />
            <TextField label="Password" type="password" variant="outlined" />
          </div>
          <FormControlLabel
            label="Remember Me"
            control={<Checkbox color="primary" />}
          />
          <Button
            className="login-button"
            fullWidth
            size="large"
            color="primary"
            variant="contained"
          >
            Login
          </Button>
        </FormGroup>
      </Container>
      <CodeData
        url={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/components/styled-comps/MaterialUI.js"
        }
        styles={
          "https://raw.githubusercontent.com/kmcknight1/basic-styling/master/client/src/styles/materialui.scss"
        }
      />
    </div>
  );
}

export default MaterialUI;
