import React, { useEffect, createRef } from "react";
import "./list-msgs.css";
import useLogin from "../../hooks/user";

export default function ListMessages() {
  const { selectedUser } = useLogin();
  const myRef = createRef();

  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  }, [selectedUser?.messages, myRef]);

  return (
    <ul className="messages-container" ref={myRef}>
      {selectedUser
        ? selectedUser.messages.map((m) => (
            <li
              key={m.id}
              className={`message-entry ${
                m.sender === selectedUser.id ? "secondary" : "primary"
              }`}
            >
              {m.text}
            </li>
          ))
        : null}
    </ul>
  );
}
