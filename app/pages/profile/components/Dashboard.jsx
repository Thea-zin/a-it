"use client";

import { useEffect, useState } from "react";
import ModifySoftware from "./ModifySoftware";

export default function Dashboard() {
  const [softwares, setSoftwares] = useState({});
  const [total, setTotal] = useState(0);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    last: "",
    url: "/api/software/pagination",
    search: "",
  });
  const [query, setQuery] = useState("");
  const [showPopUp, setShowPopup] = useState(false);
  const [itemToDelete, setItemToDelete] = useState({
    name: "",
    nci: "",
    id: "",
  });
  const [deletingSoftware, setDeletingSoftware] = useState(false);
  const [showModifyPanel, setShowModifyPanel] = useState(false);
  const [softwareToModify, setSoftwareToModify] = useState(null);
  const pageStep = 8;

  useEffect(() => {
    getSoftwares(pageInfo);
  }, []);

  useEffect(() => {
    if (Object.keys(softwares).length == 0)
      getSoftwares({
        page: 1,
        last: query,
        url: "/api/software/search",
        search: query,
      });
  }, [softwares]);

  useEffect(() => {
    if (!deletingSoftware) setShowPopup(false);
  }, [deletingSoftware]);

  useEffect(() => {
    if (softwareToModify != null) {
      setShowModifyPanel(true);
    }
  }, [softwareToModify]);

  const getSoftwares = async (pageInfo) => {
    try {
      const temp = await fetch(pageInfo.url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pageInfo),
      });
      const res = await temp.json();
      let st = softwares;
      if (res.softwares.length > 0) st[pageInfo.page] = res.softwares;

      // console.log("RES", res.softwares);
      // console.log("ST", st);
      setTotal(res.total);
      setSoftwares(st);
      // console.log("SOFTWARES", softwares);
      setPageInfo({
        page: pageInfo.page,
        last: res.softwares[res.softwares.length - 1].name,
        url: pageInfo.url,
        search: pageInfo.search,
      });
    } catch (e) {}
  };

  const deleteSoftware = async () => {
    try {
      const temp = await fetch("/api/publishSoftware/deleteSoftware", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemToDelete),
      });

      if (temp.status == 200) {
        for (let i = 0; i < softwares[pageInfo.page].length; i++) {
          if (softwares[pageInfo.page][i].id == itemToDelete.id) {
            softwares[pageInfo.page].splice(i, 1);
          }
        }
        setDeletingSoftware(false);
      }
    } catch (e) {}
  };

  const onKeyDown = (bypass = false, event) => {
    if (bypass || event.key === "Enter") {
      setSoftwares({});
    }
  };

  return (
    <div className="p-5 relative">
      {showPopUp && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex place-content-center place-items-center bg-opacity-30 bg-black">
          <div className="w-fit p-10 bg-white border-[1px] border-slate-500 rounded-xl">
            <p className="text-xl font-bold">{`Deleting "${itemToDelete.name}"`}</p>
            {deletingSoftware ? (
              <div className="flex place-content-center">
                <div>deleting</div>
              </div>
            ) : (
              <div className="flex justify-between mt-7">
                <button
                  className="hover:bg-blue-700 p-3 rounded-full hover:text-white text-blue-700 font-bold border-2 border-blue-700"
                  onClick={() => {
                    deleteSoftware();
                    setDeletingSoftware(true);
                  }}
                >
                  Confirm
                </button>
                <button
                  className="hover:bg-red p-3 rounded-full hover:text-white text-red font-bold border-2 border-red"
                  onClick={() => {
                    setShowPopup(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="flex mb-10">
        <div className="w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path
              fill="currentColor"
              d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
            />
          </svg>
        </div>
        <p className="font-bold text-2xl ml-2">Dashboard</p>
      </div>
      {showModifyPanel ? (
        <ModifySoftware
          sn={softwareToModify.name}
          lg={softwareToModify.icon}
          cc={softwareToModify.categories}
          id={softwareToModify.id}
          setShowModifyPanel={setShowModifyPanel}
        />
      ) : (
        <div className="px-16 py-7 bg-white rounded-2xl">
          <div className="flex place-content-between justify-items-center">
            <div className="text-xl font-bold flex items-center">Softwares</div>
            <div className="">
              <div className="text-black px-3 py-1 bg-white border-[#D9D9D9] border-[1px] rounded-full flex">
                <button
                  className="pr-1 pt-1"
                  onClick={() => {
                    onKeyDown(true);
                  }}
                >
                  <iconify-icon icon="bi:search"></iconify-icon>
                </button>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search"
                  className="outline-none bg-transparent w-full ml-2"
                  onKeyDown={(e) => {
                    onKeyDown(false, e);
                  }}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="min-h-[32rem]">
              <table className="table-auto w-full border-separate border-spacing-0 mt-8">
                <thead>
                  <tr>
                    <th className="py-3">Name</th>
                    <th>Publish Date</th>
                    <th>Last Update</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(softwares).length > 0 &&
                    softwares[pageInfo.page].map((item, index) => {
                      return (
                        <tr className="text-center " key={index}>
                          <td className="border-slate-300 border-y-[1px] border-l-[1px] rounded-l-xl py-4">
                            {item.name}
                          </td>
                          <td className="border-slate-300 border-y-[1px]">
                            {item.publishDate}
                          </td>
                          <td className="border-slate-300 border-y-[1px]">
                            {item.lastupdate}
                          </td>
                          <td className="border-slate-300 border-y-[1px] border-r-[1px] rounded-r-xl">
                            <div className="flex place-content-center">
                              <button
                                className="group p-2 border-2 border-white hover:bg-cyan active:bg-white rounded-full"
                                onClick={() => {
                                  setSoftwareToModify(item);
                                }}
                              >
                                <div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 256 256"
                                    className="fill-cyan group-hover:fill-white group-active:fill-cyan"
                                  >
                                    <g>
                                      <path
                                        d="M221.66 90.34L192 120l-56-56l29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.34"
                                        opacity="0.2"
                                      />
                                      <path d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l83.67-83.66l3.48 13.9l-36.8 36.79a8 8 0 0 0 11.31 11.32l40-40a8 8 0 0 0 2.11-7.6l-6.9-27.61L227.32 96a16 16 0 0 0 0-22.63M48 208v-28.69L76.69 208Zm48-3.31L51.31 160L136 75.31L180.69 120Zm96-96L147.32 64l24-24L216 84.69Z" />
                                    </g>
                                  </svg>
                                </div>
                              </button>
                              <button
                                className="group ml-6 p-2 border-2 border-white hover:bg-red active:bg-white rounded-full"
                                onClick={() => {
                                  setItemToDelete({
                                    name: item.name,
                                    nci: item.nci,
                                    id: item.id,
                                  });
                                  setShowPopup(true);
                                }}
                              >
                                <div className="">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1.5em"
                                    height="1.5em"
                                    viewBox="0 0 20 20"
                                    className="fill-red group-hover:fill-white group-active:fill-red"
                                  >
                                    <path d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                  </svg>
                                </div>
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
            <div className="flex place-content-between mt-6">
              {Object.keys(softwares).length > 0 ? (
                <p>
                  {(pageInfo.page - 1) * pageStep + 1} -{" "}
                  {(pageInfo.page - 1) * pageStep +
                    softwares[pageInfo.page].length}{" "}
                  of {total} items
                </p>
              ) : (
                <p>0 - 0 of 0 items</p>
              )}
              <div className="flex gap-4">
                <button
                  className="border-slate-300 border-[1px] rounded-lg py-2 px-4"
                  onClick={() => {
                    if (pageInfo.page <= 1) return;
                    setPageInfo({
                      page: pageInfo.page - 1,
                      last: softwares[pageInfo.page - 1][
                        softwares[pageInfo.page - 1].length - 1
                      ].name,
                      url: pageInfo.url,
                      search: query,
                    });
                  }}
                >
                  Previous
                </button>
                <button
                  className="border-slate-300 border-[1px] rounded-lg py-2 px-4"
                  onClick={() => {
                    // console.log(softwares);
                    if (Object.keys(softwares).length <= pageInfo.page) {
                      getSoftwares({
                        page: pageInfo.page + 1,
                        last: pageInfo.last,
                        url: pageInfo.url,
                        search: query,
                      });
                    } else {
                      setPageInfo({
                        page: pageInfo.page + 1,
                        last: softwares[pageInfo.page + 1][
                          softwares[pageInfo.page + 1].length - 1
                        ].name,
                        url: pageInfo.url,
                        search: query,
                      });
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
