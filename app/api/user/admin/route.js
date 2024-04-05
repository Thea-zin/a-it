import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
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
  signInWithEmailAndPassword,
} from "firebase/auth";
import { sign, verify } from "jsonwebtoken";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export async function POST(req) {
  try {
    const auth = getAuth(firebase_app);
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    const decode = verify(request.token, process.env.secret);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        decode.email,
        decode.password
      );
      const user = userCredential.user;
      const q = query(
        collection(firestore, "admin"),
        where("email", "==", decode.email)
      );
      const snapshot = await getDocs(q);
      if (snapshot.size > 0) {
        return NextResponse.json({}, { status: 200 });
      } else {
        return NextResponse.json({ reason: "Not Admin" }, { status: 404 });
      }
    } catch (error) {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      return NextResponse.json(
        { reason: "Incorrect Log In Credential!" },
        { status: 405 }
      );
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { reason: "Something is wrong on the server side!" },
      { status: 500 }
    );
  }
}
