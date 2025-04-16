import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { useContext, useState } from "react";
import { db } from "../../../firebase";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("name", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });

      if (querySnapshot.empty) {
        // If no document is found with the matching name
        toast.error("User not found!");
      }
    } catch (err) {
      toast.error(err.message);
      // toast.error("user not found!");
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const { currentUser } = useContext(AuthContext)
  console.log(user)

  const handleSelect = async () => {
    //check whether the group(chats in firestore) exists, if not create
    if (!user || !currentUser) {
      toast.error("Missing user or currentUser");
      return;
    }

    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });
        console.log("ee")

        //create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.name,
          },
          [combinedId + ".date"]: serverTimestamp(),
        }, { merge: true });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        }, { merge: true });
      }
    } catch (err) {
      console.error("Error in handleSelect:", err);
     }

    setUser(null);
    setUsername("")
  };


  return (
    <div className="search">
      <Toaster />
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {user && (
        <div className="userChat" onClick={handleSelect} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
          <div className="userChatInfo">
            <span>{user.name}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
