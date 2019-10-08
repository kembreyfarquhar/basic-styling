import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HTML5 from "./components/styled-comps/HTML5";
import CustomSASS from "./components/styled-comps/CustomSASS";
import MaterialUI from "./components/styled-comps/MaterialUI";
import SemanticUI from "./components/styled-comps/SemanticUI";

function ViewsContainer(props) {
  return (
    <>
      <NavBar />
      <Route path="/views/html5" component={HTML5} />
      <Route path="/views/custom-sass" component={CustomSASS} />
      <Route path="/views/materialui" component={MaterialUI} />
      <Route path="/views/semanticui" component={SemanticUI} />
    </>
  );
}

export default ViewsContainer;
