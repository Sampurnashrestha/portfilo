import React from "react";
import { Link } from "react-router-dom";
import { FaHtml5, FaCss3Alt, FaPhp, FaReact } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";
import LibraryImg from "../assets/project/Library.png";
import EventImg from "../assets/project/event.png";
import CoffeeImg from "../assets/project/coffee.webp"


const projectWork = [
  {
    id: 1,
    title: "Library Management System",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    description:
      "A web-based system for managing books, users, and issuing records.",
    image: LibraryImg,
    git: "https://github.com/Sampurnashrestha/library_management_system.git",
  },
  {
    id: 2,
    title: "Event Management System",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    description:
      "A web-based system for managing event, booking, people and records.",
    image: EventImg,
    git: "https://github.com/Sampurnashrestha/event_management.git",
  },
  {
    id: 3,
    title: "Coffee Shop",
    tech: ["React js", "Tailwind css"],
    description: "I create a warm and welcoming space where great coffee meets great design.",
    image: CoffeeImg,
    git: "https://github.com/Sampurnashrestha/ecommerce",
    live: "http://ecommerce-nine-silk.vercel.app/"
  },
];

const techIcons = {
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  PHP: <FaPhp className="text-indigo-500" />,
  MySQL: <SiMysql className="text-blue-600" />,
  "React js": <FaReact className="text-cyan-400" />,
  "Tailwind css": <SiTailwindcss className="text-sky-400" />,
};

const Project = () => {
  return (
    <>
      <div className="min-h-[600px] w-full flex flex-col pl-5 sm:pl-10 lg:pl-10">
        <div className="text-[35px] sm:text-[45px] lg:text-[65px] font-bold leading-[85px] lg:mt-10">
          <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent pb-3 pl-0 sm:pl-10">
            Project
          </h2>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start">
          {projectWork.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-xl h-[380px] w-[90%] sm:w-[300px] m-5 rounded-xl hover:scale-103 transition duration-300"
            >
              <div className="w-full h-[150px] overflow-hidden rounded-t-xl bg-gray-100">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover sticky"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No Image
                  </div>
                )}
              </div>
              <div className="mt-4 text-center text-blue-500 text-[20px] font-semibold cursor-default">
                <h3>{project.title}</h3>
              </div>
              <div className="text-[14px] text-gray-500 cursor-default">
                <p className="mt-3 px-4 text-justify line-cl">{project.description}</p>
              </div>

              <div className="flex flex-row justify-center items-center gap-2">
                <span className="text-md mt-1 text-gray-500 cursor-default">
                  Technology:
                </span>
                <div className="flex gap-3 mt-3 text-3xl cursor-pointer">
                  {project.tech.map((t, index) => (
                    <span key={index} title={t} className="hover:scale-110">
                      {techIcons[t]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-8 mt-6 flex-wrap">
                <Link
                  className="bg-blue-500 text-white p-1 px-3 h-8 text-[16px] rounded hover:bg-blue-600 hover:scale-108 transition duration-300"
                  to={project.git}
                >
                  Source Code
                </Link>
                <Link
                  className="bg-gray-600 text-white p-1 px-3 h-8 text-[16px] rounded hover:bg-gray-700 hover:scale-108 transition duration-300"
                  to={project.live}
                >
                  Demo
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
