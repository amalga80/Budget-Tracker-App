import firebase from 'firebase/app'
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBy7D1XTVF_u2CTSdufJdw71BKDu8JHm7Y",
    authDomain: "fir-react-cae22.firebaseapp.com",
    projectId: "fir-react-cae22",
    storageBucket: "fir-react-cae22.appspot.com",
    messagingSenderId: "978708826630",
    appId: "1:978708826630:web:98bee4bee367622550d187"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore() 
