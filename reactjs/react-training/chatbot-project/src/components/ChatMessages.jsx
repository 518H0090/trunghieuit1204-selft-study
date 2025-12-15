import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import "./ChatMessages.css";

/**
 * First container ref is null
 * when html finishes load then we get actual DOM from ref.current
 * useEffect run at the first time
 * everytime dependencies change => update scroll for ref
 */

const useAutoScroll = (dependencies) => {
  const containerRef = useRef(null);

  useEffect(() => {
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
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
};

export default ChatMessages;
