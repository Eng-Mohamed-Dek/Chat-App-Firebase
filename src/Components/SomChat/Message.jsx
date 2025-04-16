import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const Message = ({ message, owner }) => {
  const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s"

  // user chatting info 
  const { currentUser } =useContext(AuthContext)
  const { data } =useContext(ChatContext)

  const trueOWner = message.senderId === currentUser.uid;

  // message scrolling 
  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);


  return (
    <div ref={ref} className={`message ${trueOWner && "owner"}`} >
      <div className="messageInfo">
        <img src={defaultImg} alt="" />
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
