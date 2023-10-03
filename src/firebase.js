import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "webchatnew-6a159.firebaseapp.com",
  projectId: "webchatnew-6a159",
  storageBucket: "webchatnew-6a159.appspot.com",
  messagingSenderId: "402646314681",
  appId: "1:402646314681:web:49e3ef615a1577d80bf568"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
