// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGuLSHDjsBY8PKJHLN1fHA8eR6HcTnP7Y",
  authDomain: "car-services-a215e.firebaseapp.com",
  projectId: "car-services-a215e",
  storageBucket: "car-services-a215e.appspot.com",
  messagingSenderId: "939696156821",
  appId: "1:939696156821:web:921ff758089af780876b9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
