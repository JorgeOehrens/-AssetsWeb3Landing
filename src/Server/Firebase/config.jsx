import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbcKqMwTNhnZ5XV0065AzxVXxUEY-wLwY",
  authDomain: "bettercoin-landing.firebaseapp.com",
  databaseURL: "https://bettercoin-landing-default-rtdb.firebaseio.com",
  projectId: "bettercoin-landing",
  storageBucket: "bettercoin-landing.appspot.com",
  messagingSenderId: "675677113901",
  appId: "1:675677113901:web:84bc8287efcdbd50e7b2a4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }
