import { createContext } from "react";

export const userContext = createContext({
  user: null,
  selectedUser: null,
  users: [],
  login: () => {},
  logout: () => {},
  selectUser: () => {},
  sendMessage: () => {},
});
