// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA734AHw-jdMElVFpivbBkwEkbog0p-wGk",
  authDomain: "netflix-gpt-fe986.firebaseapp.com",
  projectId: "netflix-gpt-fe986",
  storageBucket: "netflix-gpt-fe986.appspot.com",
  messagingSenderId: "773632548370",
  appId: "1:773632548370:web:c3c328e4fd193de37d82cb",
  measurementId: "G-SNW9N7WRTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();