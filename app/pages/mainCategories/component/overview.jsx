"use client";

import React, { useState, useEffect } from "react";
import CardItem from "./box";
import Link from "next/link";

export default function Overview() {
  const [allowComp, setAllowComp] = useState(false);
  const [tids, setTids] = useState([]);
  const [names, setNames] = useState([]);

  function addIds(id, name, add) {
    let tempid = tids;
    let tempnames = names;
    if (add) {
      tempid.push(id);
      tempnames.push(name);
    } else {
      const idindex = tempid.indexOf(id);
      const nameindex = tempnames.indexOf(name);
      if (idindex >= 0 || nameindex >= 0) {
        tempid.splice(idindex, 1);
        tempnames.splice(nameindex, 1);
      }
    }

    localStorage.setItem("ait_soft_ids", tempid.join());
    localStorage.setItem("ait_soft_names", tempnames.join());

    if (tempid.length == 0 || tempnames.length == 0) {
      setAllowComp(false);
    } else {
      setAllowComp(true);
    }

    setTids(tempid);
    setNames(tempnames);
  }

  useEffect(() => {
    localStorage.setItem("ait_soft_ids", "");
    localStorage.setItem("ait_soft_names", "");
  }, []);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 p-5 gap-10">
        {[1, 2, 3, 4].map((item, index) => {
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

                    <div className="text text-black font-medium ">Trending</div>

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
                  <img src="../photo/icon/CopyAI.png" alt="" />
                </div>
                <div className="flex justify-center mt-5">Copy.ai</div>
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
                    <div className="text-white bg-[#2F455C]">4.6</div>
                  </div>
                </div>
                <div className="text p-7">
                  {"Canva's AI features including Text to Image."}
                </div>
                <div className=" flex justify-center mb-8">
                  <button className="text-xl font-medium w-60 text-white bg-[#2F455C] p-3 rounded-full">
                    <Link href={"/pages/software?id=1"}>Learn More</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* <div className="card-box mt-10 border-solid border-2 rounded-lg border-gray p-2 m-8">
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

                <div className="text text-black font-medium ">Trending</div>

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
            <div className="image flex justify-center mt-5 h-20">
              <img src="../photo/icon/Autoblog.png" alt="" />
            </div>
            <div className="flex justify-center mt-5">AutoBlog</div>
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
                <div className="text-white bg-[#2F455C]">4.6</div>
              </div>
            </div>
            <div className="text p-7">
              {"Canva's AI features including Text to Image."}
            </div>
            <div className=" flex justify-center mb-8">
              <button className="text-xl font-medium w-60 text-white bg-[#2F455C] p-3 rounded-full">
                <Link href={"/pages/software_page?id=2"}>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-box mt-10 border-solid border-2 rounded-lg border-gray p-2 m-8">
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

                <div className="text text-black font-medium ">Trending</div>

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
            <div className="image flex justify-center mt-5 h-20">
              <img src="../photo/icon/dropbox.png" alt="" />
            </div>
            <div className="flex justify-center mt-5">DropBox</div>
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
                <div className="text-white bg-[#2F455C]">4.6</div>
              </div>
            </div>
            <div className="text p-7">
              {"Canva's AI features including Text to Image."}
            </div>
            <div className=" flex justify-center mb-8">
              <button className="text-xl font-medium w-60 text-white bg-[#2F455C] p-3 rounded-full">
                <Link href={"/pages/software_page?id=3"}>Learn More</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card-box mt-10 border-solid border-2 rounded-lg border-gray p-2 m-8">
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

                <div className="text text-black font-medium ">Trending</div>

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
              <img src="../photo/icon/ChatGPT.png" alt="" />
            </div>
            <div className="flex justify-center mt-5">ChatGPT</div>
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
                <div className="text-white bg-[#2F455C]">4.6</div>
              </div>
            </div>
            <div className="text p-7">
              {"Canva's AI features including Text to Image."}
            </div>
            <div className=" flex justify-center mb-8">
              <button className="text-xl font-medium w-60 text-white bg-[#2F455C] p-3 rounded-full">
                <Link href={"/pages/software_page?id=4"}>Learn More</Link>
              </button>
            </div>
          </div>
        </div> */}
      </div>
      <div className="itemes bg-[#F7F8FA]">
        <div className="md:flex p-8 ml-5">
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
                  <div>
                    {/* <Link
                      href={{
                        pathname: "/pages/comparison_page",
                        query: {},
                      }}
                      className="bg-[#4A4A4A] p-2 rounded-lg font-semibold text-white hover:bg-white border-2 border-solid border-[#black] hover:text-black"
                    >
                      comparison
                    </Link> */}
                    <Link
                      href={{
                        pathname: "/pages/comparison",
                        query: {},
                      }}
                      className={`bg-[#4A4A4A] p-2 rounded-lg font-semibold text-white hover:bg-white border-2 border-solid border-[#black] hover:text-black ${
                        allowComp ? "" : "pointer-events-none"
                      }`}
                    >
                      comparison
                    </Link>
                  </div>
                </div>

                <div className="ml-4">
                  <CardItem addIds={addIds}></CardItem>
                </div>
              </div>
              {/* <div className="popular bg-white rounded-2xl p-6 border-2 border-gray mt-5">
                <div className="text mb-5">
                  <div className="font-semibold text-2xl">Popular Product</div>
                  <div className="text-[#4A4A4A] ">
                    Popular Content Analytics products used by Content Marketing
                    professionals.
                  </div>
                </div>
                <div className="ml-4">
                  <CardItem2 addIds={addIds}></CardItem2>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
