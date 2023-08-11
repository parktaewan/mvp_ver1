// Import the functions you need from the SDKs you need
import firebase, { initializeApp, getApp } from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export let app;

const firebaseConfig = {
  apiKey: "AIzaSyB55_8ne7msr90Ici6L3mUH7BzBpgTOeBI",
  authDomain: "simplz-mvp.firebaseapp.com",
  projectId: "simplz-mvp",
  storageBucket: "simplz-mvp.appspot.com",
  messagingSenderId: "400687742775",
  appId: "1:400687742775:web:485b9d0a5dacfa419b64b2",
  measurementId: "G-N153C4SE0W",
};

try {
  app = getApp("app");
} catch (e) {
  app = initializeApp(firebaseConfig, "app");
}

export const db = getFirestore(app);
