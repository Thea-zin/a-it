import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.messagingSenderId,
};

const firebase_app = initializeApp(firebaseConfig);
const storage = getStorage(firebase_app);
const firestore = getFirestore(firebase_app);
export default firebase_app;

export async function getIconURL(name) {
  const imgref = ref(storage, `icons/${name}`);
  const url = await getDownloadURL(imgref);
  return url;
}

export async function getSoftware(id) {
  const dataRef = await getDoc(doc(firestore, "softwares", `${id}`));
  return dataRef.data();
}
