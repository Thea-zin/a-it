import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
  limit,
  startAfter,
  getCountFromServer,
  setDoc,
} from "firebase/firestore";

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    // let q = query(
    //   collection(firestore, "softwares"),
    //   orderBy("nci"),
    // );

    // const documentSnapshots = await getDocs(q);

    let softwares = [];
    // for (let doc of documentSnapshots.docs) {
    //   let temp = doc.data();
    //   softwares.push(temp.nci);
    // }

    const docRef = doc(firestore, "categories", "categories");
    const docSnap = await getDoc(docRef);

    let categories = docSnap.data();
    categories.categories.sort()

    const temp = await setDoc(docRef, categories)



    return NextResponse.json({ softwares: softwares }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
