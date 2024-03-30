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
    const formData = await req.formData();
    const d = new Date();
    let software;
    const id = formData.get("id");
    let categories = formData.get("categories").split(",");
    categories.sort();

    if (formData.get("isWithNewLogo") == "true") {
      software = {
        icon: "",
        name: formData.get("serviceName"),
        nci: formData.get("serviceName").toLowerCase(),
        categories: categories,
        lastupdate: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,
      };

      // upload logo to storage
      const imgref = ref(storage, `icons/${id}`);
      const tempDel = deleteObject(imgref);
      const tlogo = await uploadBytes(imgref, formData.get("logoUpload"));
      const logoUrl = await getDownloadURL(tlogo.ref);
      software.icon = logoUrl;
    } else {
      software = {
        name: formData.get("serviceName"),
        nci: formData.get("serviceName").toLowerCase(),
        categories: categories,
        lastupdate: `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`,
      };
    }

    // update the software info
    const temp = await getDoc(doc(firestore, "softwares", `${id}`));
    const tempUpdate = await updateDoc(temp.ref, software);

    // update tracker in the firestore
    const nci = formData.get("serviceName").toLowerCase();
    let temptracker = await getDoc(doc(firestore, "tracker", "softwares"));
    let tracker = temptracker.data();
    tracker.names[tracker.names.indexOf(temp.data().nci)] = nci;
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
