import React from 'react'
import "./Login.scss";

import { RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
export default function SignUp() {
    const isMobile = useMediaQuery({ minWidth: 600 });
    return (
      <>
        <div className="login">
          { isMobile &&
          <div className="photo">
            <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" />
            <RiTwitterFill />
          </div>
          }
          <div className="formCont">
            <div className="formHade">
              <RiTwitterFill />
              <h1>Happening now</h1>
              <h2>Join Twitter today.</h2>
            </div>
            <form>
              <input type="userName"  placeholder="User Name"/>
              <input type="email"    placeholder="exsample@exsample.com" />
              <input type="password" placeholder="password" />
              <button type="submit">Sign In</button>
              <span>Already have an account?<Link to="/login" > login</Link></span>
            </form>
          </div>
        </div>
      </>
    );
}
