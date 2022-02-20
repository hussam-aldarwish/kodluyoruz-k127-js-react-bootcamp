import { useEffect } from "react";
import { Redirect } from "react-router";
import { useParams } from "react-router-dom";
import "./user.css";
import SideNav from "../components/side-nav";
import useLogin from "../hooks/user";
import UserInfo from "../components/user-info";

export default function User() {
  const { userid } = useParams();
  const { user, selectUser } = useLogin();

  useEffect(() => {
    if (userid && user) {
      selectUser(userid);
    }
  });

  if (!user) return <Redirect to="/login" />;

  return (
    <div className="user-page-container">
      <SideNav />
      <UserInfo />
    </div>
  );
}
