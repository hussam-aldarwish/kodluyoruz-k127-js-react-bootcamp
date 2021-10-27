import React from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/reducers/theme";
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from "react-responsive";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { RiTwitterFill } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";

import "./LeftPane.scss";
import Button from "../Button/Buttun";
import HomeIcone from "../icon/HomeIcone";

export default function LeftPane() {
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
        <ul>
          {isMobile && <RiTwitterFill className="twitterLogo" />}
          <NavLink activeClassName="activeClass" to="/" exact>
          <li>
            <HomeIcone />
            {isTablet && <p>Home</p>}
          </li>
          </NavLink>
          <NavLink to="/Search" activeClassName="activeClass">
          <li>
            <FiSearch />
            {isTablet && <p>Search</p>}
          </li>
          </NavLink>
          <li>
            <IoNotificationsOutline />
            {isTablet && <p>Notifications</p>}
          </li>
          <li>
            <FiMail />
            {isTablet && <p>Messiges</p>}
          </li>
          <NavLink to="/Profile" activeClassName="activeClass" >
          <li>
            <HiOutlineUser />
            {isTablet && <p>Profil</p>}
          </li>
          </NavLink>
          <li onClick={()=>handleToggleTheme()}  >
            <IoColorPaletteOutline  />
            {isTablet && <p>Theme</p>}
          </li>
          <Button />
        </ul>
        <div className="logout" >

        </div>
      </div>
    </>
  );
}
