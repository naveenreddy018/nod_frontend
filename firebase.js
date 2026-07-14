// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdmQ2jESCa_ATG8RBo75XeFoqOMNwy6Dw",
  authDomain: "night-owls-design.firebaseapp.com",
  projectId: "night-owls-design",
  storageBucket: "night-owls-design.firebasestorage.app",
  messagingSenderId: "671240359927",
  appId: "1:671240359927:web:5892d59825e69609fc28f2",
  measurementId: "G-QCV0HKYBBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);