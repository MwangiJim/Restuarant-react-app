import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' 

const firebaseConfig = {
  apiKey: "AIzaSyApPlBPDgT2FBBQ0fhorayNumI1ORmj8YQ",
  authDomain: "cabfee-restuarant-app.firebaseapp.com",
  projectId: "cabfee-restuarant-app",
  storageBucket: "cabfee-restuarant-app.appspot.com",
  messagingSenderId: "226338317698",
  appId: "1:226338317698:web:b26dfa7f3e475ce4d49b9b",
  measurementId: "G-P7GDR0BYP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export {db}