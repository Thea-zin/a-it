import { NextResponse } from "next/server";
import firebase_app from "../../../firebase";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  addDoc,
  updateDoc,
  query,
  getDocs,
  where,
  orderBy,
  documentId,
  limit,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import {
  EmailAuthCredential,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
import { verify } from "jsonwebtoken";

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);

    const request = await req.json();

    console.log(request);
    let q = query(
      collection(firestore, "reviews"),
      where("soft_id", "==", request.id),
      orderBy("timestamp"),
      limit(30)
    );
    if (request.startAfter != null && request.startAfter > 0) {
      q = query(
        collection(firestore, "reviews"),
        where("soft_id", "==", request.id),
        orderBy("timestamp"),
        startAfter(request.startAfter),
        limit(30)
      );
    }

    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    q = query(
      collection(firestore, "reviews"),
      where("soft_id", "==", request.id)
    );
    const snapshot = await getCountFromServer(q);

    return NextResponse.json(
      { data: data, total: snapshot.data().count },
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
