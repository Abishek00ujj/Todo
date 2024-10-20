import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import TodoCard from '../components/TodoCard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  let id=sessionStorage.getItem("id");
  console.log(id);
  const titleref = useRef(null);
  const bodyref = useRef(null);
  console.log(sessionStorage.getItem("id"));
  const handleClick = async() => {
    const obj = {
      title: titleref.current.value,
      body: bodyref.current.value,
      id:id,
    };
    console.log(obj);
    const url="http://localhost:1999/api/v2/addtask"
      try
      {
         const res=await axios.post(url,obj).then((response)=>console.log(response));
      }
      catch(err)
      {
        console.log(err);
      }
    };
  
  const notify = (message) => toast(message);

  return (
    <>
      <Navbar />
      <div className='w-screen h-screen z-50 bg-[#f8f8f8]'>
        <div className='w-screen bg-slate-400 p-10 flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center gap-4'>
            <input 
              type="text" 
              ref={titleref}
              required
              placeholder='Title' 
              className='p-3 w-[90vw] sm:w-[40vw] xl:w-[30vw] border border-gray-500 rounded-md' 
            />
            <textarea 
              ref={bodyref}
              required
              placeholder='Body' 
              className='p-3 w-[90vw] sm:w-[40vw] xl:w-[30vw] border border-gray-500 rounded-md' 
            />
            <div className='w-full flex justify-end'>
              <button className='bg-green-500 rounded-md text-white pl-4 pr-4 pt-2 pb-2' onClick={handleClick}>
                Add
              </button>
            </div>
          </div>
        </div>
        <TodoCard title={"hi"} body={"hello"} />
        <TodoCard />
        <TodoCard />
        <ToastContainer />
      </div>
    </>
  );
};

export default Todo;
