import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

// eslint-disable-next-line react-refresh/only-export-components
export const Active = {
  link:
    "relative px-4 py-2 text-gray-700 text-xl font-medium transition-all duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] " +
    "after:w-0 after:bg-blue-600 after:transition-all after:duration-300 " +
    "hover:text-blue-600 hover:after:w-full cursor-pointer",
};

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Project", to: "project" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 ">
      <nav className="max-w-7xl mx-auto px-4 py-4 relative">

        {/* Desktop Center Menu */}
        <div className="hidden md:flex justify-center gap-8">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                className={Active.link}
                smooth={true}
                duration={400}
                offset={-80}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden absolute right-4 top-4 text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? "×" : <GiHamburgerMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="flex flex-col items-center gap-4 py-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.to}
                className="text-lg font-medium text-gray-700"
                smooth={true}
                duration={400}
                offset={-80}
                spy={true}
                onClick={() => setOpen(false)}
                activeClass="text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
