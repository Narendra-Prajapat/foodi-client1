// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBecWlsIjphB4VW089SLwxISgBlULc_4DM",
  authDomain: "foodi-client1-30a73.firebaseapp.com",
  projectId: "foodi-client1-30a73",
  storageBucket: "foodi-client1-30a73.appspot.com",
  messagingSenderId: "465513052303",
  appId: "1:465513052303:web:9d3b5bd819b711452858fa",
  measurementId: "G-SVYXYQ54RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;