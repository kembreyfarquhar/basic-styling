import React from "react";
import { Route } from "react-router-dom";
import "./styles/global.scss";

import Navigation from "./components/Navigation";
import NoStyling from "./components/styled-comps/NoStyling";
import BasicStyling from "./components/styled-comps/BasicStyling";
import MaterialUIBasic from "./components/styled-comps/MaterialUIBasic";

function App() {
  return (
    <div className="Main">
      <Route exact path="/" component={Navigation} />
      <Route path="/no-styling" component={NoStyling} />
      <Route path="/basic-styling" component={BasicStyling} />
      <Route path="/materialui-basic" component={MaterialUIBasic} />
    </div>
  );
}

export default App;
