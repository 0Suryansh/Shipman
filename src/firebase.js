// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC9H40qFZDG61H_NJLS4q9ScrUq32j6CUY",
  authDomain: "shipman-deb6b.firebaseapp.com",
  projectId: "shipman-deb6b",
  storageBucket: "shipman-deb6b.appspot.com",
  messagingSenderId: "537111272934",
  appId: "1:537111272934:web:f8f1ae7071dd84d91e0a27",
  measurementId: "G-K473HYHKCN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider();

export default app;