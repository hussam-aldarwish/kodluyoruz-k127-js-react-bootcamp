import React from "react";
import LeftPane from "../../components/leftPane/LeftPane";
import Rightpane from "../../components/rigtePane/Rightpane";
import Search from "../../components/Search/Search";

const SearchPage = () => {
  return (
    <>
      <LeftPane />
      <Search />
      <Rightpane />
    </>
  );
};

export default SearchPage;
