import React, { useState } from 'react';
import { SquarePen, Trash2,X } from 'lucide-react';
const TodoCard = (props) => {
  const [popup,setpopup]=useState(false);
  const [delpopup,delsetpopup]=useState(false);
  const handlepopup=()=>
  {
        setpopup(!popup);
  }
  const handledelpopup=()=>
  {
        delsetpopup(!delpopup);
  }
  return (
    <>
      {
        delpopup&&(
          <div className='w-screen fixed justify-center items-center flex text-center z-70 fixed top-60 rounded-xl'>
          <div className='w-[70vw] xl:w-[30vw] h-[20vh] xl:h-[20vh] bg-black  rounded-lg'>
            <div className='w-full justify-center flex'><Trash2 fill='red' size={50} color='white'/></div>
            <div>
              <p className='text-white font-bold text-3xl'>Do you want to delete?</p>
            </div>
            <div className='mt-3'>
              <button className='bg-red-600 w-[50%] p-4' onClick={handledelpopup}>Cancel</button>
              <button className='bg-green-600 w-[50%] p-4'>Confirm</button>
            </div>
          </div>
          </div>
        )
      }
      <div className='w-screen flex justify-center py-5 z-10'>
      {popup&&(
        <div className='w-[80vw] h-[80vh] bg-slate-800 backdrop-blur-xl z-70 fixed top-16 rounded-xl'>
          <div className='w-full justify-end flex' onClick={handlepopup} ><X fill='red' color='red' size={40} className=''/></div>
          <div className='text-2xl font-semibold text-white text-center'>UPDATE YOUR TASK</div>
          <div className='w-full flex flex-col justify-center items-center gap-4'>
            <input type="text" className='w-[80%] h-10 rounded-lg' placeholder='Title' value={props.title}/>
            <textarea typeof='textarea' className='w-[80%] h-10 rounded-lg' placeholder='Body' value={props.body}></textarea>
          </div>
          <div className='w-full'>
            <div className='flex justify-end m-10 space-x-5'>
               <button className='bg-green-400 p-1 rounded-lg'>Update</button><button className='bg-red-600 p-2 rounded-lg' onClick={handlepopup}>Close</button>
            </div>
          </div>
        </div>
        )
       }
        <div className='w-[90vw] sm:w-[80vw] lg:w-[60vw] xl:w-[40vw] h-auto border border-black p-5 rounded-lg bg-slate-200'>
          <p className='text-justify mb-4 font-bold'>Title: {props.title}</p>
          <p  className='text-justify mb-4 font-mono'>Body: {props.body}</p>
          <div className='w-full flex justify-between'>
            <button className='p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600'onClick={handlepopup}>
              <div className=''><SquarePen /></div>
            </button>
            <button className='p-2 bg-red-500 rounded-full text-white hover:bg-red-600' onClick={handledelpopup}>
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
