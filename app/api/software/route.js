import { NextResponse } from "next/server";
import firebase_app from "../firebase";
import {
  doc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { json } from "express";

export async function GET(req, res) {
  try {
    const firestore = getFirestore(firebase_app);
    const querySnapshot = await getDocs(collection(firestore, "softwares"));
    let softwares = [];
    for (let doc of querySnapshot.docs) {
      let temp = doc.data();
      // temp.icon = await getIconURL(temp.icon);
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

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    var data = null;
    const q_soft = query(
      collection(firestore, "softwares"),
      where("id", "in", request.ids)
    );
    const q_rev = query(
      collection(firestore, "reviews"),
      where("soft_id", "in", request.ids),
      orderBy("timestamp", "desc")
    );
    const soft_snapshot = await getDocs(q_soft);
    const rev_snapshot = await getDocs(q_rev);

    for (let doc of soft_snapshot.docs) {
      data = doc.data();
    }
    let reviews = [];
    for (let doc of rev_snapshot.docs) {
      reviews.push(doc.data());
    }

    return NextResponse.json({ data: data, reviews: reviews }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
