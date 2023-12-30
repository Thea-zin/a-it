"use client";

import { useState } from "react";

export default function TapComponent() {
  const [tap, setTap] = useState(0);

  return (
    <div className="bottom-0 text-white ml-32 text-[1.15rem] mt-10 font-medium">
      <div className="flex">
        <button
          className={`border-t-2 border-x-2 border-white rounded-t-xl py-2 px-5 mr-5 ${
            tap == 0 ? "bg-white text-black" : "bg-black text-white"
          }`}
          onClick={() => setTap(0)}
        >
          Overview
        </button>
        <button
          className={`border-t-2 border-x-2 border-white rounded-t-xl py-2 px-5 mr-5 ${
            tap == 1 ? "bg-white text-black" : "bg-black text-white"
          }`}
          onClick={() => setTap(1)}
        >
          Products
        </button>
        <button
          className={`border-t-2 border-x-2 border-white rounded-t-xl py-2 px-5 mr-5 ${
            tap == 2 ? "bg-white text-black" : "bg-black text-white"
          }`}
          onClick={() => setTap(2)}
        >
          Top Rates
        </button>
      </div>
    </div>
  );
}
