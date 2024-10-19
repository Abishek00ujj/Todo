import React from 'react'
import under from "../assets/img/construction.png"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Underconstruction = () => {
  return (
        <>
        <Navbar/>
        <div className='w-screen h-screen'>
            <img src={under} alt="" width={500} />
        </div>
        <Footer/>
        </>
  )
}

export default Underconstruction