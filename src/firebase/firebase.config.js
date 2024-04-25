// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3NRuUs9n2Y5q8elX1khcd82djquhxHI0",
  authDomain: "assignment-10-474ad.firebaseapp.com",
  projectId: "assignment-10-474ad",
  storageBucket: "assignment-10-474ad.appspot.com",
  messagingSenderId: "530123427841",
  appId: "1:530123427841:web:3f4463db83f0c9ba8a3000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;