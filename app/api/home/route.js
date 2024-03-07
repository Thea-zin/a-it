import { NextResponse } from "next/server";
import firebase_app from "../firebase";
import {
  doc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  limit,
  orderBy,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export async function POST(req, res) {
  try {
    const firestore = getFirestore(firebase_app);
    var data = [];
    const q = query(
      collection(firestore, "softwares"),
      orderBy("reviews", "desc"),
      limit(3)
    );
    const querySnapshot = await getDocs(q);
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
