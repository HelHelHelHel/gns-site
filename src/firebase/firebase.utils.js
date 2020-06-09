import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBYKbKq52D2EuivOt-hIScnHC88EOeLpig",
    authDomain: "fire-and-arms.firebaseapp.com",
    databaseURL: "https://fire-and-arms.firebaseio.com",
    projectId: "fire-and-arms",
    storageBucket: "fire-and-arms.appspot.com",
    messagingSenderId: "570323104816",
    appId: "1:570323104816:web:d2ae6deffbf81ddb2569f5",
    measurementId: "G-4KYY909220"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const { displayName, email } = userAuth; 
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;