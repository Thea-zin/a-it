"use client";

import Link from "next/link";
import Stars from "./star_display";

export default function Item({ id, software }) {
  return (
    <div className="m-3 p-2 border-[1px] rounded-md overflow-clip">
      <Link
        href={{
          pathname: "software",
          query: { id: software.id },
        }}
      >
        <p className="font-semibold text-sm xm:text-[1rem]">{software.name}</p>
        <Stars number={software.star} />
        <div className="w-full h-28 grid place-content-center relative z-0">
          <div>
            <img src={software.icon} alt="" className="w-32 p-5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
