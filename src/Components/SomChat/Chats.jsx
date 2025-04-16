import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase";
import { ChatContext } from "../../context/ChatContext";

const Chats = () => {
  let defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s';

  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  const { dispatch, data} = useContext(ChatContext)


  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // change user 
  const handleSelect = (user) => {
    dispatch({ type: "CHANGE_USER", payload: user });
  };


  return (
    <div className="chats">
       {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img src={defaultImage} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
