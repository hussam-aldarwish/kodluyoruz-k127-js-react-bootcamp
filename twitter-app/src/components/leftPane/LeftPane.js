import React from 'react'
import { BiHomeCircle, BiBookmark, BiSearchAlt } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5"
import { FiMail } from "react-icons/fi"
import { RiFileList2Line, RiTwitterFill } from "react-icons/ri"
import "./LeftPane.scss"
export default function LeftPane() {
    return (
        <>
        <div className="leftPane">
        <header>
        <RiTwitterFill />
        </header>
        <ul>
            <li><BiHomeCircle />Home</li>
            <li><BiSearchAlt />Search</li>
            <li><IoNotificationsSharp />Notifications</li>
            <li><FiMail />Messiges</li>
            <li><BiBookmark />Bookmark</li>
            <li><RiFileList2Line />Lists</li>
        
        </ul>
        </div>
        </>
    )
}
