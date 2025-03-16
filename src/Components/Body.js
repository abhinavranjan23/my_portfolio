import { useContext, useState, useEffect, useRef } from "react";
import Myimage from "../images/MyPhoto.jpg";
import "../App.css";
import NightModeContext from "../utils/NightModeContext";
import Mycv from "../assests/cv/ABHINAV RANJAN-Resume.pdf";
import Skill from "./Skill";
import { TypeAnimation } from "react-type-animation";
import Education from "./Education";

const Body = () => {
  const skill = useRef();
  const [skillIsVisible, setSkillIsVisible] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Scroll function to check the scroll position
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setSkillIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(skill.current);
    window.addEventListener("scroll", scrollFunction);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scrollFunction);
    };
  }, [hasAnimated]);

  const { nightMode } = useContext(NightModeContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className='overflow-y-scroll no-scrollbar overflow-x-scroll'>
      <button
        type='button'
        className={`!fixed bottom-5 end-5 ${
          !isVisible ? "hidden" : ""
        } z-[99999999999] rounded-full bg-emerald-400 p-3 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-emerald-700 hover:shadow-lg focus:bg-emerald-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-800 active:shadow-lg`}
        onClick={backToTop}
      >
        <span className='[&>svg]:w-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='3'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18'
            />
          </svg>
        </span>
      </button>
      <div
        className={`flex flex-col transition-colors duration-300 ${
          nightMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div
          className={`flex flex-col md:grid grid-cols-2 items-center md:h-[100vh] transition-all ${
            nightMode ? "text-white" : "text-black"
          }`}
        >
          <div
            className={`pt-24 px-4 md:pt-52 md:px-20 transition-colors duration-300 ${
              nightMode ? "bg-gray-900 text-white" : ""
            }`}
          >
            <span className='font-bold text-lg md:text-xl'> Hi !</span>
            <p className='font-bold text-3xl md:text-5xl'>
              I'm <span className='text-orange-400'>Abhinav</span>
            </p>
            <div className='font-bold text-5xl mb-3 h-24 lg:h-auto'>
              a{" "}
              <span className='bg-gradient-to-r from-green-900 via-cyan-400 to-yellow-400 text-transparent bg-clip-text'>
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    1000,
                    "Full-Stack Developer",
                    1000,
                    "Web Developer",
                    1000,
                    "Programmer",
                    1000,
                  ]}
                  wrapper='span'
                  speed={10}
                  repeat={Infinity}
                />
              </span>
            </div>
            <p className='text-pretty text-base md:font-normal font-light'>
              with a passion for creating robust, user-friendly web
              applications. I specialize in building full-stack solutions using
              MongoDB, Express.js, React.js, and Node.js. I aim to turn ideas
              into impactful digital experiences. Explore my portfolio to see my
              work, skills, and projects in action!
            </p>
            <button
              type='button'
              className='mt-8 px-5 py-3 bg-teal-400 rounded-md text-white shadow-lg shadow-zinc-600 transform active:scale-x-75 transition-transform mx-5 flex items-center animate-bounce'
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
              <div
                className={`flex items-center justify-center w-full h-96 transition-colors duration-300 ${
                  nightMode ? "bg-gray-700" : "bg-gray-300"
                } rounded sm:w-96 animate-pulse`}
              ></div>
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
          className={`mt-10 transform transition-all duration-[2s] ${
            skillIsVisible
              ? "opacity-100 scale-100 rotate-0"
              : hasAnimated
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-90 rotate-[-10deg]"
          }`}
          ref={skill}
        >
          <Skill />
        </div>
        <Education />
      </div>
    </div>
  );
};

export default Body;
