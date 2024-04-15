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
} from "firebase/firestore";
const jsdom = require("jsdom");

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);

    const docRef = doc(firestore, "categories", "categories");
    const docSnap = await getDoc(docRef);
    let categories = [];
    let subcategories = [];
    try {
      categories = docSnap.data()["categories"];
    } catch (e) {
      try {
        categories = await getCategoriesLink();
        // for (let i = 0; i < categories.length; i++) {
        //   const temp = await getSubCategoriesLink(
        //     "https://www.futurepedia.io/ai-tools/" + categories[i]
        //   );
        //   subcategories.push(temp);
        // }
      } catch (e) {
        console.log(e);
        categories = [];
        subcategories = [];
      }
    }

    return NextResponse.json({ categories: categories }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}

const getCategoriesLink = async () => {
  const data = await fetch("https://www.futurepedia.io/ai-tools", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const quoteList = page.querySelectorAll("a");

  const quotes = Array.from(quoteList).map((link) => {
    const text = link.text;
    const href = link.href;
    if (text.includes("Show all")) {
      return href;
    }
  });
  const categories = quotes.filter((text) => {
    return text;
  });
  const scat = categories.map((cat) => {
    return cat.split("/")[1];
  });

  return scat;
};

const getSubCategoriesLink = async (lnk) => {
  const data = await fetch(lnk, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const quoteList = page.querySelectorAll("h2.capitalize");

  const quotes = Array.from(quoteList).map((a) => {
    const href = a.querySelector("a").href;
    return href;
  });

  return quotes;
};
