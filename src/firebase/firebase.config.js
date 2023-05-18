// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDapPmo3szsUfcpxH8y8frWYMd0UvmJY1k",
  authDomain: "toy-vehicles.firebaseapp.com",
  projectId: "toy-vehicles",
  storageBucket: "toy-vehicles.appspot.com",
  messagingSenderId: "817335793802",
  appId: "1:817335793802:web:ae763a807ba5251d201573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;