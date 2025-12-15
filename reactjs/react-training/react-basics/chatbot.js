const ChatInput = ({ chatMessages, setChatMessages }) => {
  const [inputText, setInputText] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  function saveInputText(e) {
    setInputText(e.target.value);
  }

  async function sendMessage() {
    if (isLoading || inputText.trim() === "") {
      return;
    }

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

    setChatMessages([
      ...newChatMessages,
      {
        message: (
          <img className="spinner-message" src="./loading-spinner.gif" />
        ),
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

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

  function pressEnter(e) {
    if (e.key === "Enter") {
      sendMessage();
    } else if (e.key === "Escape") {
      setInputText("");
    }
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
    </div>
  );
};

const ChatMessage = ({ message, sender }) => {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src="./robot.png" className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img src="./user.png" className="chat-message-profile" />
      )}
    </div>
  );
};

/**
 * First container ref is null
 * when html finishes load then we get actual DOM from ref.current
 * useEffect run at the first time
 * everytime dependencies change => update scroll for ref
 */
const useAutoScroll = (dependencies) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const containerElem = containerRef.current;

    if (containerElem) {
      // scrollTop: how far scroll from the top
      // scrollHeight: total height of the element
      // => scroll down to the bottom
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]);

  return containerRef;
};

/**
 * First load ChatMessages
 * Then set ref html to chatMesssagesRef
 * when chatMessages update => run and update scroll ref
 */
const ChatMessages = ({ chatMessages }) => {
  const chatMesssagesRef = useAutoScroll(chatMessages);

  return (
    <div className="chat-messages-container" ref={chatMesssagesRef}>
      {chatMessages.length === 0 && (
        <p>
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}

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
};

const App = () => {
  const [chatMessages, setChatMessages] = React.useState([]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
};

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);

root.render(<App />);
