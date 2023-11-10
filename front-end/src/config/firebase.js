import { initializeApp } from "firebase/app";
import { ref, getStorage } from "firebase/storage";
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBH683rGAlETuvh9FaeTP45U0PBjeRbdTM",
    authDomain: "titanflix-9c935.firebaseapp.com",
    projectId: "titanflix-9c935",
    storageBucket: "titanflix-9c935.appspot.com",
    messagingSenderId: "1089380668012",
    appId: "1:1089380668012:web:a5efb8b339632136b4fe49"
};

export const app = initializeApp(firebaseConfig);
console.log(app)
export const storage = getStorage(app, "gs://titanflix-9c935.appspot.com");

