// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCamFDL6qMS0da0wQy-6f5hKo92UdpMac0",
    authDomain: "assignment-12-hddbd.firebaseapp.com",
    projectId: "assignment-12-hddbd",
    storageBucket: "assignment-12-hddbd.appspot.com",
    messagingSenderId: "726100641559",
    appId: "1:726100641559:web:d30afb3dfa85c262bd9952"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;