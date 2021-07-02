import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtAy9qkeC_sUMioYhog23XnKrA9T1DgXE",
    authDomain: "amzn-2-yt-9be49.firebaseapp.com",
    projectId: "amzn-2-yt-9be49",
    storageBucket: "amzn-2-yt-9be49.appspot.com",
    messagingSenderId: "1070001176994",
    appId: "1:1070001176994:web:d31b07f7d9c683a8c0f2fb",
    measurementId: "G-7H1X1V847H"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();

  export default db;