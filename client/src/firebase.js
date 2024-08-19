// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-170ea.firebaseapp.com",
  projectId: "mern-estate-170ea",
  storageBucket: "mern-estate-170ea.appspot.com",
  messagingSenderId: "484979458335",
  appId: "1:484979458335:web:84f6b97dfb4fe3aa06702a",
  measurementId: "G-NPPK8H6GKB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
