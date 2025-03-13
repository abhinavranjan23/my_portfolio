import React, { useContext } from "react";
import NightModeContext from "../utils/NightModeContext";

const educationData = [
  {
    institution: "Amity University",
    year: "2025 - now",
    description: "Master's in Computer Applications",
  },
  {
    institution: "Graphic Era University",
    year: "2021 - 2024",
    description: "Bachelor's in Computer Applications",
  },
  {
    institution: "Netaji Subhas Public School",
    year: "2019 - 2021",
    description: "High School",
  },
  {
    institution: "Mount View School",
    year: "2017 - 2019",
    description: "Middle School",
  },
];

const Education = () => {
  const { nightMode } = useContext(NightModeContext);

  return (
    <div
      className={`relative pb-20 pt-32 overflow-hidden transition-colors duration-300 ${
        nightMode ? "bg-gray-900 text-white" : "bg-teal-400 text-black"
      }`}
    >
      {/* Wavy Background */}
      <svg
        className='absolute top-0 left-0 w-full'
        viewBox='0 0 1440 320'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill={nightMode ? "#1F2937" : "#fff"}
          d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,240C672,245,768,235,864,208C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256V0H0Z'
        />
      </svg>

      {/* Education Section */}
      <div className='text-center relative z-10'>
        <h1 className='text-4xl font-extrabold drop-shadow-lg md:text-5xl'>
          Education
        </h1>
        <p className='text-lg drop-shadow-md md:text-xl opacity-90'>
          My Learning Journey
        </p>
        <div
          className={`w-20 h-1 mx-auto mt-2 transition-all ${
            nightMode ? "bg-gray-400" : "bg-white"
          }`}
        ></div>
      </div>

      {/* Education Timeline */}
      <div className='relative mt-16 mx-auto w-11/12 md:w-2/3'>
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full transition-all ${
            nightMode ? "bg-gray-500" : "bg-white"
          }`}
        ></div>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } flex-col md:flex-row`}
          >
            {/* Timeline Dot */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 shadow-md animate-pulse transition-all ${
                nightMode
                  ? "bg-gray-400 border-gray-600"
                  : "bg-white border-teal-500"
              }`}
            ></div>

            {/* Card */}
            <div
              className={`p-6 rounded-lg shadow-xl w-11/12 sm:w-80 transition-transform duration-300 transform hover:scale-105 ${
                nightMode ? "bg-gray-800 text-gray-300" : "bg-white text-black"
              } ${index % 2 === 0 ? "ml-10 md:ml-20" : "mr-10 md:mr-20"}`}
            >
              <h2
                className={`text-xl font-semibold transition-all ${
                  nightMode ? "text-teal-300" : "text-teal-600"
                }`}
              >
                {edu.institution}
              </h2>
              <p className='text-gray-500'>{edu.year}</p>
              <p className='text-sm opacity-80'>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
