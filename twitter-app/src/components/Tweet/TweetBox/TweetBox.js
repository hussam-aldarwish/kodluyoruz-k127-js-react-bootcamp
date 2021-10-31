import React from "react";
import { FiImage, FiSmile } from "react-icons/fi";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsCalendar2Event } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import "./TweetBox.scss";

export default function TweetBox() {
  const { t, i18n } = useTranslation();
  return (
    <div className="tweet-box" id="tweet-box">
      <form>
        <div className="tweet-box-input">
          <img
            src="https://pbs.twimg.com/profile_images/1404339457868902404/QrUcR8so_400x400.jpg"
            className="avatar"
            alt=""
          />
          <input placeholder={t("what")} type="text" />
        </div>
        <div className="buttons" >
          <div className="tweet-box-icon">
            <FiImage
              style={{ width: "20px", height: "20px", marginLeft: "70px" }}
            />
            <AiOutlineFileGif
              style={{ width: "20px", height: "20px", marginLeft: "20px" }}
            />
            <FiSmile
              style={{ width: "20px", height: "20px", marginLeft: "20px" }}
            />
            <BsCalendar2Event
              style={{ width: "20px", height: "20px", marginLeft: "20px" }}
            />
          </div>
          <button> {t("twitte")} </button>
        </div>
      </form>
    </div>
  );
}
