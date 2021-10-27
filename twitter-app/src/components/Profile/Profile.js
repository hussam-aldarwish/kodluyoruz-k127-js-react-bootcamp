import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import "./Profile.scss";
import ProfileBottom from "./ProfileBottom";
import UserBox from "./UserBox";
import Post from "../Tweet/Post/Post";


export default function Profile() {

    
    const isDesktop = useMediaQuery({ maxWidth: 600 });
  return (
    <div className="profile">
      <div className="profile-header">
        <div  className="icon-div">
          <BsArrowLeftShort className="icon" />
        </div>
        <div className="username">
          <h3 style={{ marginBottom: "2px", marginTop: "3px" }}>
            {" "}
            Kodluyoruz{" "}
          </h3>
          <span> 0 Tweet </span>
        </div>{isDesktop &&
         <Link to='/login'>
          <button>
          <HiOutlineLogout />
          </button>
          </Link>
        }
      </div>
      <UserBox />
      <Post />
      <ProfileBottom />
    </div>
  );
}
