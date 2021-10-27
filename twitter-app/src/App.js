import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/reducers/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import LeftPane from "./components/leftPane/LeftPane";
import Rightpane from "./components/rigtePane/Rightpane";
import Tweet from "./components/Tweet";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";

function App() {
  const theme = useSelector(selectTheme);
  return (
    <Router>
      <Switch>
        <div className="App">
          <Helmet htmlAttributes={{ theme: theme }} />
          <LeftPane />
          <Route path="/" component={Tweet} exact />
          <Route path="/Search">
            <Search />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Rightpane />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
