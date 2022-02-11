// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZUN_aaGmo4PwjmsaGSaENBRlKJEIKQNc",
  authDomain: "fir-authentication-18025.firebaseapp.com",
  projectId: "fir-authentication-18025",
  storageBucket: "fir-authentication-18025.appspot.com",
  messagingSenderId: "1089466676385",
  appId: "1:1089466676385:web:beeef799a69ac59c3bece0",
  measurementId: "G-WLJPWEY4CD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);