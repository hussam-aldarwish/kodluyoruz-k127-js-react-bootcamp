import React from "react";
import { useMediaQuery } from "react-responsive";
import Twite from "../icon/Twite";
import "./Button.scss";
import { useHistory } from "react-router-dom";

export default function Button() {
  const history = useHistory();
  const isTablet = useMediaQuery({ minWidth: 1260 });
  const isTabletx = useMediaQuery({ maxWidth: 1260 });
  return (
    <>
      <button
        className="tweetButton"
        type="button"
        onClick={() => {
          history.push("/");
          window.scroll(0, 0);
        }}
      >
        {isTabletx && <Twite />}

        {isTablet && <p>Tweet</p>}
      </button>
    </>
  );
}
