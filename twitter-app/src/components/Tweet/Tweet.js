import React from "react";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { BsStars } from "react-icons/bs";

import "./Tweet.scss";

export default function Tweet() {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <h2> Home </h2>
        <BsStars />
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
