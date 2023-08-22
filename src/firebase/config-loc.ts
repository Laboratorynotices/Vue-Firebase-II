// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "apiKeyapiKeyapiKeyapiKeyapiKeyapiKeyapiKey",
  authDomain: "projectId.firebaseapp.com",
  projectId: "projectId",
  storageBucket: "projectId.appspot.com",
  messagingSenderId: "messagingSenderId",
  appId: "Х:messagingSenderId:web:appId",
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
 
export { db };
