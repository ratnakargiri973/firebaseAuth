import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD4IO7zmC4TprCAlHpgIJQIh0YMxoNjo38",
    authDomain: "fir-auth-baf88.firebaseapp.com",
    projectId: "fir-auth-baf88",
    storageBucket: "fir-auth-baf88.appspot.com",
    messagingSenderId: "615874348693",
    appId: "1:615874348693:web:4ada05f045f8a6d5777d9c"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export { auth };