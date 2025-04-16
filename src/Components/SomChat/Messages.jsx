import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../../context/ChatContext";
import Message from "./Message";
import { db } from "../../../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../context/AuthContext";

const Messages = () => {
  const [messages, setMessages] = useState([]);

  const { data } = useContext(ChatContext)
  const { currentUser } =useContext(AuthContext)

  useEffect(() => {

    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    }

  }, [data.chatId])

  
  
  return (
    <div className="messages">
      {messages.map((message) => {
         return <Message message={message} key={message.uid} />
     })}
    </div>
  );
};

export default Messages;
