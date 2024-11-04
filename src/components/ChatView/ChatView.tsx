import dayjs from "dayjs";
import React from "react";
import { AiOutlineSend } from "react-icons/ai/index";
import styles from "./ChatView.module.scss";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  text: string;
  createdAt: Date;
}

const messages: Message[] = [
  {
    id: "1",
    content: "Hello, how can I help you today?",
    sender: "bot",
    text: "Hello, how can I help you today?",
    createdAt: new Date(),
  },
  {
    id: "2",
    content: "I'm looking for a new job",
    sender: "user",
    text: "I'm looking for a new job",
    createdAt: new Date(),
  },
  {
    id: "3",
    content: "That's great! What kind of job are you looking for?",
    sender: "bot",
    text: "That's great! What kind of job are you looking for?",
    createdAt: new Date(),
  },
  {
    id: "4",
    content: "I'm looking for a job in the tech industry",
    sender: "user",
    text: "I'm looking for a job in the tech industry",
    createdAt: new Date(),
  },
];

const ChatView: React.FC = () => {
  return (
    <div className={styles.chat_container}>
      <div className={styles.chat_messages}>
        {messages.map((message) => (
          <div key={message.id} className={`${message.sender === "user" ? styles.user_message : styles.bot_message}`}>
            <span className={styles.message_time}>{dayjs(message.createdAt).format("hh:mm A")}</span>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <div className={styles.chat_input}>
        <input autoFocus type="text" placeholder="Type a message..." />
        <button>
          <AiOutlineSend size={20} />
        </button>
      </div>
      <div className={styles.chat_footer}>
        <span>The AI assistant is made with the purpose of giving information about me and my work pretending to be me. The responses may be not accurate every time.</span>
        <span>The messages are just for this session, they are not saved.</span>
      </div>
    </div>
  )
};

export default ChatView;
