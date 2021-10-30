import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import "./logoutBottun.scss";

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../../redux/reducers/user";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <div className="logout">
        <div className="logoutAvatar">
          <img
            src="https://pbs.twimg.com/profile_images/1453002556205146125/uWb5vs19_200x200.jpg"
            alt="twitter"
            className="avatar"
          />
        </div>
        <div className="eserDes">
          <h3>{user.displayName}</h3>
          <span>{user.username}</span>
        </div>
        <button onClick={() => dispatch(logout())}>
          <HiOutlineLogout />
        </button>
      </div>
    </>
  );
}
