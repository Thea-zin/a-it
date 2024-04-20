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
      "https://www.aixploria.com/en/category/" + request.category,
      request.category
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

const getSoftwareInfoPerPage = async (lnk, category) => {
  const data = await fetch(lnk, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  let grid = page.querySelectorAll("div.latest-posts div.post-item");

  let filtered = Array.from(grid).filter((item) => {
    return !item.className.includes("toolday1");
  });
  let softwares = filtered.map((cell) => {
    const icon = cell.querySelector("div.post-info div div img").src;
    const name = cell.querySelector("div.post-info div span a").textContent;
    let temp = cell.querySelector("div.post-info div span a").href;
    temp = temp.split("/");
    const nci = temp[temp.length - 2];
    const site = cell.querySelector("a[rel='nofollow noopener']").href;
    const id = nci;
    const star = 0;
    const views = 0;
    const reviews = 0;

    return { id, name, nci, icon, site, category, star, views, reviews };
  });

  return softwares;
};
