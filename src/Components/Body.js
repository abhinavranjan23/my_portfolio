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
      (enteries) => {
        const entery = enteries[0];
        setSkillIsVisible(entery.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(skill.current);
    window.addEventListener("scroll", scrollFunction);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

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
      <div className={`${!nightMode ? "" : "bg-gray-900"} flex flex-col`}>
        <div
          className={`flex flex-col md:grid grid-cols-2 items-center md:h-[100vh]  ${
            !nightMode ? "text-black" : "text-white"
          }`}
        >
          <div
            className={`pt-24 px-4 md:pt-52 md:px-20 ${
              nightMode ? "bg-gray-900 text-white" : ""
            }`}
          >
            <div>
              <span className='font-bold text-lg md:text-xl'> Hi !</span>
              <p className='font-bold text-3xl md:text-5xl'>
                I'm <span className='text-orange-400'>Abhinav</span>
              </p>
              <div className='font-bold text-5xl mb-3 h-24 lg:h-auto'>
                a{" "}
                <span className='bg-gradient-to-r from-green-900 via-cyan-400 to-yellow-400 text-transparent bg-clip-text  '>
                  <TypeAnimation
                    sequence={[
                      "MERN Stack Devloper",
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
            </div>

            <p className='text-pretty text-base md:font-normal font-light '>
              with a passion for creating robust, user-friendly web
              applications. I specialize in building full-stack solutions using
              MongoDB, Express.js, React.js, and Node.js. I aim to turn ideas
              into impactful digital experiences. Explore my portfolio to see my
              work, skills, and projects in action!
            </p>
            <button
              type='button'
              className='mt-8 px-5 py-3 bg-teal-400 rounded-md text-white shadow-lg shadow-zinc-600 transform active:scale-x-75 transition-transform mx-5 flex items-center animate-bounce '
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
              <div className='flex items-center justify-center w-full h-96 bg-gray-300 rounded sm:w-96 dark:bg-gray-700 animate-pulse'>
                <svg
                  className='w-20 h-20 text-gray-200 dark:text-gray-600'
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
          className={`mt-10 transform transition-all duration-[2s]  ${
            skillIsVisible
              ? "  opacity-100 scale-100  "
              : "  opacity-0  scale-50"
          } `}
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
