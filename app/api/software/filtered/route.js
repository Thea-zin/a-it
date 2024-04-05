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
    let stars = request.star;
    let categories = "";

    if (request.star == null || request.star.length == 0) {
      stars = ["0", "1", "2", "3", "4", "5"];
    }

    let q = query(
      collection(firestore, "softwares"),
      where("star_text", "in", stars),
      orderBy("nci"),
      startAfter(request.last),
      limit(12)
    );

    if (request.categories != null && request.categories.length > 0) {
      q = query(
        collection(firestore, "softwares"),
        where("categories", "array-contains", request.categories[0]),
        where("star_text", "in", stars),
        orderBy("nci"),
        startAfter(request.last),
        limit(12)
      );
    }

    const documentSnapshots = await getDocs(q);

    let softwares = [];
    let count = 0;
    let last = "";
    for (let doc of documentSnapshots.docs) {
      count += 1;
      let temp = doc.data();
      last = temp.nci;
      if (request.categories.every((t) => temp.categories.includes(t))) {
        softwares.push(temp);
      }
    }

    return NextResponse.json(
      { softwares: softwares, isMore: count > 0, last: last },
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
