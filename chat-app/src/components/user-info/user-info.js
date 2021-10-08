import "./user-info.css";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/user";

export default function UserInfo() {
  const { selectedUser } = useLogin();

  return (
    <div className="user-info-container">
      <Link to="/chat" className="close-btn">
        &times;
      </Link>
      <div className="user-img">
        <i className="fas fa-user-circle fa-6x"></i>
      </div>
      <div className="name">
        {`${selectedUser.first_name} ${selectedUser.last_name}`}
      </div>
      <div className="last-seen body1">Last seen 2 hours ago.</div>
      <div className="actions">
        <div className="secondary">
          <i className="fas fa-envelope-open-text fa-2x"></i>
        </div>
        <div className="secondary">
          <i className="fas fa-phone fa-2x"></i>
        </div>
        <div className="secondary"><i className="fas fa-video fa-2x"></i></div>
      </div>
    </div>
  );
}
