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
const jsdom = require("jsdom");

const auth = getAuth(firebase_app);
const firestore = getFirestore(firebase_app);

const getCategoriesLink = async () => {
  const data = await fetch("https://www.futurepedia.io/ai-tools", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const quoteList = document.querySelectorAll("a");

  const quotes = Array.from(quoteList).map((link) => {
    const text = link.innerText;
    const href = link.href;
    if (text.includes("Show all")) {
      return href;
    }
  });
  const categories = quotes.filter((text) => {
    return text;
  });
  return categories;
};

const getSubCategoriesLink = async (lnk) => {
  const data = await fetch(lnk, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const quoteList = document.querySelectorAll("h2.capitalize");

  const quotes = Array.from(quoteList).map((a) => {
    const href = a.querySelector("a").href;
    return href;
  });

  return quotes;
};

const getSoftwareInfo = async (lnk) => {
  const data = await fetch(lnk, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const quoteList = document.querySelectorAll("a div img");

  const quotes = Array.from(quoteList).map((a) => {
    const src = a.src;
    return src;
  });

  return quotes;
};

const getSoftwareInfoPerPage = async (lnk, ctg = "personal-assistant") => {
  const data = await fetch(lnk, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const grid = page.querySelectorAll(
    "div.grid.w-full.grid-cols-1.grid-rows-3.gap-3 div.flex.flex-col.bg-card.text-card-foreground"
  );
  console.log(grid.length);
  let softwares = Array.from(grid).map((cell) => {
    const img = cell.querySelector("a div img").src;
    const name = cell.querySelector(
      "a p.m-0.line-clamp-2.overflow-hidden"
    ).textContent;
    const site = cell.querySelector("div.px-6.mt-auto.flex a").href;
    const category = ctg;

    return { name, img, site, category };
  });

  return softwares;
};

export async function POST(req) {
  // const storage = getStorage(firebase_app);

  try {
    // const categoriesLink = await getCategoriesLink();
    // const subcat = await getSubCategoriesLink(
    //   "https://www.futurepedia.io/ai-tools/productivity"
    // );
    // const srcs = await getSoftwareInfo(
    //   "https://www.futurepedia.io/ai-tools/personal-assistant"
    // );
    let page = 1;
    while (true) {
      const softwares = await getSoftwareInfoPerPage(
        `https://www.futurepedia.io/ai-tools/personal-assistant?page=${page}`
      );
      if (softwares.length == 0) {
        break;
      }
      page += 1;
      console.log(`##################### page ${page} ###########################`)
      console.log(softwares);
    }

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
