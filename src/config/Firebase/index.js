import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3Hv98TPw3tOPjnL6nD_z1184hK9MVP34",
  authDomain: "mutiara-keramik.firebaseapp.com",
  projectId: "mutiara-keramik",
  storageBucket: "mutiara-keramik.appspot.com",
  messagingSenderId: "867832549439",
  appId: "1:867832549439:web:93e5e6a570f743e299688a",
  measurementId: "G-N1REGZPE28"
};

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export {firebaseApp, analytics, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }