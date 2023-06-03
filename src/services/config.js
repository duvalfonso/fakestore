import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fakestore-dde2c.firebaseapp.com",
  projectId: "fakestore-dde2c",
  storageBucket: "fakestore-dde2c.appspot.com",
  messagingSenderId: "919703803283",
  appId: "1:919703803283:web:d7a4ad9c715674417d4466",
  measurementId: "G-Q730KDJN51"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);