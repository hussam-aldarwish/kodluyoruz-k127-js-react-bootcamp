import { useEffect } from "react";
import { Redirect } from "react-router";
import { useParams } from "react-router-dom";
import "./user.css";
import SideNav from "../components/side-nav";
import useLogin from "../hooks/user";
import UserInfo from "../components/user-info";
import { useHistory } from "react-router-dom";

export default function User() {
  const history = useHistory();
  const { userid } = useParams();
  const { user, selectUser, selectedUser } = useLogin();

  useEffect(() => {
    if (userid && user) selectUser(userid);
  });

  useEffect(() => {
    if (selectedUser?.id !== userid)
      history.push(`/user/${selectedUser.id}/details`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser, history]);

  if (!user) return <Redirect to="/login" />;

  return (
    <div className="user-page-container">
      <SideNav />
      <UserInfo />
    </div>
  );
}
