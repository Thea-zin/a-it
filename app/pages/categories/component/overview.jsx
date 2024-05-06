"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Stars from "./star_display";

export default function Overview() {
  const [allowComp, setAllowComp] = useState(false);
  const [tids, setTids] = useState([]);
  const [names, setNames] = useState([]);
  const [icons, setIcons] = useState([]);
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);

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
      if (idindex >= 0 || nameindex >= 0) {
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
    localStorage.setItem("ait_soft_ids", "");
    localStorage.setItem("ait_soft_names", "");
    localStorage.setItem("ait_soft_icons", "");
    getTrendingSoftwares();
    getPopularSoftwares();
  }, []);

  const getTrendingSoftwares = async () => {
    const temp = await fetch("/api/automation/popular", {
      method: "POST",
      body: JSON.stringify({ smax: 4 }),
    });
    const res = await temp.json();

    setTrending(res.softwares);
  };

  const getPopularSoftwares = async () => {
    const temp = await fetch("/api/automation/popular", {
      method: "POST",
      body: JSON.stringify({ smax: 8 }),
    });
    const res = await temp.json();

    setPopular(res.softwares);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-10">
        {trending == null || trending.length == 0
          ? [1, 2, 3, 4].map((item, index) => {
              return (
                <div
                  className="shadow rounded-md p-4 w-full mx-auto"
                  key={index}
                >
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
              );
            })
          : trending.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card-box mt-10 border-solid border-2 rounded-lg border-gray p-2 my-8"
                >
                  <div className="inside bg-[#F7F8FA] rounded-xl max-h-full">
                    <div className="text text-[#1DCDFE] flex justify-center gap-5 ">
                      <div className="mt-4 flex justify-center gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                        </svg>

                        <div className="text text-black font-medium ">
                          Trending
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684zM13.949 13.684a1 1 0 00-1.898 0l-.184.551a1 1 0 01-.632.633l-.551.183a1 1 0 000 1.898l.551.183a1 1 0 01.633.633l.183.551a1 1 0 001.898 0l.184-.551a1 1 0 01.632-.633l.551-.183a1 1 0 000-1.898l-.551-.184a1 1 0 01-.633-.632l-.183-.551z" />
                        </svg>
                      </div>
                    </div>
                    <div className="image flex justify-center mt-5">
                      <img
                        src={item.icon}
                        alt=""
                        className="h-20"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex justify-center mt-5">{item.name}</div>
                    <div className="flex justify-center star">
                      <div className="text-[#EDA42D] w-20 flex justify-center bg-[#2F455C]  rounded-lg ">
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
                        {item.star > 0.1 ? (
                          <div className="text-white bg-[#2F455C]">
                            {item.star}
                          </div>
                        ) : (
                          <div className="text-white bg-[#2F455C]">N/A</div>
                        )}
                      </div>
                    </div>
                    <div className=" flex justify-center mb-8 mt-10">
                      <button className="text-xl font-medium w-60 text-white bg-[#2F455C] p-3 rounded-full">
                        <Link href={`/pages/software?id=${item.id}`}>
                          Learn More
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <div className="bg-[#F7F8FA] px-8 pt-8">
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
      <div className="itemes bg-[#F7F8FA]">
        <div className="md:flex p-8">
          <div className="w-full flex-1">
            <div className="text">
              {/* <div className="font-bold text-2xl">
                Best Content Marketing Software
              </div>
              <div className="text-[#4A4A4A] mb-5">
                See more below to select the best Content Marketing software.
              </div> */}

              <div className="popular bg-white rounded-2xl p-6 border-2 border-gray">
                <div className="flex justify-between">
                  <div className="text mb-5">
                    <div className="font-semibold text-2xl">
                      Popular Product
                    </div>
                    <div className="text-[#4A4A4A] ">
                      Popular Products Viewed by Users.
                    </div>
                  </div>
                </div>

                <div className="ml-4">
                  {popular == null || popular.length == 0 ? (
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
                      {popular.map((item, index) => {
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
