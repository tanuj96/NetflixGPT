// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQOzHwDtXqIvl3ZQ4cgSHhfIw941AwGtk",
  authDomain: "netflix-gpt-6368f.firebaseapp.com",
  projectId: "netflix-gpt-6368f",
  storageBucket: "netflix-gpt-6368f.appspot.com",
  messagingSenderId: "121301938152",
  appId: "1:121301938152:web:61d1800fc7b2ec460e3e5d",
  measurementId: "G-9438JM6VT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();