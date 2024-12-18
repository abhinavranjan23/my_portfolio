import react from "../images/react.png";
import express from "../images/express.png";
import git from "../images/git (2).png";
import github from "../images/github (2).png";
import java from "../images/java.png";
import javascript from "../images/javascript (2).png";
import mongodb from "../images/mongodb (2).png";
import nodejs from "../images/nodejs.png";
import php from "../images/php (2).png";
import python from "../images/python (2).png";
import tailwind from "../images/tailwind (2).png";

const skills = [
  { src: react, name: "React" },
  { src: express, name: "Express" },
  { src: mongodb, name: "MongoDB" },
  { src: nodejs, name: "Node.js" },
  { src: javascript, name: "JavaScript" },
  { src: git, name: "Git" },
  { src: github, name: "GitHub" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: php, name: "PHP" },
  { src: python, name: "Python" },
  { src: java, name: "Java" },
];

const Skill = () => {
  return (
    <div className='box-border flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-20 p-6 md:w-[180vh] bg-opacity-85 backdrop-blur-lg bg-slate-500 md:ml-16 backdrop-saturate-150  group mx-4 rounded-lg'>
      {/* Left Content */}
      <div className='flex flex-1 md:flex-none lg:text-center text-center md:mt-[9%] bg-emerald-500 mb-4 md:ml-40 shadow-md group-hover:shadow-slate-200 rounded-md p-2  shadow-neutral-800 group-hover:scale-110'>
        <span className='text-3xl font-bold'>My Skills</span>
      </div>

      {/* Right Skills Section */}
      <div className='flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 justify-center items-center'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center w-[120px] h-[60px] bg-white rounded-md shadow-md border hover:shadow-lg hover:shadow-blue-400 transition-all duration-300 hover:-translate-y-3 bg-opacity-85 backdrop-blur-lg backdrop-saturate-150 group-hover:scale-110 '
          >
            <img
              src={skill.src}
              className='w-8 h-8 object-contain mb-1'
              alt={`${skill.name} logo`}
            />
            <span className='text-sm font-medium text-gray-700'>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
