import React, { useState } from 'react';
import { SquarePen, Trash2, X } from 'lucide-react';
import axios from 'axios';

const TodoCard = ({ _id, title, body, onDelete, onUpdate,getTasks }) => {
  const [popup, setPopup] = useState(false);
  const [delPopup, setDelPopup] = useState(false);
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateBody, setUpdateBody] = useState(body);

  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleDelPopup = () => {
    setDelPopup(!delPopup);
  };

  const handleDelete = async () => {
    const deleteUrl = `http://localhost:1999/api/v2/deletetask/${_id}`;
    try
    {
      const res = await axios.delete(deleteUrl);
      if (res.status === 200) {
        getTasks();
        onDelete(_id); 
        handleDelPopup();
      }
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  const handleUpdate = async () => {
    const updateUrl = `http://localhost:1999/api/v2/updatetask/${_id}`;
    const updateData = { title: updateTitle, body: updateBody};

    try {
      const res = await axios.put(updateUrl, updateData);
      if (res.status === 200) {
        onUpdate(); 
        handlePopup(); 
      }
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <>
      {delPopup && (
        <div className='w-screen fixed justify-center items-center flex text-center z-70 top-60'>
          <div className='w-[70vw] xl:w-[30vw] h-[20vh] bg-black rounded-lg'>
            <div className='w-full justify-center flex'>
              <Trash2 fill='red' size={50} color='white' />
            </div>
            <div>
              <p className='text-white font-bold text-3xl'>Do you want to delete?</p>
            </div>
            <div className='mt-3 flex'>
              <button className='bg-red-600 w-[50%] p-4' onClick={handleDelPopup}>Cancel</button>
              <button className='bg-green-600 w-[50%] p-4' onClick={handleDelete}>Confirm</button>
            </div>
          </div>
        </div>
      )}

      {popup && (
        <div className='w-[80vw] h-[80vh] bg-slate-800 z-70 fixed top-16 rounded-xl'>
          <div className='w-full justify-end flex' onClick={handlePopup}>
            <X fill='red' color='red' size={40} />
          </div>
          <div className='text-2xl font-semibold text-white text-center'>UPDATE YOUR TASK</div>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <input
              type="text"
              className='w-[80%] h-10 rounded-lg'
              placeholder='Title'
              value={updateTitle}
              onChange={(e) => setUpdateTitle(e.target.value)}
            />
            <textarea
              className='w-[80%] h-32 rounded-lg'
              placeholder='Body'
              value={updateBody}
              onChange={(e) => setUpdateBody(e.target.value)}
            ></textarea>
          </div>
          <div className='w-full'>
            <div className='flex justify-end m-10 space-x-5'>
              <button className='bg-green-400 p-1 rounded-lg' onClick={handleUpdate}>Update</button>
              <button className='bg-red-600 p-2 rounded-lg' onClick={handlePopup}>Close</button>
            </div>
          </div>
        </div>
      )}

      <div className='w-screen flex justify-center py-5 z-10'>
        <div className='w-[90vw] sm:w-[80vw] lg:w-[60vw] xl:w-[40vw] h-auto border border-black p-5 rounded-lg bg-slate-200 backdrop-blur-3xl'>
          <p className='text-justify mb-4 font-bold'>Title: {title}</p>
          <p className='text-justify mb-4 font-mono'>Body: {body}</p>
          <div className='w-full flex justify-between'>
            <button className='p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600' onClick={handlePopup}>
              <SquarePen />
            </button>
            <button className='p-2 bg-red-500 rounded-full text-white hover:bg-red-600' onClick={handleDelPopup}>
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
