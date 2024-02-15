"use client";

import { useEffect, useState } from "react";

export default function TestDashboard() {
  const [softwares, setSoftwares] = useState({});
  const [pageInfo, setPageInfo] = useState({ page: 1, last: "" });

  useEffect(() => {
    getSoftwares(pageInfo);
  }, []);

  const getSoftwares = async (pageInfo) => {
    const temp = await fetch("/api/software/pagination", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pageInfo),
    });
    const res = await temp.json();
    console.log(res);

    let st = softwares;
    st[pageInfo.page] = res.softwares;
    setSoftwares(st);
    setPageInfo({
      page: pageInfo.page,
      last: res.softwares[res.softwares.length - 1].name,
    });
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
            <div>search</div>
            <div>filter</div>
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
                          <div>edit</div>
                          <div>delete</div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className="flex place-content-between">
            <p>1 - 8 of 40 items</p>
            <div className="flex">
              <button
                onClick={() => {
                  if (pageInfo.page <= 1) return;
                  setPageInfo({
                    page: pageInfo.page - 1,
                    last: softwares[pageInfo.page - 1][
                      softwares[pageInfo.page - 1].length - 1
                    ].name,
                  });
                }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  // console.log(softwares);
                  // console.log(pageInfo.page + 1);
                  if (Object.keys(softwares).length <= pageInfo.page) {
                    console.log("CAll from NExt");
                    getSoftwares({
                      page: pageInfo.page + 1,
                      last: pageInfo.last,
                    });
                  } else {
                    console.log(pageInfo.page);
                    setPageInfo({
                      page: pageInfo.page + 1,
                      last: softwares[pageInfo.page + 1][
                        softwares[pageInfo.page + 1].length - 1
                      ].name,
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
