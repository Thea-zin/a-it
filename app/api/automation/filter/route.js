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
  limit,
  startAfter,
  endAt,
  startAt,
  getCountFromServer,
} from "firebase/firestore";
const jsdom = require("jsdom");

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();

    const subcat = await getSubCategoriesLink(
      "https://www.futurepedia.io/ai-tools/" + request.category
    );
    console.log(subcat);
    let softwares = await getSoftwareInfoPerPage(
      "https://www.futurepedia.io/ai-tools/",
      subcat[0],
      `page=${request.pageNumber}`
    );

    return NextResponse.json(
      { softwares: softwares, total: softwares.length },
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

const getSoftwareInfoPerPage = async (
  lnk,
  subcat = "personal-assistant",
  query = ""
) => {
  const data = await fetch(lnk + subcat + "?" + query, {
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
    const icon =
      "https://www.futurepedia.io" + cell.querySelector("a div img").src;
    const name = cell.querySelector(
      "a p.m-0.line-clamp-2.overflow-hidden"
    ).textContent;
    const nci = name.toLocaleLowerCase();
    const site = cell.querySelector("div.px-6.mt-auto.flex a").href;
    const categories = [subcat];
    const id = nci;
    const star_text = 0;
    const views = 0;
    const reviews = 0;

    return { id, name, nci, icon, site, categories, star_text, views, reviews };
  });

  return softwares;
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
