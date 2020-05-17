import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

///This file is storing data/functionality 

const firebaseConfig = {
    apiKey: "AIzaSyAH6L446ZycpAXFfL0ZRDHh7Mxabdh4K_Q",
    authDomain: "jobsearch-fa9e6.firebaseapp.com",
    databaseURL: "https://jobsearch-fa9e6.firebaseio.com",
    projectId: "jobsearch-fa9e6",
    storageBucket: "jobsearch-fa9e6.appspot.com",
    messagingSenderId: "944691947264",
    appId: "1:944691947264:web:0367b11dd8edb70ed575e5"
  };


 // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
        
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};