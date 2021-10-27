import React from "react";
import "./UserBox.scss";
import { BiCalendar } from "react-icons/bi";

export default function UserBox() {
  return (
    <div className="user-box">
      <div className="user-img">
        <img src="https://pbs.twimg.com/profile_banners/704421179096862720/1624439857/600x200" className="profile-background" />
        <img src="https://pbs.twimg.com/profile_images/1453002556205146125/uWb5vs19_200x200.jpg" className="profileAvatar" />
        <button> Edit profile</button>
      </div>
      <div className="user-details">
        <h3 style={{ marginBottom: "0px", color: "white" }}> Kodluyoruz </h3>
        <span style={{ marginTop: "0px" }}> @kodluyoruz </span>
        <span>
          {" "}
          <BiCalendar /> Joined September 2021{" "}
        </span>
        <div className="follow">
          <b style={{ color: "white" }}> 0 </b> <span> Following</span>
          <b style={{ color: "white" }}> 0 </b> <span> Followers</span>
        </div>
      </div>
      <div className="detail-bottom">
        <p> Tweets </p>
        <p> Tweets&replies </p>
        <p> Media </p>
        <p> Reactions </p>
      </div>
    </div>
  );
}
