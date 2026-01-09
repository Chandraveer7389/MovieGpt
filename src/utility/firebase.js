// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnAu2mWKny1gY_gmD7KnVBE8QMvU0wh1Y",
  authDomain: "mgpt-b2340.firebaseapp.com",
  projectId: "mgpt-b2340",
  storageBucket: "mgpt-b2340.firebasestorage.app",
  messagingSenderId: "950716212292",
  appId: "1:950716212292:web:b73aa8ceaa27bf337d8811",
  measurementId: "G-YHKY3V6H1C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);