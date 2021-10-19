import React from 'react';
import { FiImage, FiSmile } from 'react-icons/fi';
import { AiOutlineFileGif } from 'react-icons/ai';
import { BsCalendar2Event } from 'react-icons/bs';

import './TweetBox.css';

export default function TweetBox() {
    return (
        <div className="tweet-box">
            <form>
                <div className="tweet-box-input">
                  <img src="github.jpg" className="avatar"/> 
                    <input placeholder="What's happening?" type="text" />
                </div>
                <div className="tweet-box-icon">  
                    <FiImage style={{width:'20px', height:'20px', marginLeft:'70px'}} />
                    <AiOutlineFileGif style={{width:'20px', height:'20px', marginLeft:'20px'}} />
                    <FiSmile style={{width:'20px', height:'20px', marginLeft:'20px'}} />
                    <BsCalendar2Event style={{width:'20px', height:'20px', marginLeft:'20px'}} />
                
                 <button style={{marginLeft: 'auto'}}> Tweet </button>
                </div>
            </form>
        </div>
    )
}
