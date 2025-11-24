function ChatInput() {
  return (
    <>
      <input placeholder="Send a message to Chatbot" size={30} />
      <button>Send</button>
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

function App() {
  return (
    <>
      <ChatInput />
      <ChatMessage message=" hello chatbot" sender="user" />
      <ChatMessage message=" Hello! How can I help you?" sender="robot" />
      <ChatMessage message=" can you get me todays date?" sender="user" />
      <ChatMessage message=" Today is Septermber 27" sender="robot" />
    </>
  );
}

const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container).render(<App />);
