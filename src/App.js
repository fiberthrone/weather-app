import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHome from "./PageHome";
import Page404 from "./Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
