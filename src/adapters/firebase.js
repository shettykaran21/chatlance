import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'chatlance-62de9.firebaseapp.com',
    projectId: 'chatlance-62de9',
    storageBucket: 'chatlance-62de9.appspot.com',
    messagingSenderId: '265058624131',
    appId: '1:265058624131:web:e8ce3bf7adc75d95cef1b6',
  })
  .auth();
