import React from "react";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import "./Tweet.scss";

export default function Tweet() {
  const { t, i18n } = useTranslation();
  return (
    <div className="tweet">
      <div className="tweet-header">
        <h2> {t("home")} </h2>
        <BsStars />
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
