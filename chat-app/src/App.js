import "./App.css";
import React, { useState, useEffect } from "react";
import { users as mock } from "./mocks/mock-users.json";
import { v4 as uuid } from "uuid";
import { UserContext } from "./contexts/user";
import { ThemeContext } from "./contexts/theme";

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
      const updatedUsers = users.map((user) =>
        user.id === selectedUser.id ? selectedUser : user
      );
      setUsers(updatedUsers);
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

  // theme related states
  const [theme, setTheme] = useState();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
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
    } else {
      localStorage.removeItem("selectedUser");
    }
  }, [selectedUser]);

  useEffect(() => {
    if (users) {
      let usersJson = JSON.stringify(users);
      localStorage.setItem("users", usersJson);
    } else {
      localStorage.removeItem("users");
    }
  }, [users]);

  useEffect(() => {
    if (theme) localStorage.setItem("theme", theme);
  }, [theme]);

  // On load
  useEffect(() => {
    // load user context related properties
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      setUser(user);
    }
    let selectedUser = localStorage.getItem("selectedUser");
    if (selectedUser) {
      selectedUser = JSON.parse(selectedUser);
      setSelectedUser(selectedUser);
    }
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      setUsers(users);
    }
    // load theme context related properties
    const theme = localStorage.getItem("theme");
    if (theme) setTheme(theme);
    else setTheme("light");
  }, []);

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <UserContext.Provider
        value={
          (user, selectedUser, users, login, logout, selectUser, sendMessage)
        }
      >
        <div className="container" theme={theme}>
          <p>App!</p>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
