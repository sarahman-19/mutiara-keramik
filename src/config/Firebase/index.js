import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB3Hv98TPw3tOPjnL6nD_z1184hK9MVP34",
  authDomain: "mutiara-keramik.firebaseapp.com",
  projectId: "mutiara-keramik",
  storageBucket: "mutiara-keramik.appspot.com",
  messagingSenderId: "867832549439",
  appId: "1:867832549439:web:93e5e6a570f743e299688a",
  measurementId: "G-N1REGZPE28",
  databaseURL: "https://mutiara-keramik-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const database = getDatabase();

export {
  firebaseApp,
  analytics,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  database,
  ref, 
  set,
};
