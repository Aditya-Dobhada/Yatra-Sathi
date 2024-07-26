// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSxEiWbjJU9hIwA-AqLWpLv5Wq5WbaPiw",
  authDomain: "my-first-project-8e96d.firebaseapp.com",
  projectId: "my-first-project-8e96d",
  storageBucket: "my-first-project-8e96d.appspot.com",
  messagingSenderId: "67350106026",
  appId: "1:67350106026:web:afd02bad5bde5c362fe5d3",
  measurementId: "G-VKK83P6R19",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
