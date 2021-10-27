import React from 'react'
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from 'react-router-dom';
import './logoutBottun.scss';
export default function LogoutButton() {
    return (
        <>
            <div className="logout">
          <div className="logoutAvatar">
          <img src="https://pbs.twimg.com/profile_images/1453002556205146125/uWb5vs19_200x200.jpg" className="avatar" />
          </div>
          <div className="eserDes">
            <h3> Kodluyoruz </h3>
            <span> @kodluyoruz </span>
          </div>
          <Link to='/login'>
          <button>
          <HiOutlineLogout />
          </button>
          </Link>
        </div>
        </>
    )
}
