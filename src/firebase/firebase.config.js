// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf916hVmzuurWH6C3EvSbpUU_ugcEGXDA",
  authDomain: "bistro-boss-auth-920ef.firebaseapp.com",
  projectId: "bistro-boss-auth-920ef",
  storageBucket: "bistro-boss-auth-920ef.appspot.com",
  messagingSenderId: "447951686971",
  appId: "1:447951686971:web:e4c2c53dfb09cc5440fb1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;