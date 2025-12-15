import { useState } from "react";
import { Chatbot } from "supersimpledev";
import LoadingSpinner from "../assets/loading-spinner.gif";
import "./ChatInput.css";
import dayjs from "dayjs";

const ChatInput = ({ chatMessages, setChatMessages }) => {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(e) {
    setInputText(e.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText.trim() === "") {
      return;
    }

    setIsLoading(true);

    let time = dayjs().valueOf();
    let currentTime = dayjs(time).format("h:mma");

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        time: currentTime,
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    time = dayjs().valueOf();
    currentTime = dayjs(time).format("h:mma");

    setChatMessages([
      ...newChatMessages,
      {
        message: <img className="spinner-message" src={LoadingSpinner} />,
        sender: "robot",
        time: currentTime,
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);

    time = dayjs().valueOf();
    currentTime = dayjs(time).format("h:mma");

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        time: currentTime,
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  function pressEnter(e) {
    if (e.key === "Enter") {
      sendMessage();
    } else if (e.key === "Escape") {
      setInputText("");
    }
  }

  function clearMessage() {
    setChatMessages([]);
    localStorage.removeItem("messages");
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={pressEnter}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        disabled={isLoading || inputText.trim() === ""}
        className="send-button"
      >
        Send
      </button>
      <button onClick={clearMessage} className="clear-button">
        Clear
      </button>
    </div>
  );
};

export default ChatInput;
