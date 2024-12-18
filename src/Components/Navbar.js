import { useContext, useState } from "react";
import "../menu.png";
import "../logo.png";
import NightModeContext from "../utils/NightModeContext";
import { DARK_MODE, LIGHT_MODE } from "../urlpath/themeicon";
import navlist from "../utils/navlist";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { nightMode, setNightMode } = useContext(NightModeContext);

  const handleHamBurger = () => {
    setIsMenuOpen(true);
  };
  const handleNightMode = () => {
    setNightMode(!nightMode);
  };
  return (
    <div className='relative'>
      <div
        className={`box-border fixed top-0 w-full shadow-lg shadow-gray-500 h-16 sm:h-24 flex justify-between items-center pr-3 sm:pr-10 lg:pr-32 bg-opacity-70  backdrop-blur-lg backdrop-saturate-150 z-[99999] ${
          nightMode ? "bg-black" : "bg-white"
        }`}
      >
        <div>
          {" "}
          <img
            src={require("../logo.png")}
            alt='Logo'
            className={`h-12 sm:h-20 lg:ml-40 mr-auto transition-shadow duration-300 filter ${
              !nightMode
                ? "drop-shadow-md"
                : "drop-shadow-[2px_2px_2px_rgba(255,255,255,1)]"
            }`}
          />
        </div>
        <div className='flex items-center'>
          <ul
            className={`hidden  lg:flex items-center gap-x-20 mr-40 text-lg font-mono hover:cursor-pointer ${
              !nightMode ? "text-gray-600" : "text-white"
            }`}
          >
            {navlist.map((nav, index) => (
              <li className='relative group hover:scale-110  hover:text-gray-800 transition-all ease-in duration-300'>
                <Link to={nav.link} key={index}>
                  {nav.title}
                </Link>
                <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300'></span>
              </li>
            ))}
          </ul>
          <span
            onClick={handleHamBurger}
            aria-label='Toggle menu'
            role='button'
            tabIndex='0'
            className='lg:hidden'
          >
            <img
              src={require("../menu.png")}
              alt='Logo'
              className='h-7 mr-5 '
            />
          </span>
          <button onClick={handleNightMode} className='w-8 h-8  ml-auto '>
            {!nightMode ? (
              <img
                src={LIGHT_MODE}
                alt='moon-symbol'
                className='sm:hover:scale-125'
              ></img>
            ) : (
              <img
                src={DARK_MODE}
                alt='bright-moon'
                className='sm:hover:scale-125'
              ></img>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <Sidebar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={(state) => setIsMenuOpen(state)}
        />
      )}
    </div>
  );
};

export default Navbar;
