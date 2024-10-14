import React, { useState } from 'react';
import { ListTodo } from 'lucide-react';
import { User2 } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div className="flex items-center space-x-4 text-[40px]">
          <ListTodo size={'40px'} />
          <p>todo</p>
        </div>
        {/* Toggle Button for Mobile View */}
        <button className="lg:hidden text-[25px]" onClick={toggleSidebar}>
          <ListTodo size={'40px'} />
        </button>
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 text-[25px]">
          <li>Home</li>
          <li>About us</li>
          <li>Sign Up</li>
          <li>Sign In</li>
          <li>Log Out</li>
          <User2 color="black" fill="red" className="border border-black rounded-full" size={'40px'} />
        </ul>
      </div>

      {/* Sidebar for Mobile View */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-100 shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <ul className="flex flex-col space-y-4 text-[25px] p-4">
          <li>Home</li>
          <li>About us</li>
          <li>Sign Up</li>
          <li>Sign In</li>
          <li>Log Out</li>
          <User2 color="black" fill="red" className="border border-black rounded-full" size={'40px'} />
        </ul>
      </div>
    </>
  );
};

export default Navbar;
