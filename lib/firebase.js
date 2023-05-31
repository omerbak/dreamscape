import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDem6MbZ3XMPQhikkq42GFcc-2mJwifbW4",
  authDomain: "dreamscape-contact-form.firebaseapp.com",
  projectId: "dreamscape-contact-form",
  storageBucket: "dreamscape-contact-form.appspot.com",
  messagingSenderId: "102864552850",
  appId: "1:102864552850:web:919c721a9198b46179774b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const colRef = collection(db, "messages");
/* this fonctionlity to determine the stage of submitting to firebase */

export async function addMessageFirestore(message) {
  try {
    await addDoc(colRef, message);
  } catch (error) {
    console.log(error.message);
  }
  return;
}
