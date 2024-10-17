import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Signin = () => {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center relative z-10">
        <div className="bg-black flex flex-col justify-center items-center p-7 rounded-lg">
            <p className='text-white font-bold text-2xl'>SIGN IN</p>
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
          <button className="p-3 border border-slate-500 rounded-lg m-2 text-white bg-slate-700">
            SIGN IN
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin