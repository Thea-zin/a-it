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
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export async function GET(req, res) {
  const firestore = getFirestore(firebase_app);

  // Query the first page of docs
  const first = query(
    collection(firestore, "softwares"),
    orderBy("name"),
    limit(8)
  );
  let documentSnapshots = await getDocs(first);
  console.log(documentSnapshots.docs[0].data());

  // Get the last visible document
  const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  console.log("last", lastVisible);

  // Construct a new query starting at this document,
  // get the next 25 cities.
  const next = query(
    collection(firestore, "softwares"),
    orderBy("name"),
    startAfter(lastVisible),
    limit(8)
  );
  documentSnapshots = await getDocs(next);

  console.log(documentSnapshots.docs[0].data());

  return NextResponse.json({}, { status: 200 });
}

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();

    var lastVisible = request.last;
    // console.log(request.last);
    let q = query(
      collection(firestore, "softwares"),
      orderBy("name"),
      startAfter(lastVisible),
      limit(3)
    );

    const documentSnapshots = await getDocs(q);

    let softwares = [];
    for (let doc of documentSnapshots.docs) {
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

async function getIconURL(name) {
  const storage = getStorage(firebase_app);
  const imgref = ref(storage, `icons/${name}.png`);
  const url = await getDownloadURL(imgref);
  return url;
}
