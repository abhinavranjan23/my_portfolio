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
import { useContext } from "react";
import NightModeContext from "../utils/NightModeContext";
import { useState, useEffect, useRef } from "react";

const skills = [
  { src: react, name: "React", color: "blue-500", width: "80%" },
  { src: express, name: "Express", color: "red-400", width: "20%" },
  { src: mongodb, name: "MongoDB", color: "green-500", width: "10%" },
  { src: nodejs, name: "Node.js", color: "yellow-500", width: "30%" },
  { src: javascript, name: "JavaScript", color: "pink-500", width: "90%" },
  { src: git, name: "Git", color: "white", width: "80%" },
  { src: github, name: "GitHub", color: "orange-500", width: "80%" },
  { src: tailwind, name: "Tailwind CSS", color: "blue-500", width: "70%" },
  { src: php, name: "PHP", color: "red-300", width: "80%" },
  { src: python, name: "Python", color: "green-300", width: "55%" },
  { src: java, name: "Java", color: "red-300", width: "60%" },
];

const Skill = () => {
  const { nightMode } = useContext(NightModeContext);
  const [skillIsVisible, setSkillIsVisible] = useState(false);
  const [visibleSkills, setVisibleSkills] = useState([]);
  const skillRef = useRef(null);

  // Intersection Observer to detect when the skill section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkillIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  // Reveal skills one by one when skillIsVisible becomes true
  useEffect(() => {
    if (skillIsVisible) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setVisibleSkills((prev) => [...prev, skill.name]);
        }, index * 200); // Delay each skill by 200ms
      });
    }
  }, [skillIsVisible]);
  return (
    <div
      ref={skillRef}
      className={`box-border flex flex-col lg:flex-row items-center justify-center  lg:items-start  gap-10 lg:gap-20 p-6 sm:w-[90vw] lg:w-[90vw] bg-opacity-85 backdrop-blur-lg shadow-xl shadow-cyan-200 drop-shadow-md ${
        nightMode
          ? "bg-gradient-to-r from-slate-700 to-slate-800"
          : "bg-gradient-to-r bg-teal-400 to-emerald-400"
      } lg:mx-16 backdrop-saturate-150  group mx-4 rounded-lg mb-10`}
    >
      {/* Left Content */}
      <div
        className={`flex flex-1 md:flex-none sm:text-center items-center justify-center  ${
          nightMode ? "bg-emerald-700" : "bg-emerald-500"
        } mb-4  shadow-md group-hover:shadow-slate-200 rounded-md p-2  shadow-neutral-800 group-hover:scale-110 lg:mt-[100px]`}
      >
        <p className='text-3xl font-bold text-center'>My Skills</p>
      </div>

      {/* Right Skills Section */}
      <div className='flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-9 justify-center items-center'>
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-[120px] h-[60px] transition-all duration-500  ${
              visibleSkills.includes(skill.name)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-75"
            } ${
              nightMode
                ? "bg-gray-700 text-gray-300 border-gray-200"
                : "bg-white text-gray-800 border-gray-800"
            } rounded-md shadow-md border hover:shadow-lg hover:shadow-blue-400 hover:-translate-y-3 bg-opacity-85 backdrop-blur-lg backdrop-saturate-150 group-hover:scale-110`}
          >
            <img
              src={skill.src}
              className='w-8 h-8 object-contain mb-1'
              alt={`${skill.name} logo`}
            />
            <span
              className={`text-sm font-medium ${
                nightMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      {skills.map((skill, index) => (
        <div
          key={index}
          data-popover
          id={`popover-default-${skill.name}`}
          role='tooltip'
          className='absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 '
        >
          <div className='px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>
              {`${skill.name}`}
            </h3>
          </div>
          <div className='px-3 py-2'>
            <div
              className={`w-full bg-${skill.color} rounded-full h-2.5 mb-4 dark:bg-gray-700 `}
            >
              <div
                className={`bg-${skill.color} h-2.5 rounded-full `}
                style={{ width: `${skill.width}` }}
              ></div>
            </div>
          </div>
          <div data-popper-arrow></div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
