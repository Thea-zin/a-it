import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
  limit,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    const smax = 8;

    var lastVisible = request.last;
    let q = null;
    // console.log(request.last);
    if (request.last == request.search) {
      q = query(
        collection(firestore, "softwares"),
        orderBy("name"),
        startAt(request.last),
        endAt(request.search + "~"),
        limit(smax)
      );
    } else {
      q = query(
        collection(firestore, "softwares"),
        orderBy("name"),
        startAfter(request.last),
        endAt(request.search + "~"),
        limit(smax)
      );
    }

    const documentSnapshots = await getDocs(q);
    const q2 = (q = query(
      collection(firestore, "softwares"),
      orderBy("name"),
      startAfter(request.search),
      endAt(request.search + "~")
    ));
    const snapshot = await getCountFromServer(q2);

    let softwares = [];
    for (let doc of documentSnapshots.docs) {
      let temp = doc.data();
      temp.icon = await getIconURL(temp.icon);
      temp.id = doc.id;
      softwares.push(temp);
    }

    console.log(softwares);

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
