import React from "react";
import "./App.css";
import Home from "./Component/Home";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/**
       * <Router>
        <Switch>
          <Route path="/netflix">
            <Netflix />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
       * 
       */}
      <Home />
    </div>
  );
}

export default App;
