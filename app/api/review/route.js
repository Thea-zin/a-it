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
  where,
} from "firebase/firestore";

export async function GET(req, res) {
  try {
    const firestore = getFirestore(firebase_app);
    const id = req.url.split("=").pop();
    const q = query(
      collection(firestore, "reviews"),
      where("soft_id", "==", id)
    );
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return NextResponse.json({ data: data }, { status: 200 });
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
    var result = await addDoc(collection(firestore, "reviews"), review);
    const q = query(
      collection(firestore, "reviews"),
      where("soft_id", "==", review.soft_id)
    );
    const querySnapshot = await getDocs(q);
    let data = [];
    querySnapshot.forEach((doc) => {
      const temp = doc.data();
      data.push(parseInt(temp.experience) + parseInt(temp.recommend));
    });
    console.log(data);
    console.log(data.reduce((partialSum, a) => partialSum + a, 0));
    console.log(data.length * 4);
    const star =
      data.reduce((partialSum, a) => partialSum + a, 0) / (data.length * 4);
    const soft_res = await updateDoc(
      doc(firestore, "softwares", `${review.soft_id}`),
      { star: parseFloat(star.toFixed(2)) }
    );

    return NextResponse.json({ id: result.id }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
