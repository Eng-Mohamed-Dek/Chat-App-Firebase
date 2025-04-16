import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";

const Input = () => {
  const [text, setText] = useState("");

  // user chatting info 
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const handleSend = async () => {
    console.log("get it")
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });

    // Lastest Message 
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    // after send 
    setText("");
  };

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Send a message..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
