import { useState } from "react";
import "./logo.png";
import "./menu.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleHamBurger = () => {
    setIsMenuOpen(true);
  };
  return (
    <div className='relative'>
      <div className='w-full shadow-lg shadow-gray-500 h-16 sm:h-24 flex justify-between items-center'>
        <div>
          {" "}
          <img
            src={require("./logo.png")}
            alt='Logo'
            className='h-12 sm:h-20 sm:ml-40 drop-shadow-md ml-6'
          />
        </div>
        <div>
          <ul className='hidden sm:flex items-center gap-x-20 mr-40 text-lg text-gray-400 font-mono hover:cursor-pointer '>
            <li className='relative group hover:scale-110 transition-all ease-in duration-300'>
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
            {" "}
            <img
              src={require("./menu.png")}
              alt='Logo'
              className='h-8 sm:hidden mr-5'
            />
          </span>
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
            onClick={() => setIsMenuOpen(false)}
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
