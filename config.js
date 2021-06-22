import firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyBsVEx8exHa3MzBimfh4Nz28LWcxv8rNEg",
    authDomain: "book-santa-e7c27.firebaseapp.com",
    projectId: "book-santa-e7c27",
    storageBucket: "book-santa-e7c27.appspot.com",
    messagingSenderId: "300916094303",
    appId: "1:300916094303:web:30b8e80ae58a4db502f2ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()
