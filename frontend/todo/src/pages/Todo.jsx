import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import TodoCard from '../components/TodoCard';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Todo = () => {
  const id = sessionStorage.getItem("id");
  const titleref = useRef(null);
  const bodyref = useRef(null);
  const [datu, setdatu] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const notify = (message) => toast(message);

  const handleClick = async () => {
    const title = titleref.current.value;
    const body = bodyref.current.value;

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
    setIsSubmitting(true);
    try {
      const res = await axios.post(url, obj);
      if (res.status === 200) {
        notify("Task added successfully!");
        titleref.current.value = "";
        bodyref.current.value = "";
        getTasks();
      }
    } catch (err) {
      console.error("Error adding task:", err);
      notify("Failed to add task.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      const geturl = `http://localhost:1999/api/v2/gettasks/${id}`;
      const res = await axios.get(geturl);
      setdatu(res.data.list);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      console.log(err.status)
      notify("Failed to fetch tasks.");
    }
    finally {
      setLoading(false);
    }
  };
  const handleDelete = (_id) => {
    setdatu(datu.filter(task => task._id !== _id));
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Navbar />
      <div className='w-screen h-screen bg-[#f8f8f8]'>
        <div className='w-screen bg-slate-400 p-10 flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center gap-4'>
            <input
              type="text"
              ref={titleref}
              required
              placeholder='Title'
              className='p-3 w-[90vw] sm:w-[40vw] xl:w-[30vw] border border-gray-500 rounded-md'
              disabled={isSubmitting} // Disable input while submitting
            />
            <textarea
              ref={bodyref}
              required
              placeholder='Body'
              className='p-3 w-[90vw] sm:w-[40vw] xl:w-[30vw] border border-gray-500 rounded-md'
              disabled={isSubmitting} // Disable textarea while submitting
            />
            <div className='w-full flex justify-end'>
              <button
                className={`bg-green-500 rounded-md text-white pl-4 pr-4 pt-2 pb-2 ${isSubmitting ? 'opacity-50' : ''}`}
                onClick={handleClick}
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? 'Adding...' : 'Add'}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          {loading ? (
            <p>Loading tasks...</p>
          ) : (
            datu.map((item) => (
              <TodoCard
                key={item._id}
                _id={item._id}
                title={item.title}
                body={item.body}
                onDelete={handleDelete}
                onUpdate={getTasks}
                getTasks={getTasks}
              />
            ))
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Todo;
