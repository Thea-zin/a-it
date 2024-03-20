import { NextResponse } from "next/server";
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
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const storage = getStorage(firebase_app);
    const formData = await req.formData();
    const d = new Date();

    const software = {
      icon: "",
      id: "",
      name: formData.get("serviceName"),
      nci: formData.get("serviceName").toLowerCase(),
      categories: formData.get("categories").split(","),
      reviews: 0,
      views: 0,
      publishDate: `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`,
    };

    // check whether there are other software with the same name already in the database
    const q = query(
      collection(firestore, "softwares"),
      where("nci", "==", formData.get("serviceName").toLowerCase())
    );
    const tempsnap = await getDocs(q);
    if (tempsnap.size != 0) {
      return NextResponse.json(
        {
          message:
            "Software Already Exist! Consider Chaning The Name or Making The Name Unique.",
        },
        { status: 405 }
      );
    }

    // save software info to firestore
    const temp = await addDoc(collection(firestore, "softwares"), software);
    const id = temp.id;

    // upload logo to storage
    const imgref = ref(storage, `icons/${id}`);
    const tlogo = await uploadBytes(imgref, formData.get("logoUpload"));
    const logoUrl = await getDownloadURL(tlogo.ref);

    // update the software info in firestore
    const tupdate = await updateDoc(doc(firestore, "softwares", `${id}`), {
      id: id,
      icon: logoUrl,
    });

    // update tracker in the firestore
    let temptracker = await getDoc(doc(firestore, "tracker", "softwares"));
    let tracker = temptracker.data();
    const a = [];
    tracker.names.push(formData.get("serviceName").toLowerCase());
    tracker.names.sort();
    temptracker = await setDoc(temptracker.ref, tracker);

    return NextResponse.json({ id: id }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
