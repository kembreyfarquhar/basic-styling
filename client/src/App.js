import React from "react";
import { Route } from "react-router-dom";
import "./styles/global.scss";

import MainPage from "./components/MainPage";
import HTML5 from "./components/styled-comps/HTML5";
import CustomSASS from "./components/styled-comps/CustomSASS";
import MaterialUI from "./components/styled-comps/MaterialUI";
import SemanticUI from "./components/styled-comps/SemanticUI";

function App() {
  return (
    <div className="Main">
      <Route exact path="/" component={MainPage} />
      <Route path="/html5" component={HTML5} />
      <Route path="/custom-sass" component={CustomSASS} />
      <Route path="/materialui" component={MaterialUI} />
      <Route path="/semanticui" component={SemanticUI} />
    </div>
  );
}

export default App;
