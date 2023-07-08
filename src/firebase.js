// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBr1KrN1GyD8LthzS2b9-w2gVZzh8vOh6U",
  authDomain: "react-chat-9767f.firebaseapp.com",
  projectId: "react-chat-9767f",
  storageBucket: "react-chat-9767f.appspot.com",
  messagingSenderId: "841152184056",
  appId: "1:841152184056:web:44f88f4cb991b98c6c450d",
  measurementId: "G-1LW1BYTJBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize auth,firestore
export const auth = getAuth(app)
export const db = getFirestore(app)