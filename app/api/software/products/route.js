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
    const smax = 12;

    var start_after = request.startAfter;
    var isLoadMore = request.isLoadMore;
    var pageNumber = request.pageNumber;
    let q = null;

    if (isLoadMore) {
      q = query(
        collection(firestore, "softwares"),
        orderBy("nci"),
        startAfter(start_after),
        limit(smax)
      );
    } else {
      try {
        let temp = await getDoc(doc(firestore, "tracker", "softwares"));
        let p = temp.data();
        let start_at = p.names[(pageNumber - 1) * smax];

        q = query(
          collection(firestore, "softwares"),
          orderBy("nci"),
          startAt(start_at),
          limit(smax)
        );
      } catch (e) {
        return NextResponse.json({ softwares: [], total: 0 }, { status: 202 });
      }
    }

    const documentSnapshots = await getDocs(q);

    let softwares = [];
    for (let doc of documentSnapshots.docs) {
      let temp = doc.data();
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
