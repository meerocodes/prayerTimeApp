// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-O4bmyPdhxFbnOFEhpi8vSTAPpTpD5L4",
  authDomain: "authentication-2ca48.firebaseapp.com",
  databaseURL: "https://authentication-2ca48-default-rtdb.firebaseio.com",
  projectId: "authentication-2ca48",
  storageBucket: "authentication-2ca48.appspot.com",
  messagingSenderId: "98503008516",
  appId: "1:98503008516:web:f0fed82caeaa8c6281f051"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;