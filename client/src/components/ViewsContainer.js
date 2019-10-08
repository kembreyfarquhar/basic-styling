import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./NavBar";
import HTML5 from "./styled-comps/HTML5";
import CustomSASS from "./styled-comps/CustomSASS";
import MaterialUI from "./styled-comps/MaterialUI";
import SemanticUI from "./styled-comps/SemanticUI";

function ViewsContainer() {
  return (
    <>
      <NavBar />
      <Route path="/views/html-5" component={HTML5} />
      <Route path="/views/custom-sass" component={CustomSASS} />
      <Route path="/views/material-ui" component={MaterialUI} />
      <Route path="/views/semantic-ui" component={SemanticUI} />
    </>
  );
}

export default ViewsContainer;
