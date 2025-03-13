import React, { useContext } from "react";
import NightModeContext from "../utils/NightModeContext";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import MyProfile from "../images/my-profile.jpg";

const ContactMe = () => {
  const { nightMode } = useContext(NightModeContext);

  return (
    <div
      className={`pt-28 md:pt-36  px-6 md:px-10 py-12 flex flex-col items-center justify-center h-[80vh] ${
        nightMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Section Heading */}
      <motion.h1
        className='text-4xl font-extrabold mb-6 text-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Contact Me
      </motion.h1>

      {/* Profile Section */}
      <div className='flex flex-col md:flex-row items-center justify-center mb-12'>
        {/* Profile Image */}
        <motion.img
          src={MyProfile}
          alt='Profile'
          className='w-32 h-32 rounded-full shadow-lg mb-4 md:mb-0 object-cover'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className='text-center md:text-left md:ml-8'>
          {/* Name */}
          <h2 className='text-3xl font-bold'>Abhinav Ranjan</h2>
          {/* Short About Me */}
          <p
            className={`text-lg  mt-2 ${
              nightMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Full Stack Developer | MERN | Passionate about building scalable and
            innovative applications.
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className='flex flex-col items-center space-y-4 text-lg'>
        {/* Phone */}
        <motion.a
          href='tel:+919368633714'
          className='flex items-center space-x-3 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 shadow-md'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: nightMode ? "#1E40AF" : "#2563EB",
          }}
        >
          <FaPhone className='text-xl' />
          <span>+91 93686 33714</span>
        </motion.a>

        {/* Email */}
        <motion.a
          href='mailto:abhinavranjan1523@gmail.com'
          className='flex items-center space-x-3 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 shadow-md'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: nightMode ? "#DC2626" : "#EF4444",
          }}
        >
          <FaEnvelope className='text-xl' />
          <span>abhinavranjan1523@gmail.com</span>
        </motion.a>
      </div>
    </div>
  );
};

export default ContactMe;
