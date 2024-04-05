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

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    let q = query(
      collection(firestore, "softwares"),
      orderBy("nci"),
      startAt(request.search),
      endAt(request.search + "~"),
      limit(request.limit)
    );

    const documentSnapshots = await getDocs(q);

    let softwares = [];
    for (let doc of documentSnapshots.docs) {
      let temp = doc.data();
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
