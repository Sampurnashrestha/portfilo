import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className='min-h-[300px] min-w-full flex flex-col justify-center items-center '>
      <h2>Contact</h2>
      <span>sampurnashrsth@gmail.com</span>

      <span>9843098663</span>
      <span>Kathmandu,Nepal</span>
      <span>Available for Internship, Freelance</span>

      
       <div className="flex text-[20px] lg:text-[28px]  justify-center lg:justify-start gap-3 mt-5  ">
                  <a hre>
                    <FaLinkedin className="text-gray-700 hover:text-[30px] hover:text-blue-500 transition" />
                  </a>
                  <a hre>
                    <FaGithub className="text-gray-700 hover:text-[30px] hover:text-blue-500 transition" />
                  </a>
                  <a hre>
                    <FaInstagram className="text-gray-700 hover:text-[30px] hover:text-blue-500 transition" />
                  </a>
                </div>
      </div>
    </>
  )
}

export default Contact
