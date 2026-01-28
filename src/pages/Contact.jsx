import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const contact = {
    email: "sampurnashrsth@gmail.com",
    number: 9843098663,
    address: "Kathmandu, Nepal",
    status: "Available for Internship, Freelance",
    gitHub: "https://github.com/Sampurnashrestha",
    linkedin: "https://www.linkedin.com/in/sampurna-shrestha-4238032aa/",
    instagram: "https://www.instagram.com/sampurna.x.stha/",
    text: "text-[16px] sm:text-[18px] text-gray-500",
  };

  return (
    <div className="min-h-[350px] w-full flex flex-col items-center pt-20 gap-6 px-5 sm:px-10 lg:px-20 bg-gradient-to-br from-blue-90 to-purple-90">
      <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
        Contact
      </h2>

      <div className="flex flex-col lg:flex-row w-full justify-center gap-10 lg:gap-70 flex-wrap">
        
        {/* Contact info */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span className={contact.text}>{contact.email}</span>
          <span className={contact.text}>{contact.number}</span>
          <span className={contact.text}>{contact.address}</span>
          <span className={contact.text}>{contact.status}</span>
        </div>

        {/* Social links & CV */}
        <div className="flex flex-col items-center pt-0 lg:pt-8 lg:items-start gap-4">
          <div className="flex gap-5 text-2xl sm:text-3xl lg:text-3xl">
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

          <a
            href="/public/cv/resume.pdf"
            download
            className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-lg sm:text-xl"
          >
            Download CV
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
