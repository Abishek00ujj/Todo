import React, { useRef, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const url="https://todo-fli1.onrender.com/api/v1/login";
    const [Redirecttohome,setRedirecttohome]=useState(false);
    const emailref=useRef(null);
    const passwordref=useRef(null);
    const warnToast=(message)=>toast.error(message);
    const succuessToast=(message)=>toast.success(message);
    const handleLogin=()=>{
      const objData={
        email:emailref.current.value,
        password:passwordref.current.value
      }
      if(objData.email.length==0||objData.password.length==0)
      {
        warnToast("Please fill!");
        return;
      }
      else
      {
         data_anupu(objData);
      }
    }
    const data_anupu=async(objData)=>{
      try{
       const res=await axios.post(url,objData);
       succuessToast(res.data.message);
       setTimeout(()=>setRedirecttohome(true),2000);
      //  console.log(res.data.others._id);
       sessionStorage.setItem("id",res.data.others._id);
      //  console.log(sessionStorage.getItem("id"));
      }
      catch(err)
      {
         if(err.response && err.response.data.message){
          // console.log(res.data.others._id);
          warnToast(err.response.data.message);
         }
         else
         {
          warnToast("An unexpected error occurred!");
         }
      }
    }
    if(Redirecttohome)
    {
      return <Navigate to={"/todo"}/>
    }
  return(
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center relative -z-0 bg-[#f8f8f8]">
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
      <ToastContainer/>
    </>
  )
}

export default Signin