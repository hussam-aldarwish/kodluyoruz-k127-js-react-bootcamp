import React from "react";
import "./Login.scss";

import { RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
export default function Login() {
  const isMobile = useMediaQuery({ minWidth: 600 });
  return (
    <>
      <div className="login">
        {isMobile && (
          <div className="photo">
            <img
              src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"
              alt="twitter"
            />
            <RiTwitterFill />
          </div>
        )}
        <div className="formCont">
          <div className="formHade">
            <RiTwitterFill />
            <h1>Happening now</h1>
            <h2>Join Twitter today.</h2>
          </div>
          <form>
            <input type="email" placeholder="exsample@exsample.com" />
            <input type="password" placeholder="password" />
            <button type="submit">Sign In</button>
            <span>
              Don’t have an account?<Link to="/SignUp"> Sign Up</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
