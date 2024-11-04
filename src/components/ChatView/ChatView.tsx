import dayjs from "dayjs";
import OpenAI from "openai";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai/index";
import logo from '../../assets/logo.svg';
import AssistantController from "../../controllers/assistant.controller";
import styles from "./ChatView.module.scss";

interface Message {
  id: string;
  createdAt: Date;
  role: string;
  content: {
    type: string;
    text: {
      value: string;
    }
  }[];
}

const ChatView: React.FC =  () => {
  const assistantController = new AssistantController();
  const [thread, setThread] = useState<OpenAI.Beta.Threads.Thread | null>(null);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getThread = async () => {
    setIsLoading(true);
    const thread = await assistantController.createThread();
    console.log(thread);
    setThread(thread);
    setIsLoading(false);
  }

  useEffect(() => {
    getThread();
  }, []);

  const sendMessage = async (content: string) => {
    if (content === "") return;
    if (isLoading) return;
    setMessage("");
    setIsLoading(true);
    if (!thread) return;
    const mockMessage = {
      id: "1",
      createdAt: new Date(),
      role: "user",
      content: [{type: "text", text: {value: content}}]
    }
    setTimeout(() => {
      const chatMessages = document.getElementById("chat-messages");
      if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    }, 100);
    setMessages([...messages, mockMessage]);
    const {message, run} = await assistantController.createMessage(thread.id, content);
    // @ts-ignore
    console.log(message, run);
    if (run?.status === "completed") {
      const messages = await assistantController.getMessages(thread.id);
      console.log(messages);
      // @ts-ignore
      setMessages(messages.data.reverse());
      setTimeout(() => {
        const chatMessages = document.getElementById("chat-messages");
        if (chatMessages) {
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }
      }, 100);
    }
    setIsLoading(false);
  }

  const parseMessage = (message: Message) => {
    const regex = /(\[([^\]]+)\]\(([^\)]+)\))/g;
    return message.content[0].text.value.replace(regex, '<a style="text-decoration: underline;" href="$3">$3</a>');
  }
  return (
    <div className={styles.chat_container}>
      <div className={styles.chat_messages} id="chat-messages">
        {messages.map((message) => (
          <div key={message.id} className={`${message.role === "user" ? styles.user_message : styles.bot_message}`}>
            <span className={styles.message_time}>{dayjs(message.createdAt).format("hh:mm A")}</span>
            <span dangerouslySetInnerHTML={{__html: parseMessage(message)}} />
          </div>
        ))}
        {isLoading && <div className={styles.loading_message}>
          <img className={styles.loading_message_logo} src={logo} alt="logo"/>
        </div>}
      </div>
      <div className={styles.chat_input}>
        <input onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(message);
          }
        }} disabled={isLoading} onChange={(e) => setMessage(e.target.value)} value={message} autoFocus type="text" placeholder="Type a message..." />
        <button disabled={isLoading} onClick={() => sendMessage(message)}>
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
