import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebase";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
    // state to get data from the inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");

    const { currentUser } = useContext(AuthContext)

    // navigate config
    const navigate = useNavigate();

    // submitting data
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            toast.error("All Field is Required")
            return
        }

        try {
            //Create user
            const res = await createUserWithEmailAndPassword(auth, email, password);

            // ✅ Update profile using res.user instead of currentUser
            await updateProfile(res.user, {
                displayName: name,
            });

            toast.success("Signup successful!");

            const userRef = doc(db, 'users', res.user.uid);

            // store to Database 
            await setDoc(userRef, {
                uid: res.user.uid,
                name,
                email
            })

            // store userChats 
            await setDoc(doc(db, 'userChats', res.user.uid), { })

            setTimeout(() => {
                navigate('/login')
                window.location.reload()
            }, 1000); // 3 seconds

        } catch (err) {
            // handle login error
            toast.error(err.message);
        }
    };

    return (
        <>
            <Toaster />
            <Navbar />
            <div className="container">
                <div className="flex items-center justify-center mt-20">
                    <div className="w-96 border-2 border-gray-200 rounded bg-white px-7 py-10">
                        <form onSubmit={handleLogin}>
                            <h4 className="text-2xl mb-7 text-center">Register Now</h4>
                            <input
                                name="fullName"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter Your Name"
                                className="input-box"
                            />
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Your Email"
                                className="input-box"
                                name="email"
                            />
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Your password"
                                className="input-box"
                                name="password"
                            />
                            <button className="btn w-full" type="submit"> Sigup </button>
                        </form>
                        <p className="text-sm text-center mt-4"> Already have an account <Link to="/login" className="font-medium text-primary underline"> Login </Link> </p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Signup;
