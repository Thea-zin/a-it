"use client";

import React, { useState, useEffect } from "react";
import CardItem2 from "./component/box2";
import Overview from "./component/overview";
import TapComponent from "./component/tapcomponent";
import Products from "./component/products";

const Page = () => {
  const [tap, setTap] = useState(0);

  return (
    <div className="min-w-[500px]">
      <div className="relative content-top bg-black h-44 ">
        <div className="text flex justify-between p-4">
          <div className="text-[#1DCDFE] font-semibold text-3xl mt-9 ml-7">
            Softwares
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
        <div className="absolute bottom-0">
          <TapComponent st={setTap} />
        </div>
      </div>

      {tap == 0 && <Overview />}
      {tap == 1 && <Products />}
    </div>
  );
};

export default Page;
