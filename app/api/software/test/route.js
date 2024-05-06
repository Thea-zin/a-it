import { NextResponse } from "next/server";
import firebase_app from "../../firebase";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
  limit,
  startAfter,
  getCountFromServer,
  setDoc,
  addDoc,
  connectFirestoreEmulator,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  verifyPasswordResetCode,
  confirmPasswordReset,
  checkActionCode,
  applyActionCode,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile,
  connectAuthEmulator,
} from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import * as fs from "fs";
const sample = require("test.json");
const jsdom = require("jsdom");

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);
    // let dt = [];
    // const categories = await getCategoriesLink();
    // for (let i = 0; i < categories.length; i++) {
    //   let pageNumber = 1;
    //   while (true) {
    //     let softwares = await getSoftwareInfoPerPage(
    //       "https://www.aixploria.com/en/category/" +
    //         categories[i][1] +
    //         "/page/" +
    //         pageNumber,
    //       categories[i][1]
    //     );

    //     if (softwares.length == 0) {
    //       break;
    //     }
    //     dt = dt.concat(softwares);
    //     console.log("while", categories[i][1], pageNumber);
    //     pageNumber += 1;
    //   }
    // }

    // let data = [...new Set(dt)];

    // fs.writeFile("test.json", JSON.stringify({ ncis: data }), function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    // });

    for (let i = 0; i < sample.ncis.length; i++) {
      const snapshot = await getDoc(
        doc(firestore, "softwares", sample.ncis[i])
      );
      if (snapshot.exists()) {
        continue;
      }

      let software = await getSoftwareInfo(
        "https://www.aixploria.com/en/" + sample.ncis[i],
        sample.ncis[i]
      );

      let [othercategories] = await getOtherCategoriesLink();
      const indexes = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * othercategories.length)
      );
      othercategories = othercategories.filter((item, index) => {
        return item[1] != sample.ncis[i] && indexes.includes(index);
      });
      othercategories = othercategories.map((item) => {
        return item[0] + "!បំបែក!" + item[1];
      });
      software["othercategories"] = othercategories;

      const result = await setDoc(
        doc(firestore, "softwares", sample.ncis[i]),
        software
      );
      console.log(i + 1, sample.ncis[i]);
    }

    return NextResponse.json({ data: sample.ncis.length }, { status: 200 });
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

  const quotes = Array.from(grid).map((cell) => {
    const text = cell.querySelector("a p").textContent;
    let temp = cell.querySelector("a").href;
    temp = temp.split("/");
    const nci = temp[temp.length - 2];
    return [text, nci];
  });

  return quotes;
};

const getSoftwareInfoPerPage = async (lnk, category, restart = 1) => {
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

    return nci;
  });

  if (softwares.length == 0 && restart < 3) {
    softwares = await getSoftwareInfoPerPage(lnk, category, restart + 1);
  }

  return softwares;
};

const getSoftwareInfo = async (lnk, id) => {
  const data = await fetch(lnk, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  let temp = await data.text();
  const dom = new jsdom.JSDOM(temp);
  const page = dom.window.document;

  const cell = page.querySelector("div.post-summary");

  const icon = cell.querySelector("div.longo-title img").src;
  const name = cell.querySelector("div.longo-title span").textContent.trim();
  const nci = name.toLowerCase();
  temp = page.querySelector("div.entry-categories a").href;
  temp = temp.split("/");
  const category = temp[temp.length - 2].trim();
  const aie_image = page.querySelector("div.post-thumb.thumbnail img").src;
  const aie_text = page.querySelector("span.desc-text").textContent.trim();
  const star = 0;
  const views = 0;
  const reviews = 0;

  temp = page.querySelectorAll("div.entry-categories a");
  const fullcategories = Array.from(temp).map((item) => {
    let tpc = item.href;
    tpc = tpc.split("/");
    const link = tpc[tpc.length - 2].trim();
    const text = item.textContent.trim();
    return text + "!បំបែក!" + link;
  });

  const fullcategorieslink = Array.from(temp).map((item) => {
    let tpc = item.href;
    tpc = tpc.split("/");
    return tpc[tpc.length - 2].trim();
  });

  let site = "";
  try {
    site = cell.querySelector("div.visit-divy a").href;
  } catch (e) {}

  return {
    id,
    name,
    nci,
    icon,
    site,
    category,
    star,
    views,
    reviews,
    othercategories: [],
    fullcategories,
    fullcategorieslink,
    aie_image,
    aie_text,
  };
};

const getOtherCategoriesLink = async () => {
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
