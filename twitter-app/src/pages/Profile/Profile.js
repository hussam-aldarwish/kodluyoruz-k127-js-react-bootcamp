import React from "react";
import LeftPane from "../../components/leftPane/LeftPane";
import Rightpane from "../../components/rigtePane/Rightpane";
import Profile from "../../components/Profile/Profile";

const ProfilePage = () => {
  return (
    <>
      <LeftPane />
      <Profile />
      <Rightpane />
    </>
  );
};

export default ProfilePage;
