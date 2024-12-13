import { useContext } from "react";
import Myimage from "../images/MyPhoto.jpg";
import "../App.css";
import NightModeContext from "../utils/NightModeContext";
import Mycv from "../assests/cv/examplecv.pdf";
const Body = () => {
  const { nightMode } = useContext(NightModeContext);
  return (
    <div
      className={`flex flex-col md:grid grid-cols-2 min-h-screen ${
        !nightMode ? "" : "bg-black"
      }`}
    >
      <div
        className={` pt-10 px-4 md:pt-36 md:px-20  ${
          !nightMode ? "text-black " : "text-white bg-black"
        }`}
      >
        <span className='font-bold  text-lg md:text-xl'> Hi !</span>
        <p className='font-bold text-3xl md:text-5xl'>
          I'm <span className='text-orange-400'>Abhinav</span>
        </p>
        <p className='font-bold text-5xl mb-3'>
          a{" "}
          <span className='bg-gradient-to-r from-green-900 via-cyan-400 to-yellow-400 text-transparent bg-clip-text text-'>
            MERN Stack Developer
          </span>
        </p>
        <p className='text-pretty text-base md:font-normal font-light '>
          with a passion for creating robust, user-friendly web applications. I
          specialize in building full-stack solutions using MongoDB, Express.js,
          React.js, and Node.js. I aim to turn ideas into impactful digital
          experiences. Explore my portfolio to see my work, skills, and projects
          in action!
        </p>
        <button
          type='button'
          className=' mt-4 mr-0 px-4 py-3 bg-teal-400 rounded-md text-white outline-none focus:ring-4 shadow-lg shadow-gray-500 transform active:scale-x-75 transition-transform mx-5 flex '
          onClick={() => {
            const link = document.createElement("a");
            link.href = Mycv;
            link.download = "Abhinav";
            link.click();
          }}
        >
          <svg
            class='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
            />
          </svg>
          <span className='ml-2'>Download CV</span>{" "}
        </button>{" "}
      </div>

      <div className='w-full h-full md:h-[65%] flex justify-center items-center md:mt-10'>
        <img
          src={Myimage}
          alt='My Phot'
          className=' w-full h-full object-cover mask-image'
        />
      </div>
    </div>
  );
};
export default Body;
