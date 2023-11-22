"use client";

import { useState } from "react";

export default function TapSoftwareComponent() {
  const [tap, setTap] = useState(0);

  return (
    <div className="text-white xl:ml-44 lg:ml-32 text-[1.15rem] font-medium">
      <div className="flex">
        <button
          className={`border-t-2 border-x-2 border-darkblue rounded-t-xl py-1 xm:py-3 px-3 xm:px-5 mr-2 xm:mr-5 text-xs xm:text-[1.15rem] ${
            tap == 0 ? "bg-darkblue text-white" : "bg-white text-darkgray"
          }`}
          onClick={() => setTap(0)}
        >
          Overview
        </button>
        <button
          className={`border-t-2 border-x-2 border-darkblue rounded-t-xl py-1 xm:py-3 px-3 xm:px-5 mr-2 xm:mr-5 text-xs xm:text-[1.15rem] ${
            tap == 1 ? "bg-darkblue text-white" : "bg-white text-darkgray"
          }`}
          onClick={() => setTap(1)}
        >
          Review
        </button>
        <button
          className={`border-t-2 border-x-2 border-darkblue rounded-t-xl py-1 xm:py-3 px-3 xm:px-5 text-xs xm:text-[1.15rem] ${
            tap == 2 ? "bg-darkblue text-white" : "bg-white text-darkgray"
          }`}
          onClick={() => setTap(2)}
        >
          Features
        </button>
      </div>
    </div>
  );
}
