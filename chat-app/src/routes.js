import {
  HashRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/chat" />
        </Route>
        <Route path="/login">
          <p>Login!</p>
        </Route>
        <Route path="/chat">
          <p>Chat!</p>
        </Route>
        <Route path="/chat/:userid">
          <p>Chat - User!</p>
        </Route>
        <Route path="/user/:userid/details">
          <p>User Details!</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
