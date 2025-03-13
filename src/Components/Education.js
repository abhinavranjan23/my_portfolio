import React from "react";

const educationData = [
  {
    institution: "Amity University",
    year: "2025 - now",
    description: "Master's in Computer Applications",
  },
  {
    institution: "Grapdic Era University",
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
  return (
    <div className='relative bg-teal-400 text-white pb-20 pt-32'>
      {/* Wavy Background */}
      <svg
        className='absolute top-0 left-0 w-full'
        viewBox='0 0 1440 320'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='#fff'
          d='M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,240C672,245,768,235,864,208C960,181,1056,139,1152,144C1248,149,1344,203,1392,229.3L1440,256V0H0Z'
        />
      </svg>

      {/* Title - Adjusted Position & Shadow */}
      <div className='text-center relative z-10 text-black'>
        <h1 className='text-4xl font-bold drop-shadow-lg '>Education</h1>
        <p className='text-lg drop-shadow-md'>History of Education</p>
        <div className='w-20 h-1 bg-white mx-auto mt-2'></div>
      </div>

      {/* Timeline */}
      <div className='relative mt-16 mx-auto w-2/3'>
        <div className='absolute left-1/2 transform -translate-x-1 bg-white w-1 h-full'></div>

        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`relative flex items-center mb-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full'></div>

            {/* Card */}
            <div
              className={`bg-white text-black p-5 rounded-lg shadow-md w-80 ${
                index % 2 === 0 ? "ml-10" : "mr-10"
              }`}
            >
              <h2 className='text-xl font-semibold'>{edu.institution}</h2>
              <p className='text-gray-500'>{edu.year}</p>
              <p className='text-sm'>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
