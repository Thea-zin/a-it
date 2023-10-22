"use client";

import { useState } from "react";

export default function TapSoftwareComponent() {
  const [tap, setTap] = useState(0);

  return (
    <div className="bottom-0 text-white ml-44 text-[1.15rem] font-medium absolute">
      <div className="flex">
        <button
          className={`border-t-2 border-x-2 border-darkblue rounded-t-xl py-2 px-5 mr-5 ${
            tap == 0 ? "bg-darkblue text-white" : "bg-white text-darkgray"
          }`}
          onClick={() => setTap(0)}
        >
          Overview
        </button>
        <button
          className={`border-t-2 border-x-2 border-darkblue rounded-t-xl py-2 px-5 mr-5 ${
            tap == 1 ? "bg-darkblue text-white" : "bg-white text-darkgray"
          }`}
          onClick={() => setTap(1)}
        >
          Review
        </button>
        <button
          className={`border-t-2 border-x-2 border-darkblue rounded-t-xl py-2 px-5 mr-5 ${
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
