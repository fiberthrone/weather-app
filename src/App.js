import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHome from "./PageHome";
import Page404 from "./Page404";

const basename = process.env.NODE_ENV === "development" ? "/" : process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <Router basename={basename}>
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
