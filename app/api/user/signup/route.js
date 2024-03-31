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
    const formData = await req.formData();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.get("email"),
        formData.get("password")
      );
      const user = userCredential.user;

      const userProfile = {
        displayName: `${formData.get("name")}`,
        photoURL: `${formData.get("occupation")}!បំបែក!0`,
      };
      await updateProfile(user, userProfile);

      await sendEmailVerification(user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      if (errorCode == "auth/email-already-in-use") {
        return NextResponse.json(
          { reason: "Email Already Used!" },
          { status: 405 }
        );
      }
      return NextResponse.json(
        { reason: "Sign Up process interupted!" },
        { status: 405 }
      );
    }
    return NextResponse.json({}, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { reason: "Something is wrong on the server side!" },
      { status: 500 }
    );
  }
}
