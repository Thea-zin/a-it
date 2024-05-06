import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import firebase_app from "../firebase";
import {
  doc,
  getDoc,
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  addDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

export async function POST(req) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.geminiKey);
    const firestore = getFirestore(firebase_app);
    const request = await req.json();

    console.log("gemini", request);

    if (request.job != "compare") {
      const docsnap = await getDoc(doc(firestore, "softwares", request.id));
      if (docsnap.exists()) {
        const overview = docsnap.data().overview;
        if (overview != null && overview != "") {
          return NextResponse.json({ result: overview }, { status: 200 });
        }
      }
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

    const prompt = request.prompt;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (request.job != "compare") {
      const ressnap = await setDoc(
        doc(firestore, "softwares", request.id),
        { overview: text },
        { merge: true }
      );
    }

    return NextResponse.json({ result: text }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
