import Img from "/src/assets/image.jpg";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

// eslint-disable-next-line react-refresh/only-export-components
export const Details = {
  occupation: "Front-end Developer & IT Student",
  description:
    "I build modern, responsive web experiences using React, Tailwind CSS. I focus on clean UI, performance, and accessible interactions.",
};

// eslint-disable-next-line react-refresh/only-export-components
export const Links = {
  gitHub: "https://github.com/Sampurnashrestha",
  linkedin: "www.linkedin.com/in/sampurna-shrestha-4238032aa",
};

const Home = () => {
  const deleyContent = 0.4
  return (
    <div className="min-h-screen min-w-full flex flex-col-reverse lg:flex-row px-[25px] lg:px-[30px] bg-gradient-to-br from-blue-90 to-purple-90">
      <div
        
        className="flex-1 mt-10 lg:mt-35 pl-5 lg:pl-50 text-center lg:text-left"
      >
        <motion.div
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 30 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}>
          <h1 className="text-[55px] lg:text-[85px] font-extrabold leading-[85px]">
            Hello, I'm{" "}
            <span className="inline-block min-w-[300px] bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: ["Sampurna", "Shrestha"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 50,
                  pauseFor: 1000,
                }}
              />
            </span>
          </h1>

          <h2 className="font-semibold text-[18px] sm:text-[25px] lg:text-[28px] text-gray-800 mt-3">
            {Details.occupation}
          </h2>

          <p className="text-gray-700 mt-3 w-full max-w-[560px] text-[14px] lg:text-[18px] mx-auto lg:mx-0 ">
            {Details.description}
          </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 , x:30, y:0}}
        animate={{ opacity: 1, x:30, y:2}}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        
        >
        
        <div className="mt-4 flex flex-col lg:flex-row gap-[20px]">
          <a
            href="#project"
            className="bg-gradient-to-r from-blue-500 to-purple-500  px-6 py-3 rounded-xl text-white backdrop-blur-lg hover:scale-110 transition-all  duration-300"
          >
            See my work
          </a>
        </div>

        <div className="flex text-[20px] lg:text-[28px]  justify-center lg:justify-start gap-3 mt-5  ">
          <a href={Links.linkedin}>
            <FaLinkedin className="text-gray-700 hover:text-[30px] hover:text-blue-500 transition" />
          </a>
          <a href={Links.gitHub}>
            <FaGithub className="text-gray-700 hover:text-[30px] hover:text-blue-500 transition" />
          </a>
        </div>
      </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
        className="mt-[17px] lg:mt-[70px]  flex justify-center   lg:pr-40 hover:scale-105 transition duration-300 "
      >
        <img
          src={Img}
          alt="profile"
          className="h-[330px] lg:h-[530px] max-w-[430px] rounded-[45px]  "
        />
      </motion.div>
    </div>
  );
};
export default Home;
