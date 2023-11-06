import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_AUTHDOMAIN,
  authDomain: import.meta.env.VITE_PROJECTID,
  projectId: import.meta.env.VITE_APIKEY,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)