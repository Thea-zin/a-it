import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
  limit,
  startAfter,
  getCountFromServer,
  setDoc,
  addDoc,
  connectFirestoreEmulator,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  verifyPasswordResetCode,
  confirmPasswordReset,
  checkActionCode,
  applyActionCode,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  connectAuthEmulator,
} from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import puppeteer from "puppeteer";

const auth = getAuth(firebase_app);
const firestore = getFirestore(firebase_app);

// export async function POST(req) {
//   try {
//     const request = await req.json();
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         request.email,
//         request.password
//       );
//       const user = userCredential.user;
//       const userProfile = {
//         displayName: `${request.name}!បំបែក!${request.occupation}`,
//       };
//       const temp = await addDoc(collection(firestore, "verifyemail"), {
//         email: request.email,
//         uid: user.uid,
//       });
//       console.log("firestore data id", temp.id);

//       await sendEmailVerification(user);
//       await updateProfile(user, userProfile);
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//       return NextResponse.json({ data: "" }, { status: 405 });
//     }

//     return NextResponse.json({ data: "" }, { status: 200 });
//   } catch (e) {
//     console.log(e);
//     return NextResponse.json(
//       { message: "something wrong on the server side!" },
//       { status: 500 }
//     );
//   }
// }

const getCategoriesLink = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto("https://www.futurepedia.io/ai-tools", {
    waitUntil: "domcontentloaded",
  });

  const quotes = await page.evaluate(() => {
    const quoteList = document.querySelectorAll("a");

    return Array.from(quoteList).map((link) => {
      const text = link.innerText;
      const href = link.href;
      if (text.includes("Show all")) {
        return href;
      }
    });
  });
  const categories = quotes.filter((text) => {
    return text;
  });
  await browser.close();

  return categories;
};

const getSubCategoriesLink = async (lnk) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto(lnk, {
    waitUntil: "domcontentloaded",
  });

  const quotes = await page.evaluate(() => {
    const quoteList = document.querySelectorAll("h2.capitalize");

    return Array.from(quoteList).map((a) => {
      const href = a.querySelector("a").href;
      return href;
    });
  });
  await browser.close();

  return quotes;
};

const getSoftwareInfo = async (lnk) => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto(lnk, {
    waitUntil: "domcontentloaded",
  });

  const quotes = await page.evaluate(() => {
    const quoteList = document.querySelectorAll("a div img");

    return Array.from(quoteList).map((a) => {
      const src = a.src;
      return src;
    });
  });
  await browser.close();

  return quotes;
};

export async function POST(req) {
  // const storage = getStorage(firebase_app);

  try {
    // const categoriesLink = await getCategoriesLink();
    // const subcat = await getSubCategoriesLink(
    //   "https://www.futurepedia.io/ai-tools/productivity"
    // );
    const srcs = await getSoftwareInfo(
      "https://www.futurepedia.io/ai-tools/personal-assistant"
    );
    console.log(srcs);

    // const image = await fetch(
    //   "https://www.futurepedia.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fb80bca90c5a3a372ec071cbbb097cf974986336f-1024x1024.jpg%3Ffp-x%3D0.5%26fp-y%3D0.5%26w%3D120%26h%3D120%26sharp%3D100%26q%3D100%26auto%3Dformat%26dpr%3D3&w=128&q=75"
    // );
    // const imageBlob = await image.blob();
    // const imgref = ref(storage, `icons/${"testfromweb"}`);
    // const tlogo = await uploadBytes(imgref, imageBlob);
    return NextResponse.json({ data: "" }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}
