import React from 'react';
import { SquarePen, Trash2 } from 'lucide-react';

const TodoCard = (props) => {
  return (
    <>
      <div className='w-screen flex justify-center py-5'>
        <div className='w-[90vw] sm:w-[80vw] lg:w-[60vw] xl:w-[40vw] h-auto border border-black p-5 rounded-lg bg-slate-200'>
          <p className='text-justify mb-4 font-bold'>Title: {props.title}</p>
          <p  className='text-justify mb-4 font-mono'>Body: {props.body}</p>
          <div className='w-full flex justify-between'>
            <button className='p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600'>
              <SquarePen />
            </button>
            <button className='p-2 bg-red-500 rounded-full text-white hover:bg-red-600'>
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
