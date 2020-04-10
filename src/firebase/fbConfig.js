import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwvICdK90cBUOTfEM00gy5Mfwpv_I_x6g",
  authDomain: "fruitmarket-af8a8.firebaseapp.com",
  databaseURL: "https://fruitmarket-af8a8.firebaseio.com",
  projectId: "fruitmarket-af8a8",
  storageBucket: "fruitmarket-af8a8.appspot.com",
  messagingSenderId: "1011823816740",
  appId: "1:1011823816740:web:e65aa1ac77c10072c1e8b1",
  measurementId: "G-N0H4X6Y0W5",
};

firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });
const db = firebase.firestore();
export { db };
