// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBB6nr1zZ4PA5vls9w83mLWTXsEhoK27iw",
    authDomain: "smart-deals-64eb8.firebaseapp.com",
    projectId: "smart-deals-64eb8",
    storageBucket: "smart-deals-64eb8.firebasestorage.app",
    messagingSenderId: "190386563200",
    appId: "1:190386563200:web:6f8c549c80b2088d3dde65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);