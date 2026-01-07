import { Link } from "react-scroll";
import { motion } from 'framer-motion'

// eslint-disable-next-line react-refresh/only-export-components
export const Active = {
  link: " relative px-4 py-2 transition-all duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:text-blue-600 hover:after:w-full cursor-pointer",
};

const Header = () => {
  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Project", to: "project" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <div className=" h-[65px] bg-white fixed top-0 left-0 w-full z-50 ">
        <nav className="flex flex-row gap-16 pt-6 justify-center items-center text-[19px] font-semibold  ">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{opacity:0,y:0}}
              animate={{opacity:2,y:0}}
              transition={{duration: 1.5, ease: "easeOut", delay:0.4}}

            >
              <Link
                to={link.to}
                className={Active.link}
                smooth={true}
                duration={300}
                offset={-65}
                // spy={true}
                activeClass="text-blue-500 "
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
