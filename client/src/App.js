import React from "react";
import { Route } from "react-router-dom";
import "./styles/global.scss";

import MainPage from "./components/MainPage";
import ViewsContainer from "./components/ViewsContainer";

function App() {
  return (
    <div className="Main">
      <Route exact path="/" component={MainPage} />
      <Route path="/views" component={ViewsContainer} />
    </div>
  );
}

export default App;
