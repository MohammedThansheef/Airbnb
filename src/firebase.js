import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAs_sySdU4aPUH8Jzdo9CyM-eRUArBbN5w",
  authDomain: "airbnb-clone-c5016.firebaseapp.com",
  databaseURL: "https://airbnb-clone-c5016.firebaseio.com",
  projectId: "airbnb-clone-c5016",
  storageBucket: "airbnb-clone-c5016.appspot.com",
  messagingSenderId: "1083057094646",
  appId: "1:1083057094646:web:d592d50364768b8d9211d7",
});

db = firebaseApp.firestore();
auth = firebase.auth();

export { db, auth };
