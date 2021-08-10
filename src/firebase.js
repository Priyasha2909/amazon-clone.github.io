// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlKH-cl-YWmh0VzcgHnuUYt8woZjP5wVo",
  authDomain: "clone-e3fc8.firebaseapp.com",
  projectId: "clone-e3fc8",
  storageBucket: "clone-e3fc8.appspot.com",
  messagingSenderId: "107664958723",
  appId: "1:107664958723:web:8e98af030e8de48d107536",
  measurementId: "G-18BLX40SBC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };