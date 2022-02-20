import React from "react";
import useLogin from "../../hooks/user";
import useTheme from "../../hooks/theme";
import "./settings.css";
import Button from "../Button";

export default function Settings() {
  const { logout } = useLogin();
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="settings-container">
      <Button onClick={() => toggleTheme()}>
        {theme === "dark" ? (
          <i className="fas fa-sun fa-2x"></i>
        ) : (
          <i className="fas fa-moon fa-2x"></i>
        )}
      </Button>
      <Button onClick={() => logout()}>
        <i className="fas fa-sign-out-alt fa-2x"></i>
      </Button>
    </div>
  );
}
