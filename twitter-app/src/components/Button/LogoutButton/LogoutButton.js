import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import "./logoutBottun.scss";

import { useDispatch } from "react-redux";
import { logout } from "../../../redux/reducers/user";

export default function LogoutButton() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="logout">
        <div className="logoutAvatar">
          <img
            src="https://pbs.twimg.com/profile_images/1453002556205146125/uWb5vs19_200x200.jpg"
            className="avatar"
          />
        </div>
        <div className="eserDes">
          <h3> Kodluyoruz </h3>
          <span> @kodluyoruz </span>
        </div>
        <button onClick={() => dispatch(logout())}>
          <HiOutlineLogout />
        </button>
      </div>
    </>
  );
}
