// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBphVX0fv2-SU_M_EalNicl_N3vFJdEykA",
  authDomain: "ecommerce-5dfea.firebaseapp.com",
  projectId: "ecommerce-5dfea",
  storageBucket: "ecommerce-5dfea.appspot.com",
  messagingSenderId: "251330808901",
  appId: "1:251330808901:web:1114541fa26063c6bee72c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);