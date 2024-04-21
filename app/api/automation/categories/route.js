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

    let categories = [];
    let subcategories = [];

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
  const data = await fetch("https://www.aixploria.com/en/categories-ai/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const grid = page.querySelectorAll("div.categories-grid div.category-item");
  // console.log(grid.length);

  const quotes = Array.from(grid).map((cell) => {
    const text = cell.querySelector("a p").textContent;
    let temp = cell.querySelector("a").href;
    temp = temp.split("/");
    const nci = temp[temp.length - 2];
    return [text, nci];
  });
  // const categories = quotes.filter((text) => {
  //   return text;
  // });
  // const scat = categories.map((cat) => {
  //   return cat.split("/")[1];
  // });

  return quotes;
};
