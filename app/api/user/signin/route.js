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
  signInWithEmailAndPassword,
} from "firebase/auth";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  try {
    const auth = getAuth(firebase_app);
    const formData = await req.formData();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.get("email"),
        formData.get("password")
      );
      const user = userCredential.user;
      if (user.emailVerified != true) {
        return NextResponse.json(
          { reason: "Email Has Not Been Verified!" },
          { status: 404 }
        );
      }

      // const data = {
      //   uid: user.uid,
      //   email: user.email,
      //   displayName: user.displayName,
      //   photoURL: user.photoURL,
      //   joined: user.metadata.creationTime,
      //   password: formData.get("password"),
      // }
      const token = sign(
        {
          email: formData.get("email"),
          password: formData.get("password"),
        },
        process.env.secret,
        { expiresIn: "24h" }
      );

      return NextResponse.json(
        {
          token: token,
          photoURL: user.photoURL,
          displayName: user.displayName,
          email: user.email,
          joined: user.metadata.creationTime,
        },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      if (errorCode == "auth/too-many-requests") {
        return NextResponse.json(
          { reason: "Too Many Wrong Log In! Please Try Again later!" },
          { status: 406 }
        );
      }
      return NextResponse.json(
        { reason: "Incorrect Log In Credential!", e: error },
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
