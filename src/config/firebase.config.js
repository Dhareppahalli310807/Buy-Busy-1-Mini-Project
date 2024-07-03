// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOeCWh7V0y8mfnPqef4lRvnrhbTsQWQzM",
  authDomain: "buy-busy-1-mini-project.firebaseapp.com",
  projectId: "buy-busy-1-mini-project",
  storageBucket: "buy-busy-1-mini-project.appspot.com",
  messagingSenderId: "415028944002",
  appId: "1:415028944002:web:41dae55b617580db14289b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
