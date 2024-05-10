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
    const smax = 4;
    // console.log(request);
    // let softwares = await getSoftwareInfoPerPage(
    //   "https://www.aixploria.com/en/category/" + request.category,
    //   request.category
    // );

    // let data = [];
    // let ids = [];
    // let i = 0;
    // while (data.length < smax && i < softwares.length) {
    //   if (
    //     data.every((item) => {
    //       return item.nci != softwares[i].nci;
    //     }) &&
    //     softwares[i].nci != request.nci
    //   ) {
    //     softwares[i]["category"] = request.category;
    //     data.push(softwares[i]);
    //     ids.push(softwares[i].id);
    //   }
    //   i++;
    // }

    let data = [];
    const q = query(
      collection(firestore, "softwares"),
      where("fullcategorieslink", "array-contains", request.category),
      orderBy("star", "desc"),
      limit(12)
    );
    const snapshots = await getDocs(q);
    for (let doc of snapshots.docs) {
      const tempData = doc.data();
      if (doc.id != request.id) {
        data.push(tempData);
      }
      if (data.length >= smax) {
        break;
      }
    }

    return NextResponse.json(
      { softwares: data, total: data.length },
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
