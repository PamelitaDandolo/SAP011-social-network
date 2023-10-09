// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics'; não é necessário neste momento

const firebaseConfig = {
  apiKey: 'AIzaSyCvxZw39ZirFFbjPYTrxTOeTjdk_nCvJgc',
  authDomain: 'rede-social-25fa5.firebaseapp.com',
  projectId: 'rede-social-25fa5',
  storageBucket: 'rede-social-25fa5.appspot.com',
  messagingSenderId: '742669874515',
  appId: '1:742669874515:web:2b867facd9a39a70805da6',
  measurementId: 'G-PN29GLXYNE',
};
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);