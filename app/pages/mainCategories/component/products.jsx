"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Products({
  isSearching = false,
  searchSoftware = [],
  setIsSearching = () => {},
  doneSearching = false,
  softwareToCompare = { id: "", name: "", icon: "" },
  setSoftwareToCompare = () => {},
  initialFilter = "",
}) {
  const [allowComp, setAllowComp] = useState(false);
  const [tids, setTids] = useState([]);
  const [names, setNames] = useState([]);
  const [icons, setIcons] = useState([]);
  const [softwares, setSoftwares] = useState([]);
  const [startAfter, setStartAfter] = useState("");
  const [startAt, setStartAt] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [filterPageNumber, setFilterPageNumber] = useState(1);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [mainFilter, setMainFilter] = useState([""]);
  const [tempFilter, setTempFilter] = useState([]);
  const [showNextFiltered, setShowNextFiltered] = useState(false);
  const [lastFiltered, setLastFiltered] = useState("");
  const [listLastFiltered, setListLastFiltered] = useState([]);
  const [stopNextFilter, setStopNextFilter] = useState(false);
  const pageStep = 12;
  const filterStep = 2;

  function addIds(id, name, add, icon = "") {
    let tempid = tids;
    let tempnames = names;
    let tempicon = icons;
    if (add) {
      if (tempid.length >= 3) return;

      tempid.push(id);
      tempnames.push(name);
      tempicon.push([icon, name, id]);
    } else {
      const idindex = tempid.indexOf(id);
      if (idindex >= 0) {
        tempid.splice(idindex, 1);
        tempnames.splice(idindex, 1);
        tempicon.splice(idindex, 1);
      }
    }

    localStorage.setItem("ait_soft_ids", tempid.join());
    localStorage.setItem("ait_soft_names", tempnames.join());

    if (tempid.length == 0 || tempnames.length == 0) {
      setAllowComp(false);
    } else {
      setAllowComp(true);
    }

    setIcons([...tempicon]);
    setTids([...tempid]);
    setNames([...tempnames]);
  }

  useEffect(() => {
    localStorage.setItem("ait_soft_ids", "");
    localStorage.setItem("ait_soft_names", "");

    if (initialFilter == "" && softwareToCompare.name == "") {
      getSoftwares();
    }
    getAllCategories();
  }, []);

  useEffect(() => {
    console.log(softwares);
  }, [softwares]);

  useEffect(() => {
    if (softwareToCompare.name != "") {
      setSoftwareToCompare({ id: "", name: "", icon: "" });
      addIds(
        softwareToCompare.id,
        softwareToCompare.name,
        true,
        softwareToCompare.icon
      );
    }
  }, [softwareToCompare]);

  useEffect(() => {
    if (initialFilter != "" && initialFilter != null && categories.length > 0) {
      console.log(initialFilter);
      document.getElementById(`${initialFilter}`).checked = true;
      getFilteredSoftwares(initialFilter);
    }
  }, [categories]);

  const getSoftwares = async () => {
    const temp = await fetch("/api/software/products", {
      method: "POST",
      body: JSON.stringify({ isLoadMore: false, pageNumber: 1 }),
    });
    const res = await temp.json();

    setStartAfter(res.softwares[res.softwares.length - 1].nci);
    setSoftwares(res.softwares);
    setTotal(res.total);
  };

  const getAllCategories = async () => {
    const temp = await fetch("/api/publishSoftware/categories", {
      method: "POST",
      body: JSON.stringify({}),
    });
    const res = await temp.json();

    setCategories([...res.categories.categories]);
  };

  const goToPageNumber = async (pgn) => {
    try {
      const temp = await fetch("/api/software/products", {
        method: "POST",
        body: JSON.stringify({ isLoadMore: false, pageNumber: pgn }),
      });
      const res = await temp.json();

      if (res.softwares.length != 0) {
        setPageNumber(pgn);
        setSoftwares(res.softwares);
      }
    } catch (e) {}
  };

  const getPreviousPage = async () => {
    try {
      if (pageNumber <= 1) {
        return;
      }
      const temp = await fetch("/api/software/products", {
        method: "POST",
        body: JSON.stringify({ isLoadMore: false, pageNumber: pageNumber - 1 }),
      });
      const res = await temp.json();

      setPageNumber(pageNumber - 1);
      setSoftwares(res.softwares);
    } catch (e) {}
  };

  const getFilteredSoftwares = async (initFilter = "") => {
    setShowNextFiltered(true);
    setMainFilter([...tempFilter]);
    setStopNextFilter(false);

    let body = {};
    if (initFilter != "") {
      setTempFilter([initialFilter]);
      setMainFilter([initialFilter]);
      body = {
        categories: [initFilter],
        last: "",
      };
    } else {
      body = {
        categories: tempFilter,
        last: "",
      };
    }

    let ftl = [];
    let last = "";
    let stop = false;
    let isMore = true;
    while (!stop) {
      const temp = await fetch("/api/software/filtered", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const res = await temp.json();
      // console.log(res.softwares, res.isMore);
      if (!res.isMore) {
        isMore = res.isMore;
        break;
      }
      last = res.last;
      for (let soft of res.softwares) {
        ftl.push(soft);
        if (ftl.length % filterStep == 0) {
          last = soft.nci;
          stop = true;
          break;
        }
      }
      if (res.softwares.length > 0) {
        setSoftwares([...ftl]);
      }

      body.last = last;
    }

    if (ftl.length % filterStep != 0 || !isMore) {
      setStopNextFilter(true);
    }

    setListLastFiltered([""]);

    setLastFiltered(last);
    setFilterPageNumber(1);
    setSoftwares([...ftl]);
    setIsSearching(false);
  };

  const getNextFilteredSoftwares = async (isNext = false, page = 0) => {
    // console.log(page - 1, listLastFiltered[page - 1], listLastFiltered);
    let body = {};
    const beforeLast = lastFiltered;
    console.log("List Last filter", listLastFiltered);
    if (isNext) {
      body = {
        categories: mainFilter,
        last: lastFiltered,
      };
    } else {
      body = {
        categories: mainFilter,
        last: listLastFiltered[page - 1],
      };
    }
    let ftl = [];
    let last = "";
    let stop = false;
    let isMore = true;
    while (!stop) {
      const temp = await fetch("/api/software/filtered", {
        method: "POST",
        body: JSON.stringify(body),
      });
      const res = await temp.json();
      // console.log(res.softwares, res.isMore);
      if (!res.isMore) {
        isMore = res.isMore;
        break;
      }
      last = res.last;
      for (let soft of res.softwares) {
        ftl.push(soft);
        if (ftl.length % filterStep == 0) {
          last = soft.nci;
          stop = true;
          break;
        }
      }
      if (res.softwares.length > 0) {
        setSoftwares([...ftl]);
      }

      body.last = last;
    }
    if (ftl.length % filterStep != 0 || !isMore) {
      setStopNextFilter(true);
    }

    // console.log("Before Last", beforeLast);
    if (page > listLastFiltered.length) {
      let temp = listLastFiltered;
      temp.push(beforeLast);
      setListLastFiltered([...temp]);
      // console.log("Before Last if", beforeLast);
    }

    setLastFiltered(last);
    setSoftwares([...ftl]);
  };

  const onViewAll = () => {
    getSoftwares();
    setShowNextFiltered(false);
    setIsSearching(false);
    let filters = document.getElementById("filter");
    let items = filters.getElementsByTagName("input");
    for (let item of items) {
      item.checked = false;
    }
    setTempFilter([]);
  };

  return (
    <div className="itemes bg-[#F7F8FA]">
      <div className="md:flex p-8 ml-5">
        <div className="min-w-[260px]">
          <div className="filter  bg-white rounded-xl p-8 " id="filter">
            <div className="flex justify-between ">
              <div className="font-bold">Filters </div>
              <div className="font-medium text-xs items-center text-[#4A4A4A] border-b-2- ">
                <button
                  onClick={() => {
                    onViewAll();
                  }}
                >
                  View All
                </button>
              </div>
            </div>

            <div className="software mt-5">
              <div className="title mt-5 font-semibold">Software Rating </div>
              <div className="checkbox mt-5">
                {[
                  ["5", "rate5"],
                  ["4", "rate4"],
                  ["3", "rate3"],
                  ["2", "rate2"],
                  ["1", "rate1"],
                  ["Not Enough Rating", "rate0"],
                ].map((item, index) => {
                  return (
                    <div className="flex items-center mb-2" key={index}>
                      <input
                        id={item[1]}
                        type="checkbox"
                        value=""
                        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={item[1]}
                        className="cursor-pointer ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 bg-[#2F455C] flex items-center p-1 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 "
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="text-white font-bold mx-1">
                          {item[0]}
                        </div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="busineses">
              <div className="title mt-5 font-semibold">Categories</div>
              <div className="checkbox mt-5">
                {categories.map((item, index) => {
                  return (
                    <div className="flex items-center mb-2" key={index}>
                      <input
                        id={item}
                        type="checkbox"
                        value=""
                        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full dark:bg-gray-700 dark:border-gray-600"
                        onChange={(e) => {
                          let temp = tempFilter;
                          if (e.target.checked) {
                            temp.push(item);
                          } else {
                            const index = temp.indexOf(item);

                            if (index > -1) {
                              temp.splice(index, 1);
                            }
                          }
                          setTempFilter([...temp]);
                        }}
                      />
                      <label
                        htmlFor={item}
                        className="cursor-pointer ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                      >
                        <div className="text-black ">{item}</div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex place-content-center">
              <button
                onClick={() => {
                  console.log("tempfilter length", tempFilter.length);
                  if (tempFilter.length > 0) {
                    getFilteredSoftwares();
                  }
                }}
              >
                Filter
              </button>
            </div>
          </div>
          {/* <div className="filter  bg-[#2F455C] rounded-t-xl p-8 mt-5 text-white">
              <div className="text text-xl font-bold text-center text-white ">
                <p>Have Questions?</p>
                <p>{"Let's us help!"}</p>
              </div>
              <div className="text-center mt-3 text-sm">
                <p>Get personalized recommedations</p>
                <p>from our expert on cells!</p>
              </div>
            </div>
            <div className="filter  bg-white rounded-b-xl p-8">
              <div className="grid grid-cols-1 gap-4 mt-5">
                <input
                  type="text"
                  className="w-full h-9 rounded-full border-solid border-2 border-[#4b5563] placeholder-[#6b7280] p-5"
                  placeholder="Name*"
                />
                <input
                  type="text"
                  className="w-full h-9 rounded-full border-solid border-2 border-[#4b5563] placeholder-[#6b7280] p-5"
                  placeholder="Email*"
                />
                <div className="flex rounded-full border-solid border-2 border-[#4b5563] p-2">
                  <img
                    src="../photo/icon/cambodia.png"
                    alt=""
                    className="border-r-2 border-solid border-[#4b5563] mr-5 p-1 "
                  />
                  <input
                    type="text"
                    className="w-full  placeholder-[#6b7280] "
                    placeholder="Mobile Phone *"
                  />
                </div>
              </div>
              <div className="btn mt-5">
                <button className="bg-[#2F455C] p-3 rounded-full w-full text-white font-semibold">
                  Get Offer
                </button>
              </div>
              <div className="text text-sm mt-3 text-center">
                <p>
                  By submitting, you agree to our{" "}
                  <span className="text-[#005FC1]">Terms and Condition</span>{" "}
                  and <span className="text-[#005FC1]"> Privacy Policy</span>{" "}
                </p>
              </div>
            </div> */}
        </div>

        <div className="w-full flex-1">
          <div className="bg-[#F7F8FA] ml-5">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray">
              <div className="flex justify-between">
                <div className="flex flex-wrap">
                  {icons.map((item, index) => {
                    return (
                      <button
                        key={index}
                        className="ml-10 border-[1px] border-gray rounded-lg overflow-clip"
                        onClick={() => {
                          addIds(item[2], item[1], false, item[0]);
                        }}
                      >
                        <img src={item[0]} alt="" className="h-16" />
                      </button>
                    );
                  })}
                </div>
                <div className="grid place-content-center place-items-center">
                  <Link
                    href={{
                      pathname: "/pages/comparison",
                      query: {},
                    }}
                    className={`bg-[#4A4A4A] flex place-content-center place-items-center p-2 rounded-lg font-semibold text-white hover:bg-white border-2 border-solid border-[#black] hover:text-black ${
                      allowComp ? "" : "pointer-events-none"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.6em"
                      height="1.6em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M28 6H18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 15h6.17l-2.58 2.59L9 19l5-5l-5-5l-1.41 1.41L10.17 13H4V4h12v20H4Zm12 13v-2a2 2 0 0 0 2-2V8h10v9h-6.17l2.58-2.59L23 13l-5 5l5 5l1.41-1.41L21.83 19H28v9Z"
                      />
                    </svg>
                    <p className="ml-2">Compare</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text ml-5 mt-3">
            <div className="popular bg-white rounded-2xl p-6 border-2 border-gray">
              {isSearching ? (
                !doneSearching ? (
                  <div className="shadow rounded-md p-4 w-full mx-auto">
                    <p
                      className="font-medium text-xs xm:text-nbase whitespace-break-spaces invisible"
                      id="softwareOverview"
                    ></p>
                    <div className="animate-pulse flex space-x-4">
                      <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-200 rounded"></div>
                        {[1, 2].map((item, index) => {
                          return (
                            <div className="space-y-3" key={index}>
                              <div className="grid grid-cols-3 gap-4">
                                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                              </div>
                              <div className="h-2 bg-slate-200 rounded"></div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="ml-4 min-h-[735px] relative">
                    <div className="grid grid-cols-2 s900:grid-cols-3 lg:grid-cols-4 gap-5 ">
                      {searchSoftware.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="group border border-gray p-3 rounded-lg font-semibold  hover:bg-[#1e293b] hover:text-white"
                          >
                            <div className="flex justify-between flex-wrap">
                              <div>
                                <p className="text-ellipsis">{item.name}</p>
                                <div className="star flex flex-wrap">
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((it, ind) => {
                                      return (
                                        <svg
                                          width="18"
                                          height="17"
                                          viewBox="0 0 18 17"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          key={ind}
                                        >
                                          <path
                                            d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z"
                                            fill="#F3B146"
                                          />
                                        </svg>
                                      );
                                    })}
                                  </div>
                                  <p className="text-gray text-ellipsis">
                                    (2,145)
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center mb-4">
                                {!tids.includes(item.id) && (
                                  <button
                                    className="p-1 group-hover:bg-white bg-[#1e293b] border-white rounded dark:ring-offset-gray-800"
                                    onClick={() => {
                                      addIds(
                                        item.id,
                                        item.name,
                                        true,
                                        item.icon
                                      );
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.6em"
                                      height="1.6em"
                                      viewBox="0 0 32 32"
                                      className="group-hover:stroke-black group-hover:fill-black stroke-white fill-white stroke-0"
                                    >
                                      <path d="M28 6H18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 15h6.17l-2.58 2.59L9 19l5-5l-5-5l-1.41 1.41L10.17 13H4V4h12v20H4Zm12 13v-2a2 2 0 0 0 2-2V8h10v9h-6.17l2.58-2.59L23 13l-5 5l5 5l1.41-1.41L21.83 19H28v9Z" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                            <Link
                              href={{
                                pathname: "/pages/software",
                                query: { id: item.id },
                              }}
                              className="pic flex justify-center my-5 "
                            >
                              <img src={item.icon} alt="" className="h-20" />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                    <div className="h-[100px]"></div>
                    {/* <div className="flex place-items-center place-content-center mt-10 absolute bottom-0 w-full">
                    {pageNumber > 1 && (
                      <button
                        className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center"
                        onClick={() => {
                          getPreviousPage();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.7em"
                          height="1.7em"
                          viewBox="0 0 48 48"
                          className="fill-transparent"
                        >
                          <g
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="4"
                          >
                            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                            <path strokeLinecap="round" d="m27 33l-9-9l9-9" />
                          </g>
                        </svg>
                      </button>
                    )}
                    {pageNumber != Math.min(Math.ceil(total / pageStep), 5) && (
                      <button
                        className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center"
                        onClick={() => {
                          goToPageNumber(pageNumber + 1);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.7em"
                          height="1.7em"
                          viewBox="0 0 48 48"
                          className="fill-transparent"
                        >
                          <g
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="4"
                          >
                            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                            <path strokeLinecap="round" d="m21 33l9-9l-9-9" />
                          </g>
                        </svg>
                      </button>
                    )}
                  </div> */}
                  </div>
                )
              ) : (
                <div className="ml-4 min-h-[735px] relative">
                  {softwares.length > 0 ? (
                    <div className="grid grid-cols-2 s900:grid-cols-3 lg:grid-cols-4 gap-5 ">
                      {softwares.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="group border border-gray p-3 rounded-lg font-semibold  hover:bg-[#1e293b] hover:text-white"
                          >
                            <div className="flex justify-between flex-wrap">
                              <div>
                                <p className="text-ellipsis">{item.name}</p>
                                <div className="star flex flex-wrap">
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((it, ind) => {
                                      return (
                                        <svg
                                          width="18"
                                          height="17"
                                          viewBox="0 0 18 17"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                          key={ind}
                                        >
                                          <path
                                            d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z"
                                            fill="#F3B146"
                                          />
                                        </svg>
                                      );
                                    })}
                                  </div>
                                  <p className="text-gray text-ellipsis">
                                    (2,145)
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center mb-4">
                                {!tids.includes(item.id) && (
                                  <button
                                    className="p-1 group-hover:bg-white bg-[#1e293b] border-white rounded dark:ring-offset-gray-800"
                                    onClick={() => {
                                      addIds(
                                        item.id,
                                        item.name,
                                        true,
                                        item.icon
                                      );
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="1.6em"
                                      height="1.6em"
                                      viewBox="0 0 32 32"
                                      className="group-hover:stroke-black group-hover:fill-black stroke-white fill-white stroke-0"
                                    >
                                      <path d="M28 6H18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 15h6.17l-2.58 2.59L9 19l5-5l-5-5l-1.41 1.41L10.17 13H4V4h12v20H4Zm12 13v-2a2 2 0 0 0 2-2V8h10v9h-6.17l2.58-2.59L23 13l-5 5l5 5l1.41-1.41L21.83 19H28v9Z" />
                                    </svg>
                                  </button>
                                )}
                              </div>
                            </div>
                            <Link
                              href={{
                                pathname: "/pages/software",
                                query: { id: item.id },
                              }}
                              className="pic flex justify-center my-5 "
                            >
                              <img src={item.icon} alt="" className="h-20" />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="h-96 text-2xl flex place-content-center place-items-center">
                      No More Software/Tool Found!
                    </div>
                  )}
                  <div className="h-[100px]"></div>
                  {showNextFiltered ? (
                    <div className="flex place-items-center place-content-center mt-10 absolute bottom-0 w-full">
                      {filterPageNumber > 1 && (
                        <button
                          className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center"
                          onClick={() => {
                            setStopNextFilter(false);
                            getNextFilteredSoftwares(
                              false,
                              filterPageNumber - 1
                            );
                            setFilterPageNumber(filterPageNumber - 1);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.7em"
                            height="1.7em"
                            viewBox="0 0 48 48"
                            className="fill-transparent"
                          >
                            <g
                              stroke="currentColor"
                              strokeLinejoin="round"
                              strokeWidth="4"
                            >
                              <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                              <path strokeLinecap="round" d="m27 33l-9-9l9-9" />
                            </g>
                          </svg>
                        </button>
                      )}
                      {!stopNextFilter && (
                        <button
                          className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center"
                          onClick={() => {
                            getNextFilteredSoftwares(
                              true,
                              filterPageNumber + 1
                            );
                            setFilterPageNumber(filterPageNumber + 1);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.7em"
                            height="1.7em"
                            viewBox="0 0 48 48"
                            className="fill-transparent"
                          >
                            <g
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth="4"
                            >
                              <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                              <path strokeLinecap="round" d="m21 33l9-9l-9-9" />
                            </g>
                          </svg>
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="flex place-items-center place-content-center mt-10 absolute bottom-0 w-full">
                      {pageNumber > 1 && (
                        <button
                          className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center"
                          onClick={() => {
                            getPreviousPage();
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.7em"
                            height="1.7em"
                            viewBox="0 0 48 48"
                            className="fill-transparent"
                          >
                            <g
                              stroke="currentColor"
                              strokeLinejoin="round"
                              strokeWidth="4"
                            >
                              <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                              <path strokeLinecap="round" d="m27 33l-9-9l9-9" />
                            </g>
                          </svg>
                        </button>
                      )}
                      {Array.from(
                        new Array(Math.ceil(total / pageStep)),
                        (x, i) => i + 1
                      ).map((item, index) => {
                        return (
                          <button
                            key={index}
                            className={`bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-7 xm:w-9 md:w-12 h-7 xm:h-9 md:h-12 rounded-full ${
                              pageNumber == index + 1 &&
                              "bg-darkblue font-bold text-white"
                            }`}
                            onClick={() => {
                              goToPageNumber(index + 1);
                            }}
                          >
                            {item}
                          </button>
                        );
                      })}
                      {pageNumber !=
                        Math.min(Math.ceil(total / pageStep), 5) && (
                        <button
                          className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center"
                          onClick={() => {
                            goToPageNumber(pageNumber + 1);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1.7em"
                            height="1.7em"
                            viewBox="0 0 48 48"
                            className="fill-transparent"
                          >
                            <g
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeWidth="4"
                            >
                              <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                              <path strokeLinecap="round" d="m21 33l9-9l-9-9" />
                            </g>
                          </svg>
                        </button>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
