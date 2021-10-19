import React from 'react';
import { BsChat } from 'react-icons/bs';
import { BiRepost } from 'react-icons/bi';
import { FiHeart, FiUpload} from 'react-icons/fi';

import './Post.css';



export default function Post() {
    return (
        <div className="post">
            <div className="post-avatar">
                <img src="github.jpg" className="avatar" alt=""/> 
            </div>
            <div className="post-body">
               <div className="post-header">
                    <div className="post-headerText"> 
                         <h3> Kodluyoruz 
                         <span className="username"> @Kodluyoruz  14h </span>    
                         </h3>
                     </div>
                     <div className="post-headerDescription">
                      <p> Kodluyoruz organization JavaScript React  twitter clone </p>
                     </div> 
               </div>
               <img src="https://th.bing.com/th/id/OIP.EfCDphTVaNRyXAhtQ50g5gHaHf?w=185&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/>  
               <div className="post-footer"> 
                   <BsChat  fontSize="18px" className="message" />
                   <BiRepost fontSize="22px" className="retweet"  />
                   <FiHeart fontSize="18px" className="heart" />
                   <FiUpload  fontSize="18px" className="share" />
               </div>
            </div>
        </div>
    )
}
