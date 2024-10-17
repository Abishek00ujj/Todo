import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center relative z-10">
        <div className="bg-black flex flex-col justify-center items-center p-7 rounded-lg">
        <p className='text-white font-bold text-2xl'>SIGN UP</p>
          <input
            type="text"
            required
            className="p-3 border border-slate-500 rounded-lg m-2"
            placeholder="Enter your Name"
          />
          <input
            type="email"
            required
            className="p-3 border border-slate-500 rounded-lg m-2"
            placeholder="Enter your Email"
          />
          <input
            type="password"
            required
            className="p-3 border border-slate-500 rounded-lg m-2"
            placeholder="Password"
          />
          <input
            type="password"
            required
            className="p-3 border border-slate-500 rounded-lg m-2"
            placeholder="Re-Enter Password"
          />
          <button className="p-3 border border-slate-500 rounded-lg m-2 text-white bg-slate-700">
            SIGN UP
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
