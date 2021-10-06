import { useState } from "react";
import SearchUser from "../search-user";
import "./side-nav.css";
import useLogin from "../../hooks/user";

export default function SideNav() {
  const { users, selectUser } = useLogin();
  const [searchResults, setsearchResults] = useState(users);

  function search(filter) {
    if (filter) {
      const friendsList = users.filter((user) =>
        `${user.first_name} ${user.last_name}`
          .toLowerCase()
          .includes(filter.toLowerCase())
      );
      setsearchResults(friendsList);
      selectUser(friendsList[0]?.id);
    } else {
      setsearchResults(users);
      selectUser(null);
    }
  }
  return (
    <div className="side-nav">
      <SearchUser handler={search} />
    </div>
  );
}
