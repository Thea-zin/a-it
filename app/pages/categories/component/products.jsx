"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Stars from "./star_display";

export default function Products({
  isSearching = false,
  searchSoftware = [],
  setIsSearching = () => {},
  setDoneSearching = () => {},
  setSearchSoftware = () => {},
  getSearchSoftware = () => {},
  searchPageNumber = 1,
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
  const [pageNumber, setPageNumber] = useState(1);
  const [filterPageNumber, setFilterPageNumber] = useState(1);
  const [categories, setCategories] = useState([]);
  const [mainFilter, setMainFilter] = useState("");
  const [tempFilter, setTempFilter] = useState("");
  const [rateFilter, setRateFilter] = useState([]);
  const [tempRate, setTempRate] = useState([]);
  const [loading, setLoading] = useState(false);

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
    localStorage.setItem(
      "ait_soft_icons",
      tempicon
        .map((item) => {
          return item[0];
        })
        .join()
    );

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
    // console.log(tempRate);
  }, [tempRate]);

  useEffect(() => {
    if (isSearching) {
      let checkboxes = document.querySelectorAll("input[type='checkbox'");
      for (let i of checkboxes) {
        i.checked = false;
      }
      setTempRate([]);
      setRateFilter([]);

      setTempFilter("");
      setMainFilter("");
    }
  }, [isSearching]);

  useEffect(() => {
    localStorage.setItem("ait_soft_ids", "");
    localStorage.setItem("ait_soft_names", "");
    localStorage.setItem("ait_soft_icons", "");

    setLoading(true);
    getAllCategories();
  }, []);

  useEffect(() => {
    // console.log(softwares);
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

  useEffect(() => {}, [categories]);

  const getAllCategories = async () => {
    try {
      let initcategory = initialFilter;
      let isParent = false;
      let temp = await fetch("/api/automation/categories", {
        method: "POST",
        body: JSON.stringify({}),
      });
      const res = await temp.json();

      // console.log(res.categories[0]);

      if (initcategory == null || initcategory == "") {
        initcategory = res.categories[0][1];
      }

      temp = await fetch("/api/automation/products", {
        method: "POST",
        body: JSON.stringify({ category: initcategory }),
      });
      const tsoft = await temp.json();

      setCategories(res.categories);
      setSoftwares(tsoft.softwares);
      setLoading(false);
      setTempFilter(initcategory);
      setMainFilter(initcategory);
    } catch (e) {
      console.log(e);
    }
  };

  const getFilteredSoftwares = async () => {
    setLoading(true);
    setMainFilter(tempFilter);
    setRateFilter(tempRate);
    document.querySelector("input[type='text']").value = "";

    const temp = await fetch("/api/automation/filter", {
      method: "POST",
      body: JSON.stringify({
        category: tempFilter,
        rate: tempRate,
        pageNumber: 1,
      }),
    });
    const tsoft = await temp.json();

    setSoftwares(tsoft.softwares);
    setLoading(false);
    setPageNumber(1);
    setIsSearching(false);
  };

  const getNextPage = async () => {
    setLoading(true);
    try {
      const temp = await fetch("/api/automation/filter", {
        method: "POST",
        body: JSON.stringify({
          category: mainFilter,
          pageNumber: pageNumber + 1,
          rate: rateFilter,
        }),
      });
      const res = await temp.json();

      if (res.softwares.length != 0) {
        setPageNumber(pageNumber + 1);
      }
      setSoftwares(res.softwares);
    } catch (e) {}
    setLoading(false);
  };

  const getPreviousPage = async () => {
    setLoading(true);
    try {
      if (pageNumber <= 1) {
        return;
      }

      let temp = null;
      if (softwares.length == 0) {
        temp = await fetch("/api/automation/filter", {
          method: "POST",
          body: JSON.stringify({
            category: mainFilter,
            pageNumber: pageNumber,
            rate: rateFilter,
          }),
        });
      } else {
        temp = await fetch("/api/automation/filter", {
          method: "POST",
          body: JSON.stringify({
            category: mainFilter,
            pageNumber: pageNumber - 1,
            rate: rateFilter,
          }),
        });
        setPageNumber(pageNumber - 1);
      }
      const res = await temp.json();

      setSoftwares(res.softwares);
    } catch (e) {}
    setLoading(false);
  };

  return (
    <div className="itemes bg-[#F7F8FA]">
      <div className="md:flex p-8 ml-5">
        <div className="min-w-[260px]">
          <div className="filter  bg-white rounded-xl p-8 " id="filter">
            <div className="flex justify-between ">
              <div className="font-bold">Filters </div>
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
                ].map((item, index) => {
                  return (
                    <div className="flex items-center mb-2" key={index}>
                      <input
                        id={item[1]}
                        type="checkbox"
                        value=""
                        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full dark:bg-gray-700 dark:border-gray-600"
                        onChange={(e) => {
                          let temp = tempRate;
                          if (e.target.checked) {
                            temp.push(item[1].at(-1));
                          } else {
                            const index = temp.indexOf(item[1].at(-1));

                            if (index > -1) {
                              temp.splice(index, 1);
                            }
                          }
                          setTempRate([...temp]);
                        }}
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
              <div className="mt-5">
                {categories.map((item, index) => {
                  return (
                    <div className="flex items-center mb-2" key={index}>
                      <input
                        id={item[0]}
                        type="radio"
                        value={item[1]}
                        name="categories"
                        className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full dark:bg-gray-700 dark:border-gray-600"
                        onChange={(e) => {
                          setTempFilter(e.target.value);
                        }}
                        checked={tempFilter === item[1]}
                      />
                      <label
                        htmlFor={item[0]}
                        className="cursor-pointer ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                      >
                        <div className="text-black ">{item[0]}</div>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex place-content-center">
              <button
                onClick={() => {
                  // console.log("tempfilter length", tempFilter.length);
                  if (tempFilter.length > 0 || tempRate.length > 0) {
                    getFilteredSoftwares();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                Filter
              </button>
            </div>
          </div>
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
                        <img
                          src={item[0]}
                          alt=""
                          className="h-16"
                          referrerPolicy="no-referrer"
                        />
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
                    {searchSoftware.length > 0 ? (
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
                                    <Stars number={item.star} />
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
                                <img
                                  src={item.icon}
                                  alt=""
                                  className="h-20"
                                  referrerPolicy="no-referrer"
                                />
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
                    {doneSearching && (
                      <div className="flex place-items-center place-content-center mt-10 absolute bottom-0 w-full">
                        {searchPageNumber > 1 && (
                          <button
                            className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 h-8 xm:h-10 md:h-12 rounded-full flex place-content-center"
                            onClick={() => {
                              getSearchSoftware(searchPageNumber - 1);
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
                                <path
                                  strokeLinecap="round"
                                  d="m27 33l-9-9l9-9"
                                />
                              </g>
                            </svg>
                            <p>Previous Page</p>
                          </button>
                        )}
                        {searchSoftware.length > 0 && (
                          <button
                            className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 h-8 xm:h-10 md:h-12 rounded-full flex"
                            onClick={() => {
                              getSearchSoftware(searchPageNumber + 1);
                            }}
                          >
                            <p>Next Page</p>
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
                                <path
                                  strokeLinecap="round"
                                  d="m21 33l9-9l-9-9"
                                />
                              </g>
                            </svg>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )
              ) : loading ? (
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
                                  <Stars number={item.star} />
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
                              <img
                                src={item.icon}
                                alt=""
                                className="h-20"
                                referrerPolicy="no-referrer"
                              />
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
                  {!loading && (
                    <div className="flex place-items-center place-content-center mt-10 absolute bottom-0 w-full">
                      {pageNumber > 1 && (
                        <button
                          className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 h-8 xm:h-10 md:h-12 rounded-full flex place-content-center"
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
                          <p>Previous Page</p>
                        </button>
                      )}
                      {/* {Array.from(
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
                      })} */}

                      {softwares.length > 0 && (
                        <button
                          className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 h-8 xm:h-10 md:h-12 rounded-full flex"
                          onClick={() => {
                            getNextPage();
                          }}
                        >
                          <p>Next Page</p>
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
