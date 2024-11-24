import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRKT_PVq5BoaLW7WflZfaF6bt_Ed4TeDw",
    authDomain: "quasartodolist-c19ad.firebaseapp.com",
    projectId: "quasartodolist-c19ad",
    storageBucket: "quasartodolist-c19ad.firebasestorage.app",
    messagingSenderId: "766638699477",
    appId: "1:766638699477:web:3804a5fcf524c50022c35c",
    measurementId: "G-1C2DWQQF87"
  };
// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();