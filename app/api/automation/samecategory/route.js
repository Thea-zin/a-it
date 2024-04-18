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
    const smax = 4;
    console.log(request);
    let softwares = await getSoftwareInfoPerPage(
      "https://www.futurepedia.io/ai-tools/" + request.category
    );

    let data = [];
    let i = 0;
    while (data.length < smax && i < softwares.length) {
      if (
        data.every((item) => {
          return item.nci != softwares[i].nci;
        }) &&
        softwares[i].nci != request.nci
      ) {
        softwares[i]["category"] = request.category;
        data.push(softwares[i]);
      }
      i++;
    }

    return NextResponse.json(
      { softwares: data, total: softwares.length },
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

const getSoftwareInfoPerPage = async (lnk) => {
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
    const icon =
      "https://www.futurepedia.io" + cell.querySelector("a div img").src;
    const name = cell.querySelector(
      "a p.m-0.line-clamp-2.overflow-hidden"
    ).textContent;
    let temp = cell.querySelector("div div a").href;
    temp = temp.split("/");
    const nci = temp[temp.length - 1];
    const site = cell.querySelector("div.px-6.mt-auto.flex a").href;
    const id = nci;
    const star = 0;
    const views = 0;
    const reviews = 0;

    return { id, name, nci, icon, site, star, views, reviews };
  });

  return softwares;
};
