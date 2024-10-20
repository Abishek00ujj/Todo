import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen bg-[#f8f8f8] flex justify-center items-center'>
        <div className='font-bold font-mono text-center p-4'>
          <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center'>
            Organize your
          </p>
          <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex justify-center items-center'>
            work and life,finally.
          </p>
          <p className='text-1xl sm:text-1xl md:text-1xl lg:text-1xl flex justify-center items-center'>
            Become focusted, organized and calm with
          </p>
          <p className='text-1xl sm:text-1xl md:text-1xl lg:text-1xl flex justify-center items-center'>
            todo app. The World's #1 task manager app.
          </p>
          <Link to={'/signup'}><button className="relative w-[165px] h-[62px] text-white text-[17px] rounded-xl bg-[#100720] transition-transform duration-100 hover:scale-95 active:scale-90 active:rotate-3">
      Make Todo List
      <span className="absolute inset-0 bg-gradient-to-br from-[#ff5ef7] to-[#02f5ff] blur-[15px] -z-10"></span>
    </button></Link>
        </div>
      </div>
      <Link to={"/underconstruction"}><div className='underline text-blue-500'>under construction</div></Link>
      <Footer/>
    </>
  );
};

export default Home;
