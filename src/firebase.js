
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA-gDdfxfopMfWjDnQvFPIfJ16vK8nZcUQ",
  authDomain: "proyecto-final-cdcb7.firebaseapp.com",
  projectId: "proyecto-final-cdcb7",
  storageBucket: "proyecto-final-cdcb7.appspot.com",
  messagingSenderId: "835850965810",
  appId: "1:835850965810:web:24d993810e76660b537d2b"
};




export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

