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

export async function POST(req) {
  try {
    const auth = getAuth(firebase_app);
    const request = await req.json();
    try {
      const resp = await applyActionCode(auth, request.actionCode);

      return NextResponse.json({}, { status: 200 });
    } catch (error) {
      return NextResponse.json({ reason: "Link Expired!" }, { status: 404 });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { reason: "Something is wrong on the server side!" },
      { status: 500 }
    );
  }
}
