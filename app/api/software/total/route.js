import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  getFirestore,
  collection,
  query,
  getCountFromServer,
} from "firebase/firestore";

export async function GET(req, res) {
  const firestore = getFirestore(firebase_app);

  // Query the first page of docs
  const q = query(collection(firestore, "softwares"));
  const snapshot = await getCountFromServer(q);

  return NextResponse.json({ count: snapshot.data().count }, { status: 200 });
}
