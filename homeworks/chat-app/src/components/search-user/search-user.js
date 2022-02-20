import Input from "../Input";
import "./search-user.css";

export default function SearchUser(props) {
  return (
    <div className="search-container">
      <Input
        placeholder="Search"
        type="search"
        name="search"
        onChange={(e) => props.handler(e.target.value)}
      />
    </div>
  );
}
