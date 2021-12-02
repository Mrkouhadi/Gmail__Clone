import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCHvoeTF8o0a4ZM5UaOffaV_GOrJDvgVEw",
    authDomain: "clone-cd7b7.firebaseapp.com",
    projectId: "clone-cd7b7",
    storageBucket: "clone-cd7b7.appspot.com",
    messagingSenderId: "460737712448",
    appId: "1:460737712448:web:efe87232325f68b44c6aa5",
    measurementId: "G-8ZN77G33Y0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};