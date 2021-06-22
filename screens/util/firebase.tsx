import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBB9eFtSH3MkOvO7pZIfB5PSa1gT8v3a2g",
  authDomain: "mungun-kharaatsa.firebaseapp.com",
  projectId: "mungun-kharaatsa",
  storageBucket: "mungun-kharaatsa.appspot.com",
  messagingSenderId: "202418877347",
  appId: "1:202418877347:web:64556e852f9618ccfe6016",
  measurementId: "G-RHB234EW4B",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export default firebase;
