import React from "react";
import "./App.scss";
import LeftPane from "./components/leftPane/LeftPane";
import Rightpane from "./components/rigtePane/Rightpane";
import Tweet from "./components/Tweet";

function App() {
  return (
    <div className="App">
      <LeftPane />
      <Tweet />
      <Rightpane />
    </div>
  );
}

export default App;
