import { useEffect } from "react";
import { Redirect } from "react-router";
import { useParams } from "react-router-dom";
import ChatScreen from "../components/chat-screen";
import SideNav from "../components/side-nav";
import useLogin from "../hooks/user";
import "./chat.css";

export default function Chat() {
  const { userid } = useParams();
  const { user, selectUser } = useLogin();

  useEffect(() => {
    if (userid && user) selectUser(userid);
  });

  if (!user) return <Redirect to="/login" />;

  return (
    <div className="chat-page-container">
      <SideNav />
      <ChatScreen />
    </div>
  );
}
