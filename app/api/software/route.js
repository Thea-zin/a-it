import { NextResponse } from "next/server";
import firebase_app from "../firebase";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export async function GET(req, res) {
  try {
    const firestore = getFirestore(firebase_app);
    const id = req.url.split('=').pop()
    console.log(id)
    const data_raw = await getDoc(
      doc(firestore, "softwares", `${id}`)
    );
    let data = data_raw.data();
    // res.status(200).send({})
    return NextResponse.json(data, { status: 200 });
  } catch (e) {
    console.log(e)
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
    for (let id of request.ids) {
      const data_raw = await getDoc(doc(firestore, "softwares", `${id}`));
      let temp = data_raw.data();
      temp.icon = await getIconURL(temp.icon);
      data.push(temp);
    }
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (e) {
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
