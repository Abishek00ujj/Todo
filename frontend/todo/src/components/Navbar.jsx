import React, { useState } from 'react';
import { ListTodo } from 'lucide-react';
import { User2 } from 'lucide-react';

export const Navbar = () => 
  {
  return (
    <>
       <div className='w-screen h-[4-rem] bg-slate-600 text-white font-mono p-4 flex'>
            <div className='w-screen flex justify-start sm:text-5xl'>TODO</div>
            <div className='w-screen flex justify-end'>
               <p className='mr-2'></p>
               <p className='mr-2'></p>
               <p className='mr-2'></p>
               <p className='mr-2'></p>
            </div>
      </div>
      <div className='h-screen w-[30%] bg-orange-400 backdrop-blur-sm absolute transition-all duration-100 ease-in'>


      </div>
    </>
  );
};

export default Navbar;
 