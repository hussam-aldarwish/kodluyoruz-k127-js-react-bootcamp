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
import Login from "./components/Login/Login";
import SignIn from "./components/Login/SignUp";
import SignUp from "./components/Login/SignUp";

function App() {
  const theme = useSelector(selectTheme);
  return (
    <Router>
      <Switch>
        <div className="App">
        <Helmet htmlAttributes={{ theme: theme }} />
         
          <Route path="/" exact >
             <LeftPane />
             <Tweet />
             <Rightpane />
          </Route>
          <Route path="/Search">
          <LeftPane />
            <Search />
             <Rightpane />
          </Route>
          <Route path="/Profile">
            <LeftPane />
            <Profile />
            <Rightpane />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/SignUp">
            <SignUp />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
