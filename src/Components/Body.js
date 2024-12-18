import { useContext, useState, useEffect, useRef } from "react";
import Myimage from "../images/MyPhoto.jpg";
import "../App.css";
import NightModeContext from "../utils/NightModeContext";
import Mycv from "../assests/cv/examplecv.pdf";
import Skill from "./Skill";

const Body = () => {
  const skill = useRef();
  const [skillIsVisible, setSkillIsVisible] = useState();
  console.log(skillIsVisible);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (enteries) => {
        const entery = enteries[0];
        setSkillIsVisible(entery.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(skill.current);
  }, []);
  const { nightMode } = useContext(NightModeContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div className={`${!nightMode ? "" : "bg-black"} flex flex-col`}>
      <div
        className={`flex flex-col md:grid grid-cols-2 items-center md:h-[100vh]  ${
          !nightMode ? "text-black" : "text-white"
        }`}
      >
        <div
          className={`pt-24 px-4 md:pt-52 md:px-20 ${
            nightMode ? "bg-black text-white" : ""
          }`}
        >
          <span className='font-bold text-lg md:text-xl'> Hi !</span>
          <p className='font-bold text-3xl md:text-5xl'>
            I'm <span className='text-orange-400'>Abhinav</span>
          </p>
          <p className='font-bold text-5xl mb-3'>
            a{" "}
            <span className='bg-gradient-to-r from-green-900 via-cyan-400 to-yellow-400 text-transparent bg-clip-text'>
              MERN Stack Developer
            </span>
          </p>
          <p className='text-pretty text-base md:font-normal font-light'>
            with a passion for creating robust, user-friendly web applications.
            I specialize in building full-stack solutions using MongoDB,
            Express.js, React.js, and Node.js. I aim to turn ideas into
            impactful digital experiences. Explore my portfolio to see my work,
            skills, and projects in action!
          </p>
          <button
            type='button'
            className='mt-4 px-4 py-3 bg-teal-400 rounded-md text-white shadow-lg transform active:scale-x-75 transition-transform mx-5 flex items-center'
            onClick={() => {
              const link = document.createElement("a");
              link.href = Mycv;
              link.download = "Abhinav-CV";
              link.click();
            }}
          >
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
              />
            </svg>
            <span className='ml-2'>Download CV</span>
          </button>
        </div>

        <div className='relative w-full h-full md:h-auto flex justify-center items-center md:mt-0 overflow-hidden'>
          {!isImageLoaded && (
            <div class='flex items-center justify-center w-full h-96 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 animate-pulse'>
              <svg
                class='w-20 h-20 text-gray-200 dark:text-gray-600'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
              </svg>
            </div>
          )}
          <img
            src={Myimage}
            alt='abhinav'
            className={`w-[80%] h-auto object-cover transition-transform duration-700 hover:scale-110 mask-image md:mt-14 ${
              isImageLoaded ? "block" : "hidden"
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>
      </div>

      <div
        className={`mt-10 transform transition-all duration-[4s] ${
          skillIsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-5]"
        } `}
        ref={skill}
      >
        <Skill />
      </div>
    </div>
  );
};

export default Body;
