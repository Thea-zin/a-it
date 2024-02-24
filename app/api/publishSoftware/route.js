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
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const storage = getStorage(firebase_app);
    const formData = await req.formData();

    const software = {
      icon: "",
      id: "",
      name: formData.get("serviceName"),
      reviews: 0,
      features: {
        pricing: true,
        reviews: {
          like_recommend: {
            review: "0",
          },
        },
      },
    };

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

    return NextResponse.json({ id: id }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
