import classes from "./Chat.module.css";
import { BsFillChatTextFill } from "react-icons/bs";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const Chat = () => {
  const [showChatWindow, setShowChatWindow] = useState(false);
  const chatWindowHandler = () => {
    setShowChatWindow(!showChatWindow);
  };
  return (
    <div className={classes.chatOption}>
      {showChatWindow && (
        <div className={classes.chatWindow}>
          <div className={classes.chatTitle}>
            <div>
              <h2>earthly</h2>
              <p>We'll reply as soon as we can</p>
            </div>
            <button className={classes.closeButton} onClick={chatWindowHandler}>
              <CloseIcon />
            </button>
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            className={classes.chatInput}
          />
        </div>
      )}
      {!showChatWindow && (
        <button className={classes.chat} onClick={chatWindowHandler}>
          <BsFillChatTextFill /> Let's Chat!
        </button>
      )}
    </div>
  );
};
export default Chat;
