import ChatHeader from "../chat-header";
import ListMessages from "../list-msgs";
import MessageInput from "../message-input";
import "./chat-screen.css";
export default function ChatScreen() {
  return (
    <div className="chat-screen-container">
      <ChatHeader />
      <ListMessages />
      <MessageInput />
    </div>
  );
}
