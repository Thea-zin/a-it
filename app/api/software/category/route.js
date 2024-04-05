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

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    const q = query(
      collection(firestore, "softwares"),
      where("categories", "array-contains", request.category),
      orderBy("reviews", "desc"),
      orderBy("views", "desc"),
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
      { message: "something wrong on the server side!", softwares: softwares },
      { status: 500 }
    );
  }
}
