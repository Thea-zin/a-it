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
  documentId,
} from "firebase/firestore";
const jsdom = require("jsdom");

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    const request = await req.json();
    const smax = 12;

    let category = request.category;

    let [softwares, ids] = await getSoftwareInfoPerPage(
      "https://www.aixploria.com/en/category/" +
        category +
        "?orderby=alphabetical",
      category
    );

    const q = query(
      collection(firestore, "softwares"),
      where(documentId(), "in", ids)
    );
    const snapshots = await getDocs(q);
    for (let doc of snapshots.docs) {
      const data = doc.data();
      softwares = softwares.map((item) => {
        if (item.id == doc.id && data.reviews > 0) {
          return data;
        }
        return item;
      });
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
  let ids = [];
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

    ids.push(id);

    return { id, name, nci, icon, site, category, star, views, reviews };
  });

  return [softwares, ids];
};
