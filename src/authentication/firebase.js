import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAH6L446ZycpAXFfL0ZRDHh7Mxabdh4K_Q",
    authDomain: "jobsearch-fa9e6.firebaseapp.com",
    databaseURL: "https://jobsearch-fa9e6.firebaseio.com",
    projectId: "jobsearch-fa9e6",
    storageBucket: "jobsearch-fa9e6.appspot.com",
    messagingSenderId: "944691947264",
    appId: "1:944691947264:web:0367b11dd8edb70ed575e5"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  export const firestore = firebase.firestore();