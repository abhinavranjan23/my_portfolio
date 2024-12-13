// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgE2BcVeGPDu15hm8WgYZeWrCU0YtIk0g",
  authDomain: "myportfolio-5ce1c.firebaseapp.com",
  projectId: "myportfolio-5ce1c",
  storageBucket: "myportfolio-5ce1c.firebasestorage.app",
  messagingSenderId: "959483693828",
  appId: "1:959483693828:web:ac860750f75702f2ffde51",
  measurementId: "G-W80N4BZ0DX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
