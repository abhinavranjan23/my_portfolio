import { useContext } from "react";
import NightModeContext from "../utils/NightModeContext";

const Footer = () => {
  const { nightMode } = useContext(NightModeContext);
  return (
    <footer
      className={`flex flex-col items-center bottom-0 ${
        nightMode ? "bg-slate-700" : "bg-slate-200"
      } text-center text-neutral-600 `}
    >
      <div className='container px-6 pt-6'>
        <div className='mb-6 flex justify-center space-x-2'>
          <a
            href='https://www.facebook.com/harsh.ranjan.52831?mibextid=qi2Omg&rdid=pNtmCeJxJM3rjZD8&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19vuMgoFuB%2F%3Fmibextid%3Dqi2Omg#'
            type='button'
            rel='noopener noreferrer'
            className='rounded-full bg-[#3b5998] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='[&>svg]:h-5 [&>svg]:w-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 320 512'
              >
                <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
              </svg>
            </span>
          </a>

          <a
            href='https://x.com/Abhinav021523'
            type='button'
            rel='noopener noreferrer'
            className='rounded-full bg-[#55acee] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 512 512'
              >
                <path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
              </svg>
            </span>
          </a>

          <a
            href='https://leetcode.com/u/Abhinav_2234/'
            type='button'
            rel='noopener noreferrer'
            className='rounded-full bg-gray-50 p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto flex items-center justify-center [&>svg]:h-6 [&>svg]:w-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                enable-background='new 0 0 24 24'
                viewBox='0 0 24 24'
                id='leetcode'
              >
                <path
                  fill='#B3B1B0'
                  d='M22,14.355c0-0.742-0.564-1.345-1.26-1.345H10.676c-0.696,0-1.26,0.604-1.26,1.345c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355z'
                ></path>
                <path
                  fill='#9C9A99'
                  d='M22,14.355H9.416l0,0c0,0.742,0.564,1.346,1.26,1.346H20.74C21.436,15.701,22,15.098,22,14.355L22,14.355L22,14.355z'
                ></path>
                <path
                  fill='#C98F1B'
                  d='M4.781,14.355H4.735c0.015,0.736,0.315,1.474,0.897,2.068c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.31,0.449-0.71,0.729-1.271,0.729c-0.02,0-0.041,0-0.062-0.001c-0.2-0.007-0.364-0.087-0.53-0.181c-0.035-0.02-0.07-0.04-0.104-0.062C8.963,23.593,10.221,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.272-0.275-0.627-0.413-0.978-0.413c-0.332,0-0.659,0.124-0.906,0.374l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363C5.024,15.716,4.79,15.052,4.781,14.355L4.781,14.355z'
                ></path>
                <path
                  fill='#060605'
                  d='M4.735,14.355H1.918c0.006,1.485,0.595,2.945,1.739,4.101c1.324,1.336,2.657,2.663,3.984,3.996c0.113,0.114,0.236,0.215,0.37,0.3c0.034,0.021,0.068,0.042,0.104,0.062c0.166,0.094,0.33,0.174,0.53,0.181c0.021,0.001,0.041,0.001,0.062,0.001c0.561,0,0.961-0.28,1.271-0.729c0.291-0.421,0.286-1.368-0.182-1.671l-0.204-0.198c-1.321-1.324-2.652-2.638-3.96-3.974C5.05,15.83,4.75,15.091,4.735,14.355L4.735,14.355z'
                ></path>
                <path
                  fill='#E7A41F'
                  d='M3.483,18.187l4.312,4.361C8.767,23.527,10.113,24,11.599,24c1.484,0,2.83-0.511,3.804-1.494l2.589-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.53-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.808,0.662c-0.706,0-1.346-0.195-1.81-0.662l-4.297-4.363c-0.463-0.468-0.697-1.15-0.697-1.863c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635c-0.648-0.646-1.471-1.116-2.392-1.33l-0.033-0.006l2.447-2.504c0.512-0.514,0.494-1.366-0.037-1.901c-0.53-0.535-1.376-0.553-1.887-0.038L3.483,10.476C2.509,11.458,2,12.814,2,14.312S2.509,17.206,3.483,18.187L3.483,18.187z'
                ></path>
                <path
                  fill='#070706'
                  d='M8.115,22.814c-0.176-0.097-0.332-0.219-0.474-0.361c-1.327-1.333-2.66-2.66-3.984-3.996c-1.988-2.009-2.302-4.936-0.785-7.32c0.234-0.37,0.529-0.694,0.839-1.004c3.208-3.214,6.415-6.43,9.623-9.644c0.625-0.626,1.497-0.652,2.079-0.066c0.559,0.562,0.527,1.455-0.077,2.065c-0.77,0.776-1.54,1.55-2.31,2.325c-0.041,0.122-0.14,0.2-0.226,0.287c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-1.136,1.167-1.096,2.938,0.068,4.128c1.309,1.336,2.639,2.65,3.96,3.974l0.204,0.198c0.469,0.303,0.473,1.25,0.182,1.671c-0.321,0.466-0.739,0.75-1.333,0.728C8.445,22.987,8.281,22.907,8.115,22.814L8.115,22.814z'
                ></path>
                <path
                  fill='#EAB03C'
                  d='M13.021,4.826c-0.044,0.115-0.138,0.19-0.221,0.273c-0.863,0.877-1.751,1.73-2.6,2.619c-0.111,0.115-0.262,0.186-0.372,0.305c-1.423,1.423-2.862,2.83-4.265,4.272c-0.58,0.596-0.853,1.349-0.827,2.102h0.046C4.781,14.368,4.78,14.339,4.78,14.31c0-0.713,0.234-1.357,0.697-1.824l4.285-4.38c0.464-0.468,1.116-0.645,1.822-0.645c0.707,0,1.347,0.195,1.808,0.662l2.676,2.606c0.248,0.251,0.576,0.375,0.908,0.375c0.35,0,0.705-0.138,0.977-0.413c0.531-0.536,0.549-1.386,0.039-1.901l-2.589-2.635C14.757,5.51,13.938,5.041,13.021,4.826L13.021,4.826z M14.4,0c-0.194,0.001-0.386,0.045-0.562,0.132C14.021,0.049,14.212,0.005,14.4,0L14.4,0z'
                ></path>
                <path
                  fill='#272726'
                  d='M14.432,0c-0.01,0-0.021,0-0.031,0c-0.189,0.004-0.379,0.049-0.562,0.132c-0.178,0.081-0.349,0.2-0.504,0.356c-3.208,3.214-6.416,6.43-9.623,9.644c-0.31,0.31-0.604,0.634-0.839,1.004c-0.652,1.025-0.966,2.151-0.954,3.262h2.818c-0.026-0.753,0.248-1.506,0.827-2.102c1.402-1.442,2.842-2.849,4.265-4.272c0.111-0.119,0.261-0.189,0.372-0.305c0.849-0.889,1.737-1.742,2.6-2.619c0.083-0.084,0.177-0.159,0.221-0.273c0.002-0.005,0.003-0.009,0.005-0.014c0.77-0.775,1.54-1.549,2.31-2.325c0.604-0.61,0.637-1.503,0.077-2.065C15.133,0.14,14.786,0,14.432,0L14.432,0z'
                ></path>
              </svg>
            </span>
          </a>

          <a
            href='https://www.instagram.com/abhinav_ranjan_?utm_source=qr'
            type='button'
            rel='noopener noreferrer'
            className='rounded-full bg-[#ac2bac] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 448 512'
              >
                <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
              </svg>
            </span>
          </a>

          <a
            href='https://www.linkedin.com/in/abhinav-ranjan-a790ba276/'
            type='button'
            rel='noopener noreferrer'
            className='rounded-full bg-[#0082ca] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 448 512'
              >
                <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
              </svg>
            </span>
          </a>

          <a
            href='https://github.com/abhinavranjan23'
            type='button'
            rel='noopener noreferrer'
            className='rounded-full bg-[#333333] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white'
            data-twe-ripple-init
            data-twe-ripple-color='light'
          >
            <span className='mx-auto [&>svg]:h-5 [&>svg]:w-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 496 512'
              >
                <path d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z' />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div
        className={`w-full ${
          nightMode ? "bg-slate-900 text-gray-200" : "bg-slate-400"
        } p-4 text-center`}
      >
        © 2024 Copyright:
        <a href='https://tw-elements.com/'>Abhinav Ranjan</a>
      </div>
    </footer>
  );
};
export default Footer;
