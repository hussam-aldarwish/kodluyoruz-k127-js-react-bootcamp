import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import "./Profile.scss";
import ProfileBottom from "./ProfileBottom";
import UserBox from "./UserBox";
import Post from "../Tweet/Post/Post";

export default function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="icon-div">
          <BsArrowLeftShort className="icon" />
        </div>
        <div className="username">
          <h3 style={{ marginBottom: "2px", marginTop: "3px" }}>
            {" "}
            Kodluyoruz{" "}
          </h3>
          <span> 0 Tweet </span>
        </div>
      </div>
      <UserBox />
      <Post />
      <ProfileBottom />
    </div>
  );
}
