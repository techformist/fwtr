import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyAdLWHlwVy9mZRCSZ6Gir8gPJdejMB5JA8",
    authDomain: "fwtr-fwtr.firebaseapp.com",
    databaseURL: "https://fwtr-fwtr.firebaseio.com",
    projectId: "fwtr-fwtr",
    storageBucket: "fwtr-fwtr.appspot.com",
    messagingSenderId: "389246158422",
  })
  .firestore();
