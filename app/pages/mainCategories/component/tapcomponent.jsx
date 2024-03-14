"use client";

import { useEffect, useState } from "react";

export default function TapComponent({ st }) {
  const [tap, setTap] = useState(0);

  return (
    <div className="text-white ml-32 md:ml-44 text-[1.15rem] font-medium">
      <div className="flex">
        <button
          className={`border-t-2 border-x-2 border-darkblue rounded-t-xl py-3 px-5 mr-5 text-[1.15rem] ${
            tap == 0 ? "bg-white text-darkgray " : "bg-darkblue text-white"
          }`}
          onClick={() => {
            setTap(0);
            st(0);
          }}
        >
          Overview
        </button>
        <button
          className={`border-t-2 border-x-2 border-darkblue rounded-t-xl py-3 px-5 mr-5 text-[1.15rem] ${
            tap == 1 ? "bg-white text-darkgray " : "bg-darkblue text-white"
          }`}
          onClick={() => {
            setTap(1);
            st(1);
          }}
        >
          Products
        </button>
      </div>
    </div>
  );
}
