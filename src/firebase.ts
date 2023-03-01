// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBkmTLagmxhWmisOqS6wAF815Rjo7mj68M",
  authDomain: "time-tracker-691fc.firebaseapp.com",
  projectId: "time-tracker-691fc",
  storageBucket: "time-tracker-691fc.appspot.com",
  messagingSenderId: "894685634924",
  appId: "1:894685634924:web:c1db3624a6b93c1c541349",
  measurementId: "G-JLSB3KQ5MX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
