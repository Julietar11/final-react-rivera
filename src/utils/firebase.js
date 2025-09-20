// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA634a_4TEFYjjqI-Hwn9IZFEYdLIFSEuM",
  authDomain: "pizza-argenta.firebaseapp.com",
  projectId: "pizza-argenta",
  storageBucket: "pizza-argenta.firebasestorage.app",
  messagingSenderId: "693530890344",
  appId: "1:693530890344:web:88298a78fb8aed93996bdd",
  measurementId: "G-Y7EQB1GXCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);