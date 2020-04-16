import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAFw3XLpX6Y0WnezIhh0HUaq9JvEvXVV-c',
  authDomain: 'e-commerce-db-8a02e.firebaseapp.com',
  databaseURL: 'https://e-commerce-db-8a02e.firebaseio.com',
  projectId: 'e-commerce-db-8a02e',
  storageBucket: 'e-commerce-db-8a02e.appspot.com',
  messagingSenderId: '528940868928',
  appId: '1:528940868928:web:048883b9652686f1eb06a5',
  measurementId: 'G-JFX83Q3MT2'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
