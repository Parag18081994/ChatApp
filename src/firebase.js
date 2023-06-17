import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
//import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBoD5iStto5c9zIkFKucwe4k-YnD5KmfU",
  authDomain: "chat-ec036.firebaseapp.com",
  projectId: "chat-ec036",
  storageBucket: "chat-ec036.appspot.com",
  messagingSenderId: "3627265949",
  appId: "1:3627265949:web:2bdcfa47fe1c6bd2124974",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();
