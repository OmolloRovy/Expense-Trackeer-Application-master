// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7ndM58LpVzFcewxWA0ugaTCE5TY7gKPo",
  authDomain: "expense-tracker-5f3a9.firebaseapp.com",
  projectId: "expense-tracker-5f3a9",
  storageBucket: "expense-tracker-5f3a9.appspot.com",
  messagingSenderId: "336160548839",
  appId: "1:336160548839:web:dbba553e9a1b5e55257f42",
  measurementId: "G-D3JEZMQ1T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);