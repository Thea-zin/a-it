import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  EmailAuthCredential,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
  signInWithEmailAndPassword,
  updatePassword,
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

      if (decode.password == request.current) {
        try {
          if (request.renew != request.newPass) {
            throw new Error();
          }

          await updatePassword(user, request.newPass);
          const token = sign(
            {
              email: user.email,
              password: request.newPass,
            },
            process.env.secret,
            { expiresIn: "24h" }
          );
          return NextResponse.json({ token: token }, { status: 200 });
        } catch (e) {
          console.log(e);
          return NextResponse.json(
            { reason: "New Password Is Not Allowed!" },
            { status: 402 }
          );
        }
      } else {
        return NextResponse.json(
          { reason: "Wrong Current Password" },
          { status: 403 }
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
