import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    // state to get data from the inputs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // navigate config
    const navigate = useNavigate();

    // submitting data
    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("All Field is Required")
            return
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/SomChat')
            window.location.reload()
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
                        <form onSubmit={handleSignUp}>
                            <h4 className="text-2xl mb-7 text-center">Login User</h4>
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
                            <button className="btn w-full" type="submit"> Login </button>
                        </form>
                        <p className="text-sm text-center mt-4"> Don`t have any account <Link to="/signup" className="font-medium text-primary underline"> Create Account </Link> </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
