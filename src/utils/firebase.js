// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7OXqQ6nZc5M9dgHwG-pBfQsUCOymNO9Y",
  authDomain: "video-gpt-a69a4.firebaseapp.com",
  projectId: "video-gpt-a69a4",
  storageBucket: "video-gpt-a69a4.firebasestorage.app",
  messagingSenderId: "42181726962",
  appId: "1:42181726962:web:b790a8ab8d5ac26717366b",
  measurementId: "G-JS3VX2VG6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();