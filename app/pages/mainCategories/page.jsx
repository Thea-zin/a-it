"use client";

import React, { useState, useEffect } from "react";
import CardItem2 from "./component/box2";
import Overview from "./component/overview";
import TapComponent from "./component/tapcomponent";
import Products from "./component/products";

const Page = () => {
  const [tap, setTap] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [doneSearching, setDoneSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [searchSoftware, setSearchSoftware] = useState([]);
  const [initialDataToCompare, setInitialDataToCompare] = useState({
    id: "",
    name: "",
    icon: "",
  });

  const onKeyDown = (bypass = false, event) => {
    if (bypass || event.key === "Enter") {
      if (query != "" && query != null) {
        setDoneSearching(false);
        getSearchSoftware();
        setIsSearching(true);
      } else setIsSearching(false);

      document.getElementById("search").value = "";
    }
  };

  useEffect(() => {
    if (isSearching) {
      setTap(1);
    }
  }, [isSearching]);

  useEffect(() => {
    const temp = localStorage.getItem("ait_soft_comp").split(",");
    if (temp.length == 3 && temp[1] != "") {
      localStorage.setItem("ait_soft_comp", "");
      setInitialDataToCompare({ id: temp[0], name: temp[1], icon: temp[2] });
      setTap(1);
    }
  }, []);

  const getSearchSoftware = async () => {
    const temp = await fetch("/api/software/searchwpage", {
      method: "POST",
      body: JSON.stringify({ search: query.toLowerCase(), limit: 12 }),
    });
    const res = await temp.json();

    setDoneSearching(true);
    setSearchSoftware(res.softwares);
  };

  return (
    <div className="min-w-[500px]">
      <div className="relative content-top bg-black h-44 ">
        <div className="text flex justify-between p-4">
          <div className="text-[#1DCDFE] font-semibold text-3xl mt-9 ml-7">
            Softwares
          </div>
          <div className="flex place-items-end">
            <div className="text-black px-3 bg-[#D9D9D9] rounded-full flex py-2">
              <div className="flex place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name=""
                id="search"
                placeholder="Search software"
                className="outline-none bg-transparent w-full ml-2"
                onKeyDown={(e) => {
                  onKeyDown(false, e);
                }}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0">
          <TapComponent st={setTap} tap={tap} />
        </div>
      </div>

      {tap == 0 && <Overview />}
      {tap == 1 && (
        <Products
          isSearching={isSearching}
          searchSoftware={searchSoftware}
          setIsSearching={setIsSearching}
          doneSearching={doneSearching}
          softwareToCompare={initialDataToCompare}
          setSoftwareToCompare={setInitialDataToCompare}
        />
      )}
    </div>
  );
};

export default Page;
