import React from 'react'
import "./RightPane.scss";
import { HiOutlineUser } from "react-icons/hi";

export default function WhoToFollow() {
    return (
        <>
            <div className=" hashContainer whoToFollow">
            <h3>Who to follow</h3>
            <ul>
                <li className="followList">
                <HiOutlineUser className="avatar" />
                <h4>Kent C. Dodds<br /><p>@kentcdodds</p></h4>
                
                </li>
                <li className="followList">
                <HiOutlineUser className="avatar" />
                <h4>Kent C. Dodds<br /><p>@kentcdodds</p></h4>
                
                </li>
                <li className="followList">
                <HiOutlineUser className="avatar" />
                <h4>Kent C. Dodds<br /><p>@kentcdodds</p></h4>
                
                </li>
            </ul>
          </div>
        </>
    )
}
