import "./App.css";
import React, { useState, useEffect } from "react";
import { users as mock } from "./mocks/mock-users.json";
import { v4 as uuid } from "uuid";
import { UserContext } from "./contexts/user";
import { ThemeContext } from "./contexts/theme";
import Routes from "./routes";

function App() {
  // user context related states
  const [user, setUser] = useState(() => {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      return user;
    }
  });
  const [selectedUser, setSelectedUser] = useState(() => {
    let selectedUser = localStorage.getItem("selectedUser");
    if (selectedUser) {
      selectedUser = JSON.parse(selectedUser);
      return selectedUser;
    }
  });
  const [users, setUsers] = useState(() => {
    let users = localStorage.getItem("users");
    if (users) {
      users = JSON.parse(users);
      return users;
    } else return mock;
  });

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
    setUsers(null);
  }

  function selectUser(id) {
    const selectedUser = users.find((user) => user.id === id);
    if (selectedUser) setSelectedUser(selectedUser);
    else setSelectedUser(null);
  }

  function sendMessage(text) {
    setSelectedUser({
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        { id: uuid(), text: text, sender: user.id },
      ],
    });
    setUsers(
      users.map((user) => (user.id === selectedUser.id ? selectedUser : user))
    );
  }

  // theme related states
  const [theme, setTheme] = useState(() => {
    let theme = localStorage.getItem("theme");
    if (theme) {
      return theme;
    } else return "light";
  });

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
    else localStorage.removeItem("theme");
  }, [theme]);

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <UserContext.Provider
        value={{
          user,
          selectedUser,
          users,
          login,
          logout,
          selectUser,
          sendMessage,
        }}
      >
        <div className="container" theme={theme}>
          <Routes />
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
