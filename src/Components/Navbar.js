import { useContext, useState } from "react";
import "../menu.png";
import "../logo.png";
import NightModeContext from "../utils/NightModeContext";

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
        className={` box-border w-full shadow-lg shadow-gray-500 h-16 sm:h-24 flex justify-between items-center pr-3 sm:pr-16 lg:pr-32 md:pr-24 ${
          nightMode ? "bg-black" : "bg-white"
        }`}
      >
        <div>
          {" "}
          <img
            src={require("../logo.png")}
            alt='Logo'
            className={`h-12 sm:h-20 lg:ml-40 drop-shadow-md mr-auto transition-shadow duration-300 ${
              nightMode
                ? "drop-shadow-[0_2px_2px_rgba(255,255,255,500)]"
                : "drop-shadow-md"
            }`}
          />
        </div>
        <div className='flex items-center'>
          <ul
            className={`hidden  lg:flex items-center gap-x-20 mr-40 text-lg font-mono hover:cursor-pointer ${
              !nightMode ? "text-gray-600" : "text-white"
            }`}
          >
            <li className='relative group hover:scale-110  hover:text-gray-800 transition-all ease-in duration-300'>
              Home
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300'></span>
            </li>
            <li className='relative group hover:scale-110 transition-all ease-in duration-300'>
              Projects
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300'></span>
            </li>
            <li className='relative group hover:scale-110 transition-all ease-in duration-300'>
              Contact
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300'></span>
            </li>
            <li className='relative group hover:scale-110 transition-all ease-in duration-300'>
              Github
              <span className='absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gray-700 group-hover:w-full transition-all duration-300'></span>
            </li>
          </ul>
          <span onClick={handleHamBurger}>
            <img
              src={require("../menu.png")}
              alt='Logo'
              className='h-7 lg:hidden  mr-5'
            />
          </span>
          <button onClick={handleNightMode} className='w-8 h-8  ml-auto'>
            {!nightMode ? (
              <img
                src='data:image/png;base64,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'
                alt='moon-symbol'
                className='sm:hover:scale-125'
              ></img>
            ) : (
              <img
                src='data:image/png;base64,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'
                alt='bright-moon'
                className='sm:hover:scale-125'
              ></img>
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`fixed top-0 right-0  h-full w-60 z-10 border-l border-zinc-300 shadow-lg shadow-slate-300 bg-slate-200 transform transition-transform duration-400 ease-in-out${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className='self-end text-black ml-2 mt-4 border border-neutral-400 rounded-md'
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-8 h-8'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <ul className='flex flex-col gap-y-4 pt-10 '>
            <li
              className='border-b border-slate-500 pb-2 pl-4'
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Home
            </li>
            <li className='border-b border-slate-500 pb-2 pl-4'>Projects</li>
            <li className='border-b border-slate-500 pb-2 pl-4'>Contact</li>
            <li className='border-b border-slate-500 pb-2 pl-4'>Github</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
