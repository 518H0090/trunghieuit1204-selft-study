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
      message: "Loading...",
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
    <>
      <input
        placeholder="Send a message to Chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        onKeyDown={processKeywordType}
      />
      <button
        onClick={sendMessage}
        disabled={isLoading || inputText.trim() === ""}
      >
        Send
      </button>
    </>
  );
}

function ChatMessage(props) {
  const { message, sender } = props;

  return (
    <div>
      {sender === "robot" && <img src="robot.png" width={50} />}
      {message}
      {sender === "user" && <img src="user.png" width={50} />}
    </div>
  );
}

function ChatMessages({ chatMessages }) {
  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </>
  );
}

function App() {
  const [chatMessages, setChatMessages] = React.useState([
    {
      message: "hello chatbot",
      sender: "user",
      id: "id1",
    },
    {
      message: "Hello! How can I help you?",
      sender: "robot",
      id: "id2",
    },
    {
      message: "can you get me todays date?",
      sender: "user",
      id: "id3",
    },
    {
      message: "Today is Septermber 27",
      sender: "robot",
      id: "id4",
    },
  ]);

  return (
    <>
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatMessages chatMessages={chatMessages} />
    </>
  );
}

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container);
root.render(<App />);
