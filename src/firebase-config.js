// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3hCAXc543fSoXSSUs0vgnCp_VhBgWe40",
  authDomain: "jing-c1711.firebaseapp.com",
  projectId: "jing-c1711",
  storageBucket: "jing-c1711.appspot.com",
  messagingSenderId: "564840477953",
  appId: "1:564840477953:web:5b7ce931bd8b79cb351700",
  measurementId: "G-H5L1B130D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
