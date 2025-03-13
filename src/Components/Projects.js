import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Netflix-GPT",
    description: "A Netflix clone integrated with GPT-based recommendations.",
    link: "https://github.com/taniyakamboj15/netflix-gpt",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWavC_NPBzwQ_gr3UC72Dvjb1-aGu1FcMCgQ&s", // Dummy image
  },
  {
    title: "Swiggy Clone",
    description:
      "A food ordering web app replicating Swiggy’s UI and functionality.",
    link: "https://github.com/yourgithub/swiggy-clone",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWavC_NPBzwQ_gr3UC72Dvjb1-aGu1FcMCgQ&s",
  },
  {
    title: "Stock Price Prediction & Portfolio Optimizer",
    description:
      "Predict stock prices and optimize your portfolio using ML and D3.js.",
    link: "#",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWavC_NPBzwQ_gr3UC72Dvjb1-aGu1FcMCgQ&s",
  },
  {
    title: "AI-Based Fake Product Review Detection",
    description: "Detect fake reviews using NLP and Graph Theory.",
    link: "#",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWavC_NPBzwQ_gr3UC72Dvjb1-aGu1FcMCgQ&s",
  },
  {
    title: "Smart Traffic & Route Optimization",
    description: "Real-time traffic updates and route optimization with ML.",
    link: "#",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWavC_NPBzwQ_gr3UC72Dvjb1-aGu1FcMCgQ&s",
  },
  {
    title: "Competitive Programming Dashboard",
    description:
      "Live contests, leaderboards, and problem tracking for CP enthusiasts.",
    link: "#",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWavC_NPBzwQ_gr3UC72Dvjb1-aGu1FcMCgQ&s",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='mt-40 px-10 relative'>
      <motion.h1
        className='text-3xl font-bold mb-6 text-center'
        data-aos='fade-up'
      >
        My Projects
      </motion.h1>

      {/* Project Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className='bg-gray-800 text-white p-5 rounded-lg shadow-lg cursor-pointer relative'
            data-aos='fade-up'
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-40 object-cover rounded-lg mb-4'
            />
            <h2 className='text-xl font-semibold'>{project.title}</h2>
          </motion.div>
        ))}
      </div>

      {/* Modal Popover */}
      {selectedProject && (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50'>
          <div className='bg-gray-900 text-white p-6 rounded-lg w-96 shadow-xl relative'>
            <button
              className='absolute top-3 right-3 text-white text-xl'
              onClick={() => setSelectedProject(null)}
            >
              ✖
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className='w-full h-40 object-cover rounded-lg mb-4'
            />
            <h2 className='text-2xl font-bold'>{selectedProject.title}</h2>
            <p className='text-gray-300 mt-2'>{selectedProject.description}</p>
            <a
              href={selectedProject.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:text-blue-300 mt-3 inline-block'
            >
              View Project →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
