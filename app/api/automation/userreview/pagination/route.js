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
  startAfter,
  limit,
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
    const auth = getAuth(firebase_app);
    const request = await req.json();
    try {
      const decode = verify(request.token, process.env.secret);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        decode.email,
        decode.password
      );
      const user = userCredential.user;

      let q = query(
        collection(firestore, "reviews"),
        where("userid", "==", user.uid),
        orderBy("timestamp"),
        limit(3)
      );
      if (request.startAfter != null && request.startAfter > 0) {
        q = query(
          collection(firestore, "reviews"),
          where("userid", "==", user.uid),
          orderBy("timestamp"),
          startAfter(request.startAfter),
          limit(3)
        );
      }

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      return NextResponse.json({ data: data }, { status: 200 });
    } catch (e) {
      console.log(e);
      return NextResponse.json({ message: "Session Expire" }, { status: 405 });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
