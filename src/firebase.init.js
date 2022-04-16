// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA41rKNAsQoweFAcXsruAKB0GkZ8vU-jM",
    authDomain: "fitness-trainer-65c2f.firebaseapp.com",
    projectId: "fitness-trainer-65c2f",
    storageBucket: "fitness-trainer-65c2f.appspot.com",
    messagingSenderId: "270754170757",
    appId: "1:270754170757:web:3beee6186456b8d22826ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
