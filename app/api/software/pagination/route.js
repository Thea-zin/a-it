import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  doc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  endAt,
  startAt,
  getCountFromServer,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    const smax = 8;

    var lastVisible = request.last;
    // console.log(request.last);
    let q = query(
      collection(firestore, "softwares"),
      orderBy("name"),
      startAfter(lastVisible),
      limit(smax)
    );

    const documentSnapshots = await getDocs(q);

    let softwares = [];
    for (let doc of documentSnapshots.docs) {
      let temp = doc.data();
      // temp.icon = await getIconURL(temp.icon);
      temp.id = doc.id;
      softwares.push(temp);
    }

    const snapshot = await getCountFromServer(
      collection(firestore, "softwares")
    );

    return NextResponse.json(
      { softwares: softwares, total: snapshot.data().count },
      { status: 200 }
    );
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
