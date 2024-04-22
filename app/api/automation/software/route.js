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
  orderBy,
  documentId,
} from "firebase/firestore";
const jsdom = require("jsdom");

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    // console.log(request);

    const snapshot = await getDoc(doc(firestore, "softwares", request.id));
    if (snapshot.exists()) {
      let temp = snapshot.data();
      if (temp.reviews != null) {
        let [othercategories] = await getCategoriesLink();
        const indexes = Array.from({ length: 10 }, () =>
          Math.floor(Math.random() * othercategories.length)
        );
        othercategories = othercategories.filter((item, index) => {
          return item[1] != request.id && indexes.includes(index);
        });
        temp["othercategories"] = othercategories;
        return NextResponse.json({ data: temp, reviews: [] }, { status: 200 });
      }
    }

    let [othercategories, allcategories] = await getCategoriesLink();
    var data = await getSoftwareInfo(
      "https://www.aixploria.com/en/" + request.id,
      allcategories
    );
    data.nci = request.id;
    data.id = request.id;

    const indexes = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * othercategories.length)
    );
    othercategories = othercategories.filter((item, index) => {
      return item[1] != request.id && indexes.includes(index);
    });
    data.othercategories = othercategories;

    return NextResponse.json({ data: data, reviews: [] }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}

const getSoftwareInfo = async (lnk, allcategories) => {
  const data = await fetch(lnk, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const cell = page.querySelector("div.post-summary");

  const icon = cell.querySelector("div.longo-title img").src;
  const name = cell.querySelector("div.longo-title span").textContent;
  const site = cell.querySelector("div.visit-divy a").href;
  temp = page.querySelector("div.entry-categories a").href;
  temp = temp.split("/");
  const category = temp[temp.length - 2];
  const star = 0;
  const views = 0;
  const reviews = 0;

  console.log(allcategories);
  temp = page.querySelectorAll("div.entry-categories a");
  const fullcategories = Array.from(temp).map((item) => {
    return item.textContent;
  });

  return {
    name,
    icon,
    site,
    category,
    star,
    views,
    reviews,
    othercategories: [],
    fullcategories,
  };
};

const getCategoriesLink = async () => {
  const data = await fetch("https://www.aixploria.com/en/categories-ai/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const grid = page.querySelectorAll("div.categories-grid div.category-item");

  const quotes = Array.from(grid).map((cell) => {
    const text = cell.querySelector("a p").textContent;
    let temp = cell.querySelector("a").href;
    temp = temp.split("/");
    const nci = temp[temp.length - 2];
    return [text, nci];
  });
  const refs = Array.from(grid).map((cell) => {
    let temp = cell.querySelector("a").href;
    temp = temp.split("/");
    const nci = temp[temp.length - 2];
    return nci;
  });

  return [quotes, refs];
};
