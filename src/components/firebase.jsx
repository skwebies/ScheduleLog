import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB6sCNIAS3A9Z2SRxs25koKrZ7TYVxlotA",
  authDomain: "schedule-log-reactjs.firebaseapp.com",
  databaseURL: "https://schedule-log-reactjs.firebaseio.com",
  projectId: "schedule-log-reactjs",
  storageBucket: "schedule-log-reactjs.appspot.com",
  messagingSenderId: "613183507957"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
