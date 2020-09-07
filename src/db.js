import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: "your_api_key",
    authDomain: "your_domain.firebaseapp.com",
    databaseURL: "https://your_app.firebaseio.com",
    projectId: "fwtr-fwtr",
    storageBucket: "your_app.appspot.com",
    messagingSenderId: "1234",
  })
  .firestore();
