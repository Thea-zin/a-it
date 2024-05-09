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
  setDoc,
} from "firebase/firestore";
import {
  getIds,
  updateIds,
  getMore,
  setMore,
  getPagenumber,
  setPagenumber,
  getStatus,
  setStatus,
  getLastRefresh,
  setLastRefresh,
  isReadyForRefresh,
  getLastAccess,
  setLastAccess,
} from "../../AutoData";
const jsdom = require("jsdom");

export async function POST(req) {
  try {
    const firestore = getFirestore(firebase_app);

    if (Date.now() - getLastAccess() < 10000) {
      return NextResponse.json({ cont: false }, { status: 200 });
    }

    // console.log(Date.now() - getLastAccess(), getLastAccess());
    // console.log(
    //   getMore(),
    //   getPagenumber(),
    //   getStatus(),
    //   getLastRefresh(),
    //   getLastAccess()
    // );

    while (true) {
      //   console.log(getIds());
      const pgn = getPagenumber();
      if (getStatus() == 0) {
        setLastAccess(Date.now());
        let ids = await getSoftwareInfoPerPage(
          "https://www.aixploria.com/en/category/last-ai-en/page/" + pgn,
          "last-ai-en"
        );

        for (let id of ids) {
          const snapshot = await getDoc(doc(firestore, "softwares", id));
          if (!snapshot.exists()) {
            if (!getIds().includes(id)) updateIds(id, true);
          } else {
            setStatus(1);
          }
        }

        setPagenumber(pgn + 1);
        setLastRefresh(Date.now());
      } else if (getStatus() == 1) {
        if (getIds().length == 0) {
          setStatus(2);
          setPagenumber(1);
          continue;
        }
        while (getIds().length > 0) {
          let id = getIds()[getIds().length - 1];
          setLastAccess(Date.now());

          let software = await getSoftwareInfo(
            "https://www.aixploria.com/en/" + id,
            id
          );
          updateIds(id, false);
          await setDoc(doc(firestore, "softwares", id), software);
          //   console.log("loaded in firebase: ", id);
        }
      } else {
        if (isReadyForRefresh()) {
          setStatus(0);
          setLastAccess(Date.now());
        } else {
          return NextResponse.json({ cont: false }, { status: 200 });
        }
      }
    }

    return NextResponse.json({ cont: true }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "!" }, { status: 500 });
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

  return ids;
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
