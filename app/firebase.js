// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQC5WjMnWXyHtSDjt067Tb26tf-N0EJw0",
  authDomain: "authentication-app-ea9bb.firebaseapp.com",
  databaseURL: "https://authentication-app-ea9bb-default-rtdb.firebaseio.com",
  projectId: "authentication-app-ea9bb",
  storageBucket: "authentication-app-ea9bb.appspot.com",
  messagingSenderId: "705726676941",
  appId: "1:705726676941:web:ea5bde4e926355cc0d8e84",
  measurementId: "G-YJNC93NH1K"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
export default firebase_app;