import React from "react";
import LeftPane from "../../components/leftPane/LeftPane";
import Rightpane from "../../components/rigtePane/Rightpane";
import Tweet from "../../components/Tweet";

const HomePage = () => {
  return (
    <>
      <LeftPane />
      <Tweet />
      <Rightpane />
    </>
  );
};

export default HomePage;
