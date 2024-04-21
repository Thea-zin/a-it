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
    const smax = request.smax;

    let q = null;
    try {
      q = query(
        collection(firestore, "softwares"),
        orderBy("reviews", "desc"),
        limit(smax)
      );
    } catch (e) {
      console.log(e);
      return NextResponse.json({ softwares: [], total: 0 }, { status: 202 });
    }

    const documentSnapshots = await getDocs(q);
    let softwares = [];
    for (let doc of documentSnapshots.docs) {
      let temp = doc.data();
      temp.id = doc.id;
      softwares.push(temp);
    }

    // console.log(softwares);

    if (softwares.length < smax) {
      let temp = await getSoftwareInfoPerPage(
        "https://www.aixploria.com/en/category/popular-ai-tools/"
      );
      let i = 0;

      while (softwares.length < smax && i < temp.length) {
        if (
          softwares.every((item) => {
            return item.nci != temp[i].nci;
          })
        ) {
          softwares.push(temp[i]);
        }
        i++;
      }
    }

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

const getSoftwareInfoPerPage = async (lnk) => {
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
    temp = cell.querySelector("span.post-category a").href;
    temp = temp.split("/");
    const category = temp[temp.length - 2];
    const id = nci;
    const star = 0;
    const views = 0;
    const reviews = 0;

    return { id, name, nci, icon, site, category, star, views, reviews };
  });

  return softwares;
};
