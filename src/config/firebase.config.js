// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: "task-flow-fa37c.firebaseapp.com",
    projectId: "task-flow-fa37c",
    storageBucket: "task-flow-fa37c.appspot.com",
    messagingSenderId: "248790181190",
    appId: "1:248790181190:web:3a21af5ebddbfab4b83147",
    measurementId: "G-TNVKL5GMKP"
  };

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app); 
export const storage = getStorage(app); 