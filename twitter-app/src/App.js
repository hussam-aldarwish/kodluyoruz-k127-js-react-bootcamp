import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/reducers/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.scss";
import LeftPane from "./components/leftPane/LeftPane";
import Rightpane from "./components/rigtePane/Rightpane";
import Tweet from "./components/Tweet";

function App() {
  const theme = useSelector(selectTheme);
  return (
    <div className="App">
      <Helmet htmlAttributes={{ theme: theme }} />
      <LeftPane />
      <Switch>
        <Router>
          <Route path="/">
            <Tweet />
          </Route>
          <Rightpane />
        </Router>
      </Switch>
    </div>
  );
}

export default App;
