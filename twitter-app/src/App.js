import React from "react";
import "./App.scss";
import LeftPane from "./components/leftPane/LeftPane";
import Rightpane from "./components/rigtePane/Rightpane";
import Tweet from "./components/Tweet";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/reducers/theme";

function App() {
  const theme = useSelector(selectTheme);
  return (
    <div className="App">
      <Helmet htmlAttributes={{ theme: theme }} />
      <LeftPane />
      <Tweet />
      <Rightpane />
    </div>
  );
}

export default App;
