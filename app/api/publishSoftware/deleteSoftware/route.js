import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
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
  deleteDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
} from "firebase/storage";

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const storage = getStorage(firebase_app);
    const request = await req.json();
    console.log(request);

    let temptracker = await getDoc(doc(firestore, "tracker", "softwares"));
    const tempsoft = await deleteDoc(
      doc(firestore, "softwares", `${request.id}`)
    );
    const tempicon = await deleteObject(ref(storage, `icons/${request.id}`));
    let tracker = temptracker.data();
    const index = tracker.names.indexOf(request.nci);
    if (index >= 0 && index != null) {
      tracker.names.splice(index, 1);
    }
    temptracker = await setDoc(temptracker.ref, tracker);

    return NextResponse.json(
      { messsage: "Successfully deleting the software" },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
