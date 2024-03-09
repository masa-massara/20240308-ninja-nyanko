import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID,
  };

// const firebaseConfig = {
//     apiKey: "AIzaSyC0lwBga0_o4TcOMQKtr6q7invayJFIzWE",
//     authDomain: "ninja-nyanko.firebaseapp.com",
//     projectId: "ninja-nyanko",
//     storageBucket: "ninja-nyanko.appspot.com",
//     messagingSenderId: "409358751529",
//     appId: "1:409358751529:web:1c159d44329e573babc938",
//     measurementId: "G-HWCS87HDGS"
//   };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
