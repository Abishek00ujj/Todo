import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import TodoCard from '../components/TodoCard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const id = sessionStorage.getItem("id");
  const titleref = useRef(null);
  const bodyref = useRef(null);

  const handleClick = async () => {
    const title = titleref.current.value;
    const body = bodyref.current.value;

    // Validation for empty fields
    if (!title || !body) {
      notify("Title and Body are required!");
      return;
    }

    const obj = {
      title,
      body,
      id
    };

    const url = "http://localhost:1999/api/v2/addtask";
    try {
      const res = await axios.post(url, obj);
      console.log(res);
      if (res.status === 200) {
        notify("Task added successfully!");
        titleref.current.value = ""; // Clear input fields after success
        bodyref.current.value = "";
      }
    } catch (err) {
      console.error(err);
      notify("Failed to add task.");
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
