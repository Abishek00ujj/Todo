import React, { useRef, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom'
const Signup = () => {
    const nameref=useRef(null);
    const emailref=useRef(null);
    const password1ref=useRef(null);
    const password2ref=useRef(null);

    const handleSignin=()=>{
        
    }
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center relative z-10">
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
        <div className='w-full flex justify-center'><p className='text-white'>Already have an Account<Link to="/signin" className='text-red-400 underline'> Sign in</Link></p></div>    
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
