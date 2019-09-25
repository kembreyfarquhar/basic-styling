import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/materialuibasic.scss";
import "../../styles/global.scss";
import {
  Container,
  TextField,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button
} from "@material-ui/core";

function MaterialUIBasic() {
  return (
    <div className="Main material-ui-basic">
      <NavLink className="link" to="/">
        Back to Home
      </NavLink>

      <h2>MaterialUI Basic</h2>

      <Container className="container">
        <h2>Welcome Back!</h2>

        <h4>
          Log in to This<span>App</span>
        </h4>

        <FormGroup className="form">
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
    </div>
  );
}

export default MaterialUIBasic;
