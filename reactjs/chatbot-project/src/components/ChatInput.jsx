import { Chatbot } from "supersimpledev";
import { useState } from "react";
import LoadingSpinner from "../assets/loading-spinner.gif";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage(event) {
    event.preventDefault();

    if (isLoading || inputText.trim() === "") return;

    setIsLoading(true);

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const loadingMessage = {
      message: <img className="loading-spinner" src={LoadingSpinner} />,
      sender: "robot",
      id: crypto.randomUUID(),
    };
    setChatMessages([...newChatMessages, loadingMessage]);

    setInputText("");

    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  function processKeywordType(event) {
    const keyPress = event.key;

    console.log(keyPress);

    if (keyPress === "Enter") {
      sendMessage(event);
    } else if (keyPress === "Escape") {
      setInputText("");
    }
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        onKeyDown={processKeywordType}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
        disabled={isLoading || inputText.trim() === ""}
      >
        Send
      </button>
    </div>
  );
}
