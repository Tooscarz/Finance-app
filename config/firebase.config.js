// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "finace-app-9a4c4.firebaseapp.com",
  projectId: "finace-app-9a4c4",
  storageBucket: "finace-app-9a4c4.firebasestorage.app",
  messagingSenderId: "694021020984",
  appId: "1:694021020984:web:9e253f85d3311048bcb5cd",
  measurementId: "G-DGLF2022EG"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp(); 
const db = getFirestore(app);
const storage = getStorage(app); 

export {db, storage};