import { Switch, Route } from "react-router-dom";
import LeftPane from "./components/leftPane/LeftPane";
import Rightpane from "./components/rigtePane/Rightpane";
import Tweet from "./components/Tweet";
import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
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
  </Switch>
);

export default Routes;
