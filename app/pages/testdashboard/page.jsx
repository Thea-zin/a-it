"use client";

import { useEffect, useState } from "react";

export default function TestDashboard() {
  const [softwares, setSoftwares] = useState({});
  const [total, setTotal] = useState(0);
  const [pageInfo, setPageInfo] = useState({
    page: 1,
    last: "",
    url: "/api/software/pagination",
    search: "",
  });
  const [query, setQuery] = useState("");
  const pageStep = 2;

  useEffect(() => {
    getTotalNumberOfSoftwares();
    getSoftwares(pageInfo);
  }, []);

  useEffect(() => {
    if (Object.keys(softwares).length == 0)
      getSoftwares({
        page: 1,
        last: query,
        url: "/api/software/search",
        search: query,
      });
  }, [softwares]);

  const getTotalNumberOfSoftwares = async () => {
    const temp = await fetch("/api/software/total");
    const res = await temp.json();
    setTotal(res.count);
  };

  const getSoftwares = async (pageInfo) => {
    // console.log("pageInfo", pageInfo);
    const temp = await fetch(pageInfo.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pageInfo),
    });
    const res = await temp.json();
    let st = softwares;
    if (res.softwares.length > 0) st[pageInfo.page] = res.softwares;

    // console.log("RES", res.softwares);
    // console.log("ST", st);
    setSoftwares(st);
    // console.log("SOFTWARES", softwares);
    setPageInfo({
      page: pageInfo.page,
      last: res.softwares[res.softwares.length - 1].name,
      url: pageInfo.url,
      search: pageInfo.search,
    });
  };

  const onKeyDown = (bypass = false, event) => {
    if (bypass || event.key === "Enter") {
      setSoftwares({});
    }
  };

  return (
    <div>
      <div className="flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
            />
          </svg>
        </div>
        <p>Dashboard</p>
      </div>
      <div>
        <div className="flex place-content-between">
          <p>Softwares</p>
          <div className="flex">
            <div className="text-black px-3 py-1 bg-white border-[#D9D9D9] border-[1px] rounded-full flex">
              <button
                className="pr-1 pt-1"
                onClick={() => {
                  onKeyDown(true);
                }}
              >
                <iconify-icon icon="bi:search"></iconify-icon>
              </button>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search"
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
        <div className="w-full">
          <table className="table-auto w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th>.</th>
                <th>Name</th>
                <th>Publish Date</th>
                <th>Company</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(softwares).length > 0 &&
                softwares[pageInfo.page].map((item, index) => {
                  return (
                    <tr className="text-center" key={index}>
                      <td className="border-y-2 border-l-2 border-red rounded-l-xl">
                        .
                      </td>
                      <td className="border-y-2">{item.name}</td>
                      <td className="border-y-2">27/09/2023</td>
                      <td className="border-y-2">OpenAI</td>
                      <td className="border-y-2 border-r-2 rounded-r-xl">
                        <div className="flex place-content-center">
                          <button>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 256 256"
                              >
                                <g fill="currentColor">
                                  <path
                                    d="M221.66 90.34L192 120l-56-56l29.66-29.66a8 8 0 0 1 11.31 0L221.66 79a8 8 0 0 1 0 11.34"
                                    opacity="0.2"
                                  />
                                  <path d="m227.32 73.37l-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h44.69a15.86 15.86 0 0 0 11.31-4.69l83.67-83.66l3.48 13.9l-36.8 36.79a8 8 0 0 0 11.31 11.32l40-40a8 8 0 0 0 2.11-7.6l-6.9-27.61L227.32 96a16 16 0 0 0 0-22.63M48 208v-28.69L76.69 208Zm48-3.31L51.31 160L136 75.31L180.69 120Zm96-96L147.32 64l24-24L216 84.69Z" />
                                </g>
                              </svg>
                            </div>
                          </button>
                          <button>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fill="currentColor"
                                  d="M8.5 4h3a1.5 1.5 0 0 0-3 0m-1 0a2.5 2.5 0 0 1 5 0h5a.5.5 0 0 1 0 1h-1.054l-1.194 10.344A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM5.741 15.23A2 2 0 0 0 7.728 17h4.544a2 2 0 0 0 1.987-1.77L15.439 5H4.561zM8.5 7.5A.5.5 0 0 1 9 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5M12 8a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                                />
                              </svg>
                            </div>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="flex place-content-between">
            {Object.keys(softwares).length > 0 && (
              <p>
                {(pageInfo.page - 1) * pageStep + 1} -{" "}
                {(pageInfo.page - 1) * pageStep +
                  softwares[pageInfo.page].length}{" "}
                of {total} items
              </p>
            )}
            <div className="flex">
              <button
                onClick={() => {
                  if (pageInfo.page <= 1) return;
                  setPageInfo({
                    page: pageInfo.page - 1,
                    last: softwares[pageInfo.page - 1][
                      softwares[pageInfo.page - 1].length - 1
                    ].name,
                    url: pageInfo.url,
                    search: query,
                  });
                }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  // console.log(softwares);
                  if (Object.keys(softwares).length <= pageInfo.page) {
                    getSoftwares({
                      page: pageInfo.page + 1,
                      last: pageInfo.last,
                      url: pageInfo.url,
                      search: query,
                    });
                  } else {
                    setPageInfo({
                      page: pageInfo.page + 1,
                      last: softwares[pageInfo.page + 1][
                        softwares[pageInfo.page + 1].length - 1
                      ].name,
                      url: pageInfo.url,
                      search: query,
                    });
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
