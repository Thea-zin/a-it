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
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);

    const docRef = doc(firestore, "categories", "categories");
    const docSnap = await getDoc(docRef);

    return NextResponse.json({ categories: docSnap.data() }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
