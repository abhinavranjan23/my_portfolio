import navlist from "../utils/navlist";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NightModeContext from "../utils/NightModeContext";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const { nightMode } = useContext(NightModeContext);
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 border-l border-white/20 shadow-2xl bg-white/10 backdrop-blur-lg transition-transform duration-500 ease-in-out z-[99990999] ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        className={`absolute top-4 right-4 p-2 rounded-full ${
          nightMode
            ? "bg-white/20 hover:bg-white/30"
            : "bg-gray-800 hover:bg-gray-900 hover"
        } transition-all duration-300`}
        onClick={() => setIsMenuOpen(false)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='white'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>

      {/* Navigation List */}
      <ul
        className={`flex flex-col gap-y-6 pt-16 px-6 ${
          nightMode ? "text-white" : "text-black"
        }`}
      >
        {navlist.map((nav, index) => (
          <Link to={nav.link} key={index}>
            <li
              className={`border-b ${
                nightMode ? "border-white/20" : " border-gray-700"
              } pb-2 pl-2 text-lg font-semibold tracking-wide transition-all duration-300 hover:text-teal-300 hover:scale-105`}
              onClick={() => setIsMenuOpen(false)}
            >
              {nav.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
