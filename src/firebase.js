import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3uTal4yTKFGfi2ohF9OMtAHmV9gnLWWw",
  authDomain: "sql-project-2-b044c.firebaseapp.com",
  projectId: "sql-project-2-b044c",
  storageBucket: "sql-project-2-b044c.appspot.com",
  messagingSenderId: "366027281692",
  appId: "1:366027281692:web:972be7bbc27f3b00f9d6d9",
  measurementId: "G-WJC0BJ5SCL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
