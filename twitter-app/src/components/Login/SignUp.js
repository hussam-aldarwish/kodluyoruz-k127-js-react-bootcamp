import React, { useState } from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Input from "../Input";

import {
  selectLoading,
  selectSignupError,
  signupAsync,
} from "../../redux/reducers/user";

export default function SignUp() {
  const isMobile = useMediaQuery({ minWidth: 600 });

  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectSignupError);
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onsubmit = async (data) => {
    setShowError(true);
    await dispatch(signupAsync(data));
    if (error === null) history.push("/");
  };

  return (
    <>
      {error && showError ? <span>{error}</span> : null}
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
          <form onSubmit={handleSubmit(onsubmit)}>
            <Input
              type="text"
              placeholder="Display Name"
              error={errors.displayName}
              {...register("displayName", { required: true })}
            />
            <Input
              type="text"
              placeholder="@username"
              error={errors.username}
              {...register("username", {
                required: true,
                // eslint-disable-next-line
                pattern: /^[a-zA-Z0-9_\.\-]+$/,
              })}
            />
            <Input
              type="email"
              placeholder="example@example.com"
              error={errors.email}
              {...register("email", { required: true })}
            />
            <Input
              type="password"
              placeholder="Password"
              error={errors.password}
              {...register("password", { required: true })}
            />
            <Input
              type="submit"
              value={!loading ? "Signup" : "Loading ..."}
              disabled={loading ? true : false}
            />
            <span>
              Already have an account?<Link to="/login"> login</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}
