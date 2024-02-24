import { NextResponse } from "next/server";
import firebase_app from "../firebase";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export async function GET(req, res) {
  try {
    const firestore = getFirestore(firebase_app);
    const id = req.url.split("=").pop();
    const q = query(collection(firestore, "softwares"), where("id", "==", id));
    const querySnapshot = await getDocs(q);
    let data = [];
    for (let doc of querySnapshot.docs) {
      let temp = doc.data();
      // temp.icon = await getIconURL(temp.icon);
      temp.id = doc.id;
      data.push(temp);
    }

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}

async function getIconURL(name) {
  const storage = getStorage(firebase_app);
  const imgref = ref(storage, `icons/${name}.png`);
  const url = await getDownloadURL(imgref);
  return url;
}
