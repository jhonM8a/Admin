import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import NoMatch from "../pages/NoMatch";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin" component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
