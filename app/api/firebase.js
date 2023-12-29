import { initializeApp } from "firebase/app";
import {getFirestore,} from "firebase/firestore";
import {getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.messagingSenderId,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default app;
// export default storage;