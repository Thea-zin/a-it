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
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export async function GET(req, res) {
  try {
    const firestore = getFirestore(firebase_app);
    const querySnapshot = await getDocs(collection(firestore, "softwares"));
    let softwares = [];
    for (let doc of querySnapshot.docs) {
      let temp = doc.data();
      temp.icon = await getIconURL(temp.icon);
      temp.id = doc.id;
      softwares.push(temp);
    }
    return NextResponse.json({ softwares: softwares }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    var data = [];
    const q = query(
      collection(firestore, "softwares"),
      where("id", "in", request.ids)
    );
    const querySnapshot = await getDocs(q);
    // for (let id of request.ids) {
    //   const data_raw = await getDoc(doc(firestore, "softwares", `${id}`));
    //   let temp = data_raw.data();
    //   temp.icon = await getIconURL(temp.icon);
    //   data.push(temp);
    // }
    for (let doc of querySnapshot.docs) {
      let temp = doc.data();
      temp.icon = await getIconURL(temp.icon);
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
