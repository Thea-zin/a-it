import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  EmailAuthCredential,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
  updateProfile,
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

      try {
        if (request.fullname.length > 0 && request.occupation.length > 0) {
          await updateProfile(user, {
            displayName: request.fullname,
            photoURL: `${request.occupation}!បំបែក!0`,
          });
          return NextResponse.json(
            {
              displayName: request.fullname,
              photoURL: `${request.occupation}!បំបែក!0`,
            },
            { status: 200 }
          );
        } else {
          throw new Error();
        }
      } catch (e) {
        console.log(e);
        return NextResponse.json(
          { reason: "Profile Updation is not allowed!" },
          { status: 402 }
        );
      }
    } catch (error) {
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      return NextResponse.json({ reason: "Session Expire!" }, { status: 405 });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { reason: "Something is wrong on the server side!" },
      { status: 500 }
    );
  }
}
