import React, { useRef } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
const Signin = () => {
    const emailref=useRef(null);
    const passwordref=useRef(null);
    const handleLogin=()=>{
    }
  return(
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center relative z-10">
        <div className="bg-black flex flex-col justify-center items-center p-7 rounded-lg">
            <p className='text-white font-bold text-2xl'>SIGN IN</p>
          <input
            type="email"
            ref={emailref}
            required
            className="p-3 border border-slate-500 rounded-lg m-2"
            placeholder="Enter your Email"
          />
          <input
            type="password"
            ref={passwordref}
            required
            className="p-3 border border-slate-500 rounded-lg m-2"
            placeholder="Password"
          />
          <button className="p-3 border border-slate-500 rounded-lg m-2 text-white bg-slate-700" onClick={handleLogin}>
            SIGN IN
          </button>
          <div className='w-full flex justify-center'><p className='text-white'>Don't have an account?<Link to="/signup" className='text-red-400 underline'> Sign up</Link></p></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signin