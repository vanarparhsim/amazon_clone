import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwN0hR_jyQIgCWMvcoYtZKNzmplMk5R6g",
    authDomain: "clone-41aa4.firebaseapp.com",
    projectId: "clone-41aa4",
    storageBucket: "clone-41aa4.appspot.com",
    messagingSenderId: "561623099760",
    appId: "1:561623099760:web:b5e8893789483b14fe87b5",
    measurementId: "G-86ST8G5XLV"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };