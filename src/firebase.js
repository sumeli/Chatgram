import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBdujldGgcXNblc9bWhLHbwZE4_lMglklY",
    authDomain: "chatgram-508a4.firebaseapp.com",
    projectId: "chatgram-508a4",
    storageBucket: "chatgram-508a4.appspot.com",
    messagingSenderId: "830766891717",
    appId: "1:830766891717:web:50508993eb24d7a04266ac",
    measurementId: "G-FV7TJ2M21V"
  }).auth();