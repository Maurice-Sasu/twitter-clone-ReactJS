import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC6gr9KmVXEQ9tmU8OcHaHphhbS5E6G0d0",
    authDomain: "twitter-clone-1f588.firebaseapp.com",
    projectId: "twitter-clone-1f588",
    storageBucket: "twitter-clone-1f588.appspot.com",
    messagingSenderId: "946307770048",
    appId: "1:946307770048:web:7d92c6e2cfc290278e2f25"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;