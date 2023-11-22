import { getDownloadURL, getStorage, ref } from "firebase/storage";
import firebase_app from "./firebase";

const storage = getStorage(firebase_app);

export default async function getImageURL(name) {
  const imgref = ref(storage, name);
  const url = await getDownloadURL(imgref)
  return url;
}
