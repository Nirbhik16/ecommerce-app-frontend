import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAduwho-Y_uymD3SDcKJZlI6_78dLAn2yg",
  authDomain: "ecommerce-16b7a.firebaseapp.com",
  projectId: "ecommerce-16b7a",
  storageBucket: "ecommerce-16b7a.appspot.com",
  messagingSenderId: "201695306207",
  appId: "1:201695306207:web:4210a59f6c08f974c1646a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export 
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();