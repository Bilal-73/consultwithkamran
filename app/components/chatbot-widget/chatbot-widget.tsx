import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import styles from "./chatbot-widget.module.css";

interface Message {
  id: string;
  text: string;
  sender: "bot" | "user";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! I'm Kamran's assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message! Kamran will get back to you shortly. In the meantime, feel free to book a consultation.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className={styles.widget}>
        <button className={styles.trigger} onClick={() => setIsOpen(true)} aria-label="Open chat">
          <MessageCircle className={styles.triggerIcon} />
        </button>
      </div>
    );
  }

  return (
    <div className={styles.widget}>
      <div className={styles.chatContainer}>
        <div className={styles.chatHeader}>
          <h3 className={styles.chatTitle}>
            <MessageCircle className={styles.chatTitleIcon} />
            Chat with Kamran
          </h3>
          <button className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close chat">
            <X className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.messagesContainer}>
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${message.sender === "bot" ? styles.messageBot : styles.messageUser}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.input}
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className={styles.sendButton}
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            aria-label="Send message"
          >
            <Send className={styles.sendIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
