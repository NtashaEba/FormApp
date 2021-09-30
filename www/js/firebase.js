// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpOygByGufsdEzHzNbCLvc2FreVcOXoIs",
  authDomain: "projetopab-d397c.firebaseapp.com",
  projectId: "projetopab-d397c",
  storageBucket: "projetopab-d397c.appspot.com",
  messagingSenderId: "240214622492",
  appId: "1:240214622492:web:b8f40d6025322fba2b7ad9",
  measurementId: "G-20WEZ458KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);