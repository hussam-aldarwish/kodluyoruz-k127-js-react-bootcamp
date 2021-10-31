import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import "./Profile.scss";
import ProfileBottom from "./ProfileBottom";
import UserBox from "./UserBox";
import Post from "../Tweet/Post/Post";

import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/reducers/user";

export default function Profile() {
  const isDesktop = useMediaQuery({ maxWidth: 600 });
  const history = useHistory();
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="icon-div">
          <BsArrowLeftShort className="icon" onClick={() => history.goBack()} />
        </div>
        <div className="username">
          <h3 style={{ marginBottom: "2px", marginTop: "3px" }}>
            {user?.displayName}
          </h3>
          <span>0 Tweet</span>
        </div>
        {isDesktop && (
          <Link to="/login">
            <button>
              <HiOutlineLogout />
            </button>
          </Link>
        )}
      </div>
      <UserBox />
      <Post />
      <ProfileBottom />
    </div>
  );
}
