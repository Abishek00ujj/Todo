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
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center">
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

      <div className="text-justify mt-12">
        <p className="text-xl text-gray-600">
          We are currently pursuing our 3rd year of BTech-IT at Sri Shakthi College, working together to build this travel itinerary planner as part of our MERN stack training project. Our goal is to create a reliable, user-friendly platform that helps users plan their trips effortlessly.
        </p>
      </div>
      <hr/>
      <div className="text-justify mt-12">
    <h2 className="text-2xl font-bold text-center mb-4">Our Project</h2>
    <p className="text-gray-700 text-lg">
      This website was developed as part of our training in the MERN (MongoDB, Express, React, Node.js) stack. Our travel itinerary planner allows users to create, manage, and customize their trip itineraries seamlessly. We have integrated real-time data fetching for destinations, weather updates, and accommodation options to provide the best experience for travelers.
    </p>
    <p className="text-gray-700 text-lg mt-4">
      The development process involved collaborative teamwork where each member contributed their expertise—front-end development, back-end infrastructure, and full-stack integration. We used modern web development practices, focusing on responsiveness, performance, and scalability to ensure a high-quality user experience.
    </p>
    <p className="text-gray-700 text-lg mt-4">
      We are proud to have built this platform, which not only enhances trip planning but also showcases the skills we have acquired through our education and this project.
    </p>
  </div>
    </div>
    </div>
      <Footer/>
    </>
  )
}

export default Aboutus