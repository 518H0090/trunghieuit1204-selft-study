function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

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
      message: <img className="loading-spinner" src="./loading-spinner.gif" />,
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

function ChatMessage(props) {
  const { message, sender } = props;

  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src="robot.png" className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src="user.png" className="chat-message-profile" />
      )}
    </div>
  );
}

function useAutoScroll(dependencies) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);

  return containerRef;
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = React.useState([]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);
root.render(<App />);
