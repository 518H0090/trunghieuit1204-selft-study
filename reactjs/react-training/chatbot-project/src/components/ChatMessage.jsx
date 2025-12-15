import RobotProfile from "../assets/robot.png";
// import UserProfile from "../assets/user.png";
import UserProfileImage from "../assets/profile-1.jpg";
import "./ChatMessage.css";

const ChatMessage = ({ message, sender, time }) => {
  console.log(UserProfileImage);

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfile} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        {message}
        <p>{time}</p>
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
};

export default ChatMessage;
