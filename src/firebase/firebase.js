import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Added Firestore import

const firebaseConfig = {
  apiKey: "AIzaSyAZf7eWa-MIFqJb7oXP5IQjLMBWQYYe8eo",
  authDomain: "craft-sarthi.firebaseapp.com",
  projectId: "craft-sarthi",
  storageBucket: "craft-sarthi.firebasestorage.app",
  messagingSenderId: "143124835877",
  appId: "1:143124835877:web:3ea443cf2060ace678d9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, auth, db };