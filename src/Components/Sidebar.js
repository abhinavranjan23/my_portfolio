import navlist from "../utils/navlist";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { isMenuOpen, setIsMenuOpen } = props;
  return (
    <div
      className={`fixed top-0 right-0  h-full w-60 border-l border-zinc-300 shadow-lg shadow-slate-300 bg-slate-200 transform transition-transform duration-400 ease-in-out z-[9999999] ${
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
        {navlist.map((nav, index) => (
          <Link to={nav.link} key={index}>
            <li
              className='border-b border-slate-500 pb-2 pl-4'
              onClick={() => {
                setIsMenuOpen(false);
              }}
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
