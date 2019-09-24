import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import NoStyling from "./components/NoStyling";

function App() {
  return (
    <div>
      <Navigation />

      <Route path="/no-styling" component={NoStyling} />
    </div>
  );
}

export default App;
