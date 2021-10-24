import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { RiTwitterFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";

import "./LeftPane.scss";
import Button from "../Button/Buttun";
import HomeIcone from "../icon/HomeIcone";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/reducers/theme";

export default function LeftPane() {
  const [active, setActive] = useState("notActive");
  const isMobile = useMediaQuery({ minWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 1260 });

  const dispatch = useDispatch();
  // ! handle toggleTheme
  // You can use it like this: onClick={()=>handleToggleTheme()}
  // eslint-disable-next-line
  function handleToggleTheme() {
    dispatch(toggleTheme());
  }

  return (
    <>
      <div className="leftPane">
        <header></header>
        <ul>
          {isMobile && <RiTwitterFill className="twitterLogo" />}
          <li
            className={`${active && "active"}`}
            onClick={() => setActive(!active)}
          >
            <HomeIcone />
            {isTablet && <p>Home</p>}
          </li>
          <li>
            <FiSearch />
            {isTablet && <p>Search</p>}
          </li>
          <li>
            <IoNotificationsOutline />
            {isTablet && <p>Notifications</p>}
          </li>
          <li>
            <FiMail />
            {isTablet && <p>Messiges</p>}
          </li>
          <li>
            <HiOutlineUser />
            {isTablet && <p>Profile</p>}
          </li>
          <Button />
        </ul>
      </div>
    </>
  );
}
