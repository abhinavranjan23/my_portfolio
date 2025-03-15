import { useEffect, useState, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import NightModeContext from "../utils/NightModeContext";
import Climatess from "../images/climate-ss.png";
import Devtinderss from "../images/dev-tinder-ss.png";
// import netflix-gpt-ss from "../images/netflix-gpt-ss.png";
import Swiggyss from "../images/swiggy-ss.png";

const projectsData = [
  {
    title: "Netflix-GPT",
    description: "A Netflix clone integrated with GPT-based recommendations.",
    link: "https://abvideogp.web.app/",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*Z4T8ZeuOmCoEZFnvWwjyyA.png",
  },
  {
    title: "Swiggy Clone",
    description:
      "A food ordering web app replicating Swiggy’s UI and functionality.",
    link: "https://github.com/abhinavranjan23/swiggy-clone",
    image: Swiggyss,
  },
  {
    title: "Dev Tinder",
    description: "A Tinder-like app for developers.",
    link: "https://github.com/abhinavranjan/dev-tinder",
    image: Devtinderss,
  },
  {
    title: "Climate Connect",
    description: "A climate awareness app to track global warming trends.",
    link: "https://climateconnect-inc.web.app/",
    image: Climatess,
  },
];

const Projects = () => {
  const { nightMode } = useContext(NightModeContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    AOS.refreshHard();
  }, [nightMode]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Track Mouse Movement (Fix for Scrolling Issue)
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <div
      className={`relative pt-20 md:pt-28 px-6 md:px-10 pb-10 transition-colors duration-500 overflow-hidden ${
        nightMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
      onMouseMove={handleMouseMove}
    >
      {/* Improved Glow Background Effect */}
      <div
        className='absolute inset-0 pointer-events-none transition-all duration-500'
        style={{
          background: `radial-gradient(300px at ${mousePosition.x}px ${
            mousePosition.y
          }px, 
            ${
              hovered ? "rgba(0, 204, 255, 0.5)" : "rgba(0, 204, 255, 0.2)"
            } 10%, transparent 60%)`,
          filter: "blur(50px)",
          opacity: hovered ? 0.7 : 0.5,
        }}
      ></div>

      {/* Section Title */}
      <motion.h1
        className='text-4xl font-extrabold mb-6 text-center'
        data-aos='fade-up'
      >
        🚀 My Projects
      </motion.h1>

      <p
        className={`text-lg text-center ${
          nightMode ? "text-gray-300" : "text-gray-600"
        } mb-10`}
        data-aos='fade-up'
        data-aos-delay='200'
      >
        Here are some of the cool projects I’ve built! 👇
      </p>

      {/* Projects List */}
      <div className='relative flex flex-col items-center'>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className={`relative w-4/5 md:w-2/5 p-2 rounded-xl shadow-lg cursor-pointer transition-all duration-300  
              ${
                nightMode
                  ? "bg-gray-800 border border-gray-600"
                  : "bg-white border border-gray-300"
              } 
              ${index % 2 === 0 ? "self-start" : "self-end"} 
              ${index < projectsData.length - 1 ? "mb-16" : ""}`}
            data-aos='fade-up'
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => setSelectedProject(project)}
          >
            {/* Card Glow Effect */}
            <div
              className='absolute inset-0 rounded-xl pointer-events-none transition-all duration-500'
              style={{
                background: hovered
                  ? "radial-gradient(circle, rgba(0, 204, 255, 0.4) 40%, transparent 80%)"
                  : "transparent",
                filter: hovered ? "blur(20px)" : "none",
                opacity: hovered ? 0.8 : 0.5,
              }}
            ></div>

            <div className='relative'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-max object-cover rounded-lg'
              />
              <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 hover:opacity-100 flex justify-center items-center transition-opacity duration-300'>
                <p className='text-white text-lg font-semibold'>View Details</p>
              </div>
            </div>
            <h2 className='text-xl font-bold mt-4'>{project.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* Modal Popover */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`p-6 rounded-lg w-96 shadow-xl relative ${
                nightMode
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white border border-gray-300"
              }`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className='absolute top-3 right-3 text-xl'
                onClick={() => setSelectedProject(null)}
              >
                ✖
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className='w-full h-max  rounded-lg mb-4'
              />
              <h2 className='text-2xl font-bold'>{selectedProject.title}</h2>
              <p className='mt-2'>{selectedProject.description}</p>

              <a
                href={selectedProject.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition-all duration-300'
              >
                View Project →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
