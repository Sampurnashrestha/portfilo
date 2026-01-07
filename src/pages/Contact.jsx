import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const contact = {
    email: "sampurnashrsth@gmail.com",
    number: 9843098663,
    address: "Kathmandu,Nepal",
    status: "Available for Internship, Freelance",
    gitHub: "https://github.com/Sampurnashrestha",
    linkedin: "https://www.linkedin.com/in/sampurna-shrestha-4238032aa/",
    instagram: "https://www.instagram.com/sampurna.x.stha/",
    text : "text-[16px] text-gray-500 cursor-default ",
  };
  return (
    <>
      <div className="min-h-[350px] min-w-full flex flex-col justify-center items-center  gap-1">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Contact</h2>
        <span className={contact.text}>{contact.email}</span>

        <span className={contact.text}>{contact.number}</span>
        <span className={contact.text}>{contact.address}</span>

        <div className="flex text-[20px] lg:text-[28px]  justify-center lg:justify-start gap-3 mt-5  mb-1 ">
          <a href={contact.linkedin}>
            <FaLinkedin className="text-gray-700 hover:scale-105 hover:text-blue-500 transition" />
          </a>
          <a href={contact.gitHub}>
            <FaGithub className="text-gray-700 hover:scale-105 hover:text-blue-500 transition" />
          </a>
          <a href={contact.instagram}>
            <FaInstagram className="text-gray-700 hover:scale-105 hover:text-blue-500 transition" />
          </a>
        </div>
        <span className={contact.text}>{contact.status}</span>
        <a
         href="/public/cv/resume.pdf"
         download
         className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          Download CV
        </a>
      </div>
    
    </>
  );
};

export default Contact;
