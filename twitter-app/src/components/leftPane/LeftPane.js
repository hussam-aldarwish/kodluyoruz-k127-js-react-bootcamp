import React from 'react'

import { BiHomeCircle } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5"
import { HiOutlineMail } from "react-icons/hi"
import { RiTwitterFill } from "react-icons/ri"
import { RiFileList2Line } from "react-icons/ri"

import "./LeftPane.scss"
import Button from '../Button/Buttun';
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
            <li><HiOutlineMail />Messiges</li>
            <li><BiBookmark />Bookmark</li>
            <li><RiFileList2Line />Lists</li>
            <Button />
        </ul>
        
        </div>
        </>
    )
}