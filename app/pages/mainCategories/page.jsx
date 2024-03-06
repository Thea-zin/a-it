"use client";

import React, { useState, useEffect } from "react";
import CardItem from "./component/box";
import CardItem2 from "./component/box2";
import Link from "next/link";
const Page = () => {
  // const [ids, setIds] = useState(["start"]);
  let tids = [];
  let names = [];

  function addIds(id, name, add) {
    if (add) {
      tids.push(id);
      names.push(name);
    } else {
      tids.splice(tids.indexOf(id), 1);
      names.splice(names.indexOf(name), "Copy.ai");
    }

    localStorage.setItem("ait_soft_ids", tids.join());
    localStorage.setItem("ait_soft_names", names.join());
    // const index = ids.indexOf("start");
    // if (index > -1) {
    //   ids.splice(index, 1);
    //   setIds([...ids]);
    // }
    // if (add) {
    //   ids.push(id);
    //   setIds([...ids])
    // } else {
    //   ids.splice(ids.indexOf(id), 1);
    //   setIds([...ids])
    // }
  }

  useEffect(() => {
    localStorage.setItem("ait_soft_ids", "");
  }, []);

  return (
    <div>
      <div className="content-top bg-black h-44 ">
        <div className="text flex justify-between p-4">
          <div className="text-[#1DCDFE] font-semibold text-3xl mt-9 ml-7">
            Marketing
          </div>
          <div className="bg-white flex h-9 w-96 rounded-full p-2 mt-9 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              placeholder="Search Mockups, Logos..."
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className=" pl-8 ">
        <div className="btn">
          <button className="bg-white border-solid border-white border-2 p-3 rounded-lg -translate-y-11 text-black ml-3">
            Overview
          </button>
          <button className="border-solid border-white border-2 p-3 rounded-lg -translate-y-11 text-white ml-3">
            Products
          </button>
          <button className="border-solid border-white border-2 p-3 rounded-lg -translate-y-11 text-white ml-3">
            Top Rates
          </button>
        </div>
        <div className="btn2 flex mt-5">
          <button className="bg-[#1DCDFE] rounded-full -translate-y-11 text-[#2F455C] p-1 w-28 ml-3 text-">
            Filter All
          </button>
          <button className=" hover:bg-[#1DCDFE] rounded-full -translate-y-11 text-[#2F455C] p-1 w-28 ml-3">
            Feature
          </button>
          <button className=" hover:bg-[#1DCDFE] rounded-full -translate-y-11 text-[#2F455C] p-1 w-32 ml-3">
            Company Size
          </button>
          <button className=" hover:bg-[#1DCDFE] rounded-full -translate-y-11 text-[#2F455C] p-1 w-28 ml-3">
            Intergration
          </button>
          <button className=" rounded-full -translate-y-11 text-[#2F455C] p-1 w-28 ml-3">
            Price
          </button>
          <label className="relative  items-center cursor-pointer -translate-y-10">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 border-[#1DCDFE] bg-gray peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <div className="text ">
        <div className="text-3xl font-medium ml-10">What is your problem ?</div>
        <div className="box-service">
          <div className="text ml-10 p-2 mt-5 mb-5">
            {
              'You can choose the appropriate IT category based on common business challenges and objectives. Choose the most appropriate IT products and services based on your specific objectives, such as " paperless " to reduce costs or " personnel planning that takes advantage of employees strengths and backgrounds " to utilize human resources.'
            }
          </div>
          <div className="pr-10 pl-10 ">
            <div className="box bg-black h-64 rounded-xl p-5 mt-5">
              <button
                type="checkbox"
                className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5 active:bg-white focus:bg-none border-[#1DCDFE]"
              >
                Cost Reduction
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2 ml-3 text-xs mt-5">
                Sales expansion/marketing
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Utilization of human resources
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Security risk management
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Work style reform/improvement of productivity
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Cost Concerns
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Integration Issues
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                User Adoption
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Customization
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Security and Compliance
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Vendor Reliability
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Performance and Reliability
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Legacy Systems
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="listing grid grid-cols-4 p-5">
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
                <Link href={"/pages/software_page?id=1"}>Learn More</Link>
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
        </div>
      </div>
      <div className="itemes bg-[#F7F8FA]">
        <div className=" grid grid-col-6 gap-2 p-8 ml-5">
          <div className="w-80">
            <div className="filter  bg-white rounded-xl p-8 ">
              <div className="flex justify-between ">
                <div className="font-bold">Filters </div>
                <div className="font-medium text-xs items-center text-[#4A4A4A] border-b-2- ">
                  <button>Reset Filter</button>
                </div>
              </div>

              <div className="software mt-5">
                <div className="title mt-5 font-semibold">Software Rating </div>
                <div className="checkbox mt-5">
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 bg-[#2F455C] flex items-center p-1 rounded-lg"
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
                      <div className="text-white font-bold">4.4</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 bg-[#2F455C] flex items-center p-1 rounded-lg"
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
                      <div className="text-white font-bold">4.5 & above</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 bg-[#2F455C] flex items-center p-1 rounded-lg"
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
                      <div className="text-white font-bold">2.5 & above</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="busineses">
                <div className="title mt-5 font-semibold">Business type</div>
                <div className="checkbox mt-5">
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">Student</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black">Start Up</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">Freelancer</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">SMEs</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">Agency</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">Enterprise</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter  bg-[#2F455C] rounded-t-xl p-8 mt-5 text-white">
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
            </div>
          </div>

          <div className="col-start-2 col-span-2 ">
            <div className="text p-5">
              <div className="font-bold text-2xl">
                Best Content Marketing Software
              </div>
              <div className="text-[#4A4A4A] mb-5">
                See more below to select the best Content Marketing software.
              </div>

              <div className="popular bg-white rounded-2xl p-6 border-2 border-gray">
                <div className="flex justify-between">
                  <div className="text mb-5">
                    <div className="font-semibold text-2xl">
                      Popular Product
                    </div>
                    <div className="text-[#4A4A4A] ">
                      Popular Content Analytics products used by Content
                      Marketing professionals.
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
                      className="bg-[#4A4A4A] p-2 rounded-lg font-semibold text-white hover:bg-white border-2 border-solid border-[#black] hover:text-black"
                    >
                      comparison
                    </Link>
                  </div>
                </div>

                <div className="ml-4">
                  <CardItem addIds={addIds}></CardItem>
                </div>
              </div>
              <div className="popular bg-white rounded-2xl p-6 border-2 border-gray mt-5">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
