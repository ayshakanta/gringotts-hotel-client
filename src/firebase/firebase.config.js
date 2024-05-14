// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtEGMSnQZBd7MS9RiSzvfK42Z3T40Obg4",
  authDomain: "gringotts-hotel.firebaseapp.com",
  projectId: "gringotts-hotel",
  storageBucket: "gringotts-hotel.appspot.com",
  messagingSenderId: "911228733735",
  appId: "1:911228733735:web:a2213d61cce6706a2dc102"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth