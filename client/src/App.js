import React from "react";
import { Route } from "react-router-dom";
import "./styles/global.scss";

import Navigation from "./components/Navigation";
import NoStyling from "./components/NoStyling";
import BasicStyling from "./components/BasicStyling";
import MaterialUIBasic from "./components/MaterialUIBasic";

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
