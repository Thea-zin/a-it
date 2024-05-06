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
  setDoc,
  documentId,
} from "firebase/firestore";
const jsdom = require("jsdom");

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();

    if (request.ischeck) {
      const q = query(
        collection(firestore, "softwares"),
        where(documentId(), "in", request.nci)
      );

      const documentSnapshots = await getDocs(q);
      let softwares = [];
      for (let id of request.nci) { // ensure the returning softwares are in the same order as the provided ids.
        for (let doc of documentSnapshots.docs) {
          let data = doc.data();
          if (doc.id == id) {
            try {
              if (data.compareData != null && data.compareData != "") {
                softwares.push(doc.data());
              }
            } catch (e) {}
          }
        }
      }

      return NextResponse.json(
        { softwares: [], total: softwares.length },
        { status: 404 }
      );
    } else {
      for (let i = 0; i < request.compareData.length; i++) {
        await setDoc(
          doc(firestore, "softwares", request.compareData[i][0]),
          { compareData: request.compareData[i][1] },
          { merge: true }
        );
      }
      return NextResponse.json({ softwares: [] }, { status: 200 });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
