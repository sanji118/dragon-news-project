import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBWe9hENYDsb7dA9m_O5tqVQF9HNdJSwaQ",
  authDomain: "dragon-news-project-17a4a.firebaseapp.com",
  projectId: "dragon-news-project-17a4a",
  storageBucket: "dragon-news-project-17a4a.firebasestorage.app",
  messagingSenderId: "52237258470",
  appId: "1:52237258470:web:df30c93142b2db1102b527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;