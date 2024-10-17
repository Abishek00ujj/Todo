import React, { useState } from 'react';
import { ListTodo, User2, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [sideBar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sideBar);
  };

  return (
    <>
      <div className='w-[100vw] h-[100vh] absolute top-0 lg:hidden'>
        <div className={` ${sideBar ? 'w-[70%]' : 'w-0'} backdrop-blur-md absolute transition-all duration-300 ease-out h-full z-40`}>
          <div onClick={handleSidebar} className='p-4'>
            <p className='text-3xl font-mono text-white'>
              {!sideBar ? <Menu size={40} /> : <X size={40} />}
            </p>
          </div>
          {sideBar && (
            <div className='flex flex-col gap-4 p-4 z-50'>
              <Link to="/" onClick={handleSidebar}>
                <div className='w-full bg-slate-400 p-3'><p>Home</p></div>
              </Link>
              <Link to="/aboutus" onClick={handleSidebar}>
                <div className='w-full bg-slate-400 p-3'><p>About us</p></div>
              </Link>
              <Link to="/signup" onClick={handleSidebar}>
                <div className='w-full bg-slate-400 p-3'><p>SignUp</p></div>
              </Link>
              <Link to="/signin" onClick={handleSidebar}>
                <div className='w-full bg-slate-400 p-3'><p>SignIn</p></div>
              </Link>
            </div>
          )}
          {sideBar && (
            <div className='relative bottom-0 w-full text-center'>
              <p className='text-white font-mono font-bold'>Powered by Abishek</p>
            </div>
          )}
        </div>
      </div>
      <div className='w-screen h-16 bg-slate-600 text-white font-mono p-4 flex items-center justify-between z-30'>
        <div className='text-2xl sm:text-3xl pl-10 flex'>TODO <ListTodo/></div>
        <div className='hidden lg:flex space-x-4 items-center'>
          <Link to="/" className="hover:underline"><p>Home</p></Link>
          <Link to="/aboutus" className="hover:underline"><p>About us</p></Link>
          <Link to="/signup" className="hover:underline"><p>SignUp</p></Link>
          <Link to="/signin" className="hover:underline"><p>SignIn</p></Link>
          <User2 />
        </div>
      </div>
    </>
  );
};

export default Navbar;
