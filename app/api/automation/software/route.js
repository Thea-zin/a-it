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
} from "firebase/firestore";
const jsdom = require("jsdom");

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    console.log(request);

    var data = await getSoftwareInfo(
      "https://www.futurepedia.io/tool/" + request.id
    );
    data.nci = request.id;
    data.id = request.id;

    return NextResponse.json({ data: data, reviews: [] }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "something wrong on the server side!" },
      { status: 500 }
    );
  }
}

const getSoftwareInfo = async (lnk) => {
  console.log(lnk);
  const data = await fetch(lnk, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const icon =
    "https://www.futurepedia.io" +
    page.querySelector("div.flex.gap-4 div img").src;
  const name = page.querySelector(
    "h1.mb-0.font-semibold.text-darkBlue"
  ).textContent;
  const site = page.querySelector("div.mt-4.flex.flex-wrap.gap-4 a").href;
  const star = 0;
  const views = 0;
  const reviews = 0;
  let tcat = page.querySelector("p.mt-2.text-ice-700 a").href;
  tcat = tcat.split("/");
  const category = tcat[tcat.length - 1].toLowerCase();

  const tempCategories = page.querySelectorAll(
    "div.flex.flex-wrap.gap-x-2.gap-y-1 a"
  );
  let othercategories = [];
  Array.from(tempCategories).map((item) => {
    item = item.href;
    let tempitem = item.split("/");
    item = tempitem[tempitem.length - 1];
    if (
      othercategories.every((cat) => {
        return cat != item;
      })
    ) {
      othercategories.push(item);
    }
  });

  return { name, icon, site, star, views, reviews, category, othercategories };
};
