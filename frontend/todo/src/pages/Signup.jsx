import React, { useRef } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const url = "http://localhost:1999/api/v1/register";
    const nameref = useRef(null);
    const emailref = useRef(null);
    const password1ref = useRef(null);
    const password2ref = useRef(null);
    const [redirectToSignin, setRedirectToSignin] = useState(false);
    const notifySuccess = (message) => toast.success(message);
    const notifyWarning = (message) => toast.warn(message);
    const handleSignin = async () => {
        const objData = {
            email: emailref.current.value,
            username: nameref.current.value,
            password: password1ref.current.value,
        };

        const p2 = password2ref.current.value;
        if (objData.password !== p2) {
            notifyWarning("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(url, objData);
            notifySuccess(response.data.message);
            setTimeout(() => {
              setRedirectToSignin(true);
          }, 2000);
        }
         catch (error) {
            if (error.response)
            {
                notifyWarning(error.response.data.message || "Registration failed.");
            }
            else
            {
                notifyWarning("An error occurred. Please try again.");
            }
        }
    };
  if(redirectToSignin)
  {
      return <Navigate to="/signin" />;
  }

    return (
        <>
            <Navbar />
            <div className="w-screen h-screen flex justify-center items-center relative bg-[#f8f8f8] z-10">
                <div className="bg-black flex flex-col justify-center items-center p-7 rounded-lg">
                    <p className='text-white font-bold text-2xl'>SIGN UP</p>
                    <input
                        type="text"
                        ref={nameref}
                        required
                        className="p-3 border border-slate-500 rounded-lg m-2"
                        placeholder="Enter your Name"
                    />
                    <input
                        type="email"
                        ref={emailref}
                        required
                        className="p-3 border border-slate-500 rounded-lg m-2"
                        placeholder="Enter your Email"
                    />
                    <input
                        type="password"
                        ref={password1ref}
                        required
                        className="p-3 border border-slate-500 rounded-lg m-2"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        ref={password2ref}
                        required
                        className="p-3 border border-slate-500 rounded-lg m-2"
                        placeholder="Re-Enter Password"
                    />
                    <button className="p-3 border border-slate-500 rounded-lg m-2 text-white bg-slate-700" onClick={handleSignin}>
                        SIGN UP
                    </button>
                    <div className='w-full flex justify-center'>
                        <p className='text-white'>Already have an Account<Link to="/signin" className='text-red-400 underline'> Sign in</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Signup;
