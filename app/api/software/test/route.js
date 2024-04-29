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
  addDoc,
  connectFirestoreEmulator,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  verifyPasswordResetCode,
  confirmPasswordReset,
  checkActionCode,
  applyActionCode,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  connectAuthEmulator,
} from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
const jsdom = require("jsdom");

export async function POST(req) {
  const auth = getAuth(firebase_app);
  const firestore = getFirestore(firebase_app);

  try {
    const snapshot = await getDoc(
      doc(firestore, "reviews", "oVlFnabZ3DJjdLpyBNbQ")
    );
    for (let i = 0; i < 10; i++) {
      await addDoc(collection(firestore, "reviews"), snapshot.data());
    }
    return NextResponse.json({ data: "" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
