import React from "react";
import "./UserBox.scss";
import { BiCalendar } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/reducers/user";

export default function UserBox() {
  const user = useSelector(selectUser);
  const JoinedMonth = new Date(user?.creationTime).getMonth() + 1;
  const JoinedYear = new Date(user?.creationTime).getFullYear();
  return (
    <div className="user-box">
      <div className="user-img">
        <img
          src="https://pbs.twimg.com/profile_banners/704421179096862720/1624439857/600x200"
          className="profile-background"
          alt="twitter"
        />
        <img
          src="https://pbs.twimg.com/profile_images/1453002556205146125/uWb5vs19_200x200.jpg"
          className="profileAvatar"
          alt="twitter"
        />
        <button> Edit profile</button>
      </div>
      <div className="user-details">
        <h3 style={{ marginBottom: "0px", color: "white" }}>
          {user.displayName}
        </h3>
        <span style={{ marginTop: "0px" }}>{user.username}</span>
        <span>
          <BiCalendar /> Joined {JoinedMonth} {JoinedYear}
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
