import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/Login";
import NoMatch from "../pages/NoMatch";
import Home from "../pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/admin" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
