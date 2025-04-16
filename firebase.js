import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_FIREBASE_API_KEY,
  authDomain: "somchat-4e4ab.firebaseapp.com",
  projectId: "somchat-4e4ab",
  storageBucket: "somchat-4e4ab.firebasestorage.app",
  messagingSenderId: "373184312134",
  appId: "1:373184312134:web:4a32a75e8f0cf3783ceb47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// firebase database 
const db = getFirestore(app); // ✅ Correct way to get Firestore instance

export { db };
