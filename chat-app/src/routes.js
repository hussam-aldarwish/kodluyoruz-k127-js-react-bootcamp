import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Chat from "./pages/chat";
import Login from "./pages/login";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/chat" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path={["/chat", "/chat/:userid"]} exact>
          <Chat />
        </Route>
        <Route path="/user/:userid/details">
          <p>User Details!</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
