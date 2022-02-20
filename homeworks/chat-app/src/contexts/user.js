import { createContext } from "react";

export const UserContext = createContext({
  user: null,
  selectedUser: null,
  users: [],
  login: () => {},
  logout: () => {},
  selectUser: () => {},
  sendMessage: () => {},
});
