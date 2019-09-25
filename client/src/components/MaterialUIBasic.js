import React from "react";
import { NavLink } from "react-router-dom";
// import "../styles/basicstyling.scss";
import "../styles/global.scss";
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
    <div className="Main" style={{ fontFamily: "Roboto", textAlign: "center" }}>
      <NavLink className="link" to="/">
        Back to Home
      </NavLink>

      <h2>MaterialUI Basic (Default/No Custom Styles)</h2>

      <Container style={{ width: "20rem", border: "1px solid black" }}>
        <h2>Welcome Back!</h2>

        <h4>Log in to ThisApp</h4>

        <FormGroup>
          <div className="username-password">
            <TextField label="Username" type="text" variant="outlined" />
            <TextField label="Password" type="password" variant="outlined" />
          </div>
          <FormControlLabel
            label="Remember Me"
            control={<Checkbox color="primary" />}
          />
          <Button color="primary" variant="contained">
            Login
          </Button>
        </FormGroup>
      </Container>

      {/* <div className="login-box">

          <label className="check">
            Remember Me
            <input type="checkbox" />
          </label>

          <button type="submit">Login</button>
        </form>
      </div> */}
    </div>
  );
}

export default MaterialUIBasic;
