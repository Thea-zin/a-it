"use client";

import { useState } from "react";

export default function FilterTopComponent() {
  const [checked, setCheck] = useState(false);

  return (
    <div className="flex text-black ml-32 mt-5 font-medium">
      <button className="px-5 rounded-full bg-cyan">Filter All</button>
      <button className="px-5">Features</button>
      <button className="px-5">Company Size</button>
      <button className="px-5">Integration</button>
      <div className="flex items-center justify-center">
        <label className="flex items-center cursor-pointer">
          <div className="ml-3">Pricing</div>
          <div className="relative ml-3">
            <input
              type="checkbox"
              id="pricing"
              className="sr-only"
              onChange={(event) => {
                setCheck(event.target.checked);
              }}
            ></input>
            {checked ? (
              <div className="w-14 h-8 rounded-full bg-[#3358ff]">
                <div className="absolute left-1 translate-x-full top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            ) : (
              <div className="w-14 h-8 rounded-full bg-[#909090]">
                <div className="absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
}
