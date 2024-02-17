import { NextResponse } from "next/server";
import firebase_app from "../firebase";
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
  where
} from "firebase/firestore";

export async function GET(req, res) {
  try {
    const firestore = getFirestore(firebase_app);
    const id = req.url.split("=").pop();
    const q = query(collection(firestore, "reviews"), where("soft_id", "==", id));
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data())
    });
    return NextResponse.json({data: data}, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const review = await req.json();
    // var software = await getDoc(doc(firestore, "softwares", review.soft_id));
    // software = software.data();
    var result = await addDoc(collection(firestore, "reviews"), review);
    // let user_reviews = null;
    // try {
    //   user_reviews = [...software.user_reviews];
    // } catch (e) {
    //   user_reviews = [];
    // }
    // user_reviews.push(result.id);
    // await updateDoc(doc(firestore, "softwares", review.soft_id), {
    //   user_reviews: user_reviews,
    // });
    return NextResponse.json({ id: result.id }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
