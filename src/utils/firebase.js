// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD74k9Q0ImnxyJCtQp3yJjHVkpTSXFYRc",
  authDomain: "mechsection-1e42e.firebaseapp.com",
  projectId: "mechsection-1e42e",
  storageBucket: "mechsection-1e42e.firebasestorage.app",
  messagingSenderId: "685055298352",
  appId: "1:685055298352:web:b4392a6ad55ee20bd596f5",
  measurementId: "G-KNF7GEM0DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);