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

    console.log(request, request.search);
    let q = null;
    if (request.pageNumber > 1) {
      q = query(
        collection(firestore, "softwares"),
        orderBy("nci"),
        startAfter(request.startAfter),
        endAt(request.search + "~"),
        limit(12)
      );
    } else {
      q = query(
        collection(firestore, "softwares"),
        orderBy("nci"),
        startAt(request.search),
        endAt(request.search + "~"),
        limit(12)
      );
    }

    const snapshot = await getDocs(q);
    let softwares = [];
    for (let doc of snapshot.docs) {
      let temp = doc.data();
      temp.id = doc.id;
      softwares.push(temp);
    }

    // let softwares = await getSoftwareInfoPerPage(
    //   "https://www.aixploria.com/en/page/" +
    //     request.pageNumber +
    //     "/?s=" +
    //     request.search,
    //   ""
    // );

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
