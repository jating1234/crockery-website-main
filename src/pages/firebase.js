
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCTkbKi0HVcPPnz892FnkItRScGwrN9R0Q",
  authDomain: "login-auth1-b9d0c.firebaseapp.com",
  projectId: "login-auth1-b9d0c",
  storageBucket: "login-auth1-b9d0c.appspot.com",
  messagingSenderId: "865160194170",
  appId: "1:865160194170:web:c9d7d86a8403c199eb73c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const  storage = getStorage(app)
export default app
