import firebase from "firebase"
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCy1Q4DMyeGncUky1SnsYwlT3YrPUuualo",
    authDomain: "instagram-clone-98eca.firebaseapp.com",
    databaseURL: "https://instagram-clone-98eca.firebaseio.com",
    projectId: "instagram-clone-98eca",
    storageBucket: "instagram-clone-98eca.appspot.com",
    messagingSenderId: "404355171270",
    appId: "1:404355171270:web:529e8e9a80ab0dbf0ea8c7",
    measurementId: "G-2QCGZKF4NH"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export {db, auth, storage} ;