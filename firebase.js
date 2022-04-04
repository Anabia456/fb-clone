import { firebase, firebaseApp } from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvTo_GXnDSMYruHMLsC-uwA5NCHR37yYs",
  authDomain: "facebook-dcc57.firebaseapp.com",
  projectId: "facebook-dcc57",
  storageBucket: "facebook-dcc57.appspot.com",
  messagingSenderId: "331691809939",
  appId: "1:331691809939:web:3c177f583a4553f8ea0166"
};

//****Default initializer**** 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
// const app = !firebase.app.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// const db = app.firestore();
// const storage = firebase.storage();

const db = getFirestore(app);

export {db} ;