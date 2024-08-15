// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDR8ZFsZtXKKSEzuUB03LC8KZFMBuQ9x7I",
    authDomain: "supportive-ai.firebaseapp.com",
    projectId: "supportive-ai",
    storageBucket: "supportive-ai.appspot.com",
    messagingSenderId: "784596620692",
    appId: "1:784596620692:web:e56cd0200966812b6deb81",
    measurementId: "G-82TM5GJNWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, app, auth }