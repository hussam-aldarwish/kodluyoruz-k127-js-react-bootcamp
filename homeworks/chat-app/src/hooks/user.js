import { useContext } from "react";
import { UserContext } from "../contexts/user";

export default function useLogin() {
  const { user, selectedUser, users, login, logout, selectUser, sendMessage } =
    useContext(UserContext);

  return { user, selectedUser, users, login, logout, selectUser, sendMessage };
}
