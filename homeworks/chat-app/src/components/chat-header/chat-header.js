import "./chat-header.css";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/user";
export default function ChatHeader() {
  const { selectedUser } = useLogin();
  return (
    <div className="chat-header">
      <div className="user-img">
        <i className="fas fa-user-circle fa-3x"></i>
      </div>

      <div className="user-name">
        {selectedUser
          ? `${selectedUser.first_name} ${selectedUser.last_name}`
          : "Please select chat to view messages!"}
      </div>

      {selectedUser ? (
        <Link className="user-info-button" to={"/user"}>
          ...
        </Link>
      ) : null}
    </div>
  );
}
