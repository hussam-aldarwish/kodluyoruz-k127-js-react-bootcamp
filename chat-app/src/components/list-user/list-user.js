import useLogin from "../../hooks/user";
import "./list-user.css";
export default function ListUser(props) {
  const { users, selectedUser, selectUser } = useLogin();
  const friendsList = props.friendsList;

  function lastmessage(id) {
    const messages = users?.find((user) => user.id === id)?.messages;
    let text = messages[messages.length - 1]?.text;
    return text;
  }
  return (
    <ul className="list-user">
      {friendsList
        ? friendsList.map((f) => (
            <li
              key={f.id}
              className={f.id === selectedUser?.id ? "active" : null}
              onClick={() => selectUser(f.id)}
            >
              <div className="user-img">
                <i className="fas fa-user-circle fa-3x"></i>
              </div>
              <div className="user-detail">
                <span className="user-name">
                  {f.first_name} {f.last_name}
                </span>
                <span className="last-msg">{lastmessage(f.id)}</span>
              </div>
            </li>
          ))
        : null}
    </ul>
  );
}
