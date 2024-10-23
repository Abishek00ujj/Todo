import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import abi from '../assets/img/abidp2.jpg'
const Aboutus = () => {
    const teamMembers = [
        {
          name: 'Abishek S',
          description: (
            <span>
              Abishek is a Full Stack developer with extensive knowledge in problem-solving. He excels in building scalable, responsive web applications and focuses on crafting seamless user experiences. Abishek’s expertise in both front-end and back-end development ensures high-quality deliverables. Check out his portfolio at <a href="https://codewithabi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">codewithabi.vercel.app</a> to explore his work.
            </span>
          ),
          image: abi,
        }];
  return (
    <>
      <Navbar/>
      <div class="bg-slate-200 min-h-screen flex items-center justify-center">
      <div className="bg-slate-200 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#f8f8f8] p-6 shadow-lg rounded-lg flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
            <p className="text-gray-700 text-justify">
              {member.description}
            </p>
          </div>
        ))}
      </div>
      <hr/>
    </div>
    </div>
      <Footer/>
    </>
  )
}

export default Aboutus