import "./App.css";
import React, { useState, useEffect } from "react";
import { users as mock } from "./mocks/mock-users.json";
import { v4 as uuid } from "uuid";
import { userContext } from "./contexts/user";

function App() {
  // user context related states
  const [user, setUser] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [users, setUsers] = useState(mock);

  function login(username, first_name, last_name) {
    const user = {
      id: uuid(),
      username: username,
      first_name: first_name,
      last_name: last_name,
    };
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  function selectUser(id) {
    const selectedUser = users.find((user) => user.id === id);
    if (selectedUser) {
      setSelectedUser(selectedUser);
    }
  }

  function sendMessage(text) {
    setSelectedUser({
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        { id: uuid(), text: text, sender: user.id },
      ],
    });
  }

  // cascade states to local storage
  useEffect(() => {
    if (user) {
      let userJson = JSON.stringify(user);
      localStorage.setItem("user", userJson);
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (selectedUser) {
      let selectedUserJson = JSON.stringify(selectedUser);
      localStorage.setItem("selectedUser", selectedUserJson);
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? selectedUser : user
      );
      setUsers(updatedUsers);
    } else {
      localStorage.removeItem("selectedUser");
    }
  }, [selectedUser]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (users) {
      let usersJson = JSON.stringify(users);
      localStorage.setItem("users", usersJson);
    } else {
      localStorage.removeItem("users");
    }
  }, [users]);

  // On load
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      setUser(user);
    }
    let selectedUser = localStorage.getItem("selectedUser");
    if (selectedUser) {
      selectedUser = JSON.parse(selectedUser);
      setUser(selectedUser);
    }
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      setUser(users);
    }
  }, []);

  return (
    <userContext.Provider
      value={(user, selectedUser, user, login, logout, selectUser, sendMessage)}
    ></userContext.Provider>
  );
}

export default App;
