import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA88zxwqTISFFuUdHXbpGM4YyNTijxCrag",
    authDomain: "writing-master.firebaseapp.com",
    databaseURL: "https://writing-master.firebaseio.com",
    projectId: "writing-master",
    storageBucket: "writing-master.appspot.com",
    messagingSenderId: "1049484277461",
    appId: "1:1049484277461:web:462f0389b2dcadfcab145c",
    measurementId: "G-CS47CGHHV7"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;