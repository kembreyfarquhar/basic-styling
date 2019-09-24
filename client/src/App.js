import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import NoStyling from "./components/NoStyling";
import BasicStyling from "./components/BasicStyling";

function App() {
  return (
    <div>
      <Route exact path="/" component={Navigation} />
      <Route path="/no-styling" component={NoStyling} />
      <Route path="/basic-styling" component={BasicStyling} />
    </div>
  );
}

export default App;
