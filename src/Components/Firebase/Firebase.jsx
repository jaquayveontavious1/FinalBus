// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt0Bx7xm1s8qd4iXC8yLpO82A_xvNMQ8g",
  authDomain: "bus-booking-ea0de.firebaseapp.com",
  projectId: "bus-booking-ea0de",
  storageBucket: "bus-booking-ea0de.firebasestorage.app",
  messagingSenderId: "829952252651",
  appId: "1:829952252651:web:9df1e7b75e747ebfa63cae",
  measurementId: "G-4T43X5GVWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export {auth}
//const analytics = getAnalytics(app);