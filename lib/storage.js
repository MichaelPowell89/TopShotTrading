import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyA8f3HkOi4h5sg2FWP4Iayt5Ljvan2CNqQ",
  authDomain: "topshottrading-d83c5.firebaseapp.com",
  databaseURL: "https://topshottrading-d83c5-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "topshottrading-d83c5",
  storageBucket: "topshottrading-d83c5.firebasestorage.app",
  messagingSenderId: "787103883059",
  appId: "1:787103883059:web:4b1718efbcb7095598e846",
  measurementId: "G-T5S9DXZZH0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }