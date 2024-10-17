import React from 'react'
import {Code,Linkedin,Github} from 'lucide-react'
const Footer = () => {
  return (
    <div>
        <footer className=" p-4 bg-slate-900 text-white text-center">
        <h3 className="mb-4 text-lg">Connect with Me</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://leetcode.com/u/abisheks123/" target="_blank" rel="noopener noreferrer">
            <Code className="w-8 h-8 hover:text-orange-400 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/abishek-s-336b612b9?fromQR=1 " target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 hover:text-blue-400 transition duration-200" />
          </a>
          <a href="https://github.com/Abishek00ujj" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 hover:text-gray-400 transition duration-200" />
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2024 Abishek. All rights reserved.<br/><p>Made with ❤ by Abishek</p></p>
      </footer>
    </div>
  )
}

export default Footer