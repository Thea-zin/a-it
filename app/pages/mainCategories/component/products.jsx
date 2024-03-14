"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Products() {
  const [allowComp, setAllowComp] = useState(false);
  const [tids, setTids] = useState([]);
  const [names, setNames] = useState([]);
  const [softwares, setSoftwares] = useState([]);
  const [startAfter, setStartAfter] = useState("");
  const [startAt, setStartAt] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [total, setTotal] = useState(0);
  const pageStep = 12;

  function addIds(id, name, add) {
    let tempid = tids;
    let tempnames = names;
    if (add) {
      tempid.push(id);
      tempnames.push(name);
    } else {
      const idindex = tempid.indexOf(id);
      const nameindex = tempnames.indexOf(name);
      if (idindex >= 0 || nameindex >= 0) {
        tempid.splice(idindex, 1);
        tempnames.splice(nameindex, 1);
      }
    }

    localStorage.setItem("ait_soft_ids", tempid.join());
    localStorage.setItem("ait_soft_names", tempnames.join());

    if (tempid.length == 0 || tempnames.length == 0) {
      setAllowComp(false);
    } else {
      setAllowComp(true);
    }

    setTids(tempid);
    setNames(tempnames);
  }

  useEffect(() => {
    localStorage.setItem("ait_soft_ids", "");
    localStorage.setItem("ait_soft_names", "");

    getSoftwares();
  }, []);

  useEffect(() => {
    console.log(softwares);
  }, [softwares]);

  const getSoftwares = async () => {
    const temp = await fetch("/api/software/products", {
      method: "POST",
      body: JSON.stringify({ isLoadMore: false, pageNumber: 1 }),
    });
    const res = await temp.json();

    console.log(res);

    setStartAfter(res.softwares[res.softwares.length - 1].nci);
    setSoftwares(res.softwares);
    setTotal(res.total);
  };

  const getNextPage = async () => {
    try {
      const temp = await fetch("/api/software/products", {
        method: "POST",
        body: JSON.stringify({ isLoadMore: false, pageNumber: pageNumber + 1 }),
      });
      const res = await temp.json();

      if (res.softwares.length != 0) {
        console.log("Get next page condition break throug!");
        setPageNumber(pageNumber + 1);
        setSoftwares(res.softwares);
      }
    } catch (e) {}
  };

  const getPreviousPage = async () => {
    try {
      if (pageNumber <= 1) {
        return;
      }
      const temp = await fetch("/api/software/products", {
        method: "POST",
        body: JSON.stringify({ isLoadMore: false, pageNumber: pageNumber - 1 }),
      });
      const res = await temp.json();

      setPageNumber(pageNumber - 1);
      setSoftwares(res.softwares);
    } catch (e) {}
  };

  return (
    <div>
      {/* <div className="mt-10">
        <div className="text-3xl font-medium ml-10">What is your problem ?</div>
        <div className="box-service">
          <div className="text ml-10 p-2 mt-5 mb-5">
            {
              'You can choose the appropriate IT category based on common business challenges and objectives. Choose the most appropriate IT products and services based on your specific objectives, such as " paperless " to reduce costs or " personnel planning that takes advantage of employees strengths and backgrounds " to utilize human resources.'
            }
          </div>
          <div className="pr-10 pl-10 ">
            <div className="box bg-black h-64 rounded-xl p-5 mt-5">
              <button
                type="checkbox"
                className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5 active:bg-white focus:bg-none border-[#1DCDFE]"
              >
                Cost Reduction
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2 ml-3 text-xs mt-5">
                Sales expansion/marketing
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Utilization of human resources
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Security risk management
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Work style reform/improvement of productivity
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Cost Concerns
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Integration Issues
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                User Adoption
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Customization
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Security and Compliance
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Vendor Reliability
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Performance and Reliability
              </button>
              <button className="bg-[#1DCDFE] rounded-full text-[#2F455C] p-2  ml-3 text-xs mt-5">
                Legacy Systems
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="itemes bg-[#F7F8FA]">
        <div className="md:flex p-8 ml-5">
          <div className="min-w-[260px]">
            <div className="filter  bg-white rounded-xl p-8 ">
              <div className="flex justify-between ">
                <div className="font-bold">Filters </div>
                <div className="font-medium text-xs items-center text-[#4A4A4A] border-b-2- ">
                  <button>Reset Filter</button>
                </div>
              </div>

              <div className="software mt-5">
                <div className="title mt-5 font-semibold">Software Rating </div>
                <div className="checkbox mt-5">
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 bg-[#2F455C] flex items-center p-1 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="text-white font-bold">4.4</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 bg-[#2F455C] flex items-center p-1 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="text-white font-bold">4.5 & above</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 bg-[#2F455C] flex items-center p-1 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 "
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="text-white font-bold">2.5 & above</div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="busineses">
                <div className="title mt-5 font-semibold">Business type</div>
                <div className="checkbox mt-5">
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">Student</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black">Start Up</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">Freelancer</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">SMEs</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">Agency</div>
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-2 text-sm font-medium text-[#EDA42D] dark:text-gray-300 flex items-center p-1 rounded-lg"
                    >
                      <div className="text-black ">Enterprise</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="filter  bg-[#2F455C] rounded-t-xl p-8 mt-5 text-white">
              <div className="text text-xl font-bold text-center text-white ">
                <p>Have Questions?</p>
                <p>{"Let's us help!"}</p>
              </div>
              <div className="text-center mt-3 text-sm">
                <p>Get personalized recommedations</p>
                <p>from our expert on cells!</p>
              </div>
            </div>
            <div className="filter  bg-white rounded-b-xl p-8">
              <div className="grid grid-cols-1 gap-4 mt-5">
                <input
                  type="text"
                  className="w-full h-9 rounded-full border-solid border-2 border-[#4b5563] placeholder-[#6b7280] p-5"
                  placeholder="Name*"
                />
                <input
                  type="text"
                  className="w-full h-9 rounded-full border-solid border-2 border-[#4b5563] placeholder-[#6b7280] p-5"
                  placeholder="Email*"
                />
                <div className="flex rounded-full border-solid border-2 border-[#4b5563] p-2">
                  <img
                    src="../photo/icon/cambodia.png"
                    alt=""
                    className="border-r-2 border-solid border-[#4b5563] mr-5 p-1 "
                  />
                  <input
                    type="text"
                    className="w-full  placeholder-[#6b7280] "
                    placeholder="Mobile Phone *"
                  />
                </div>
              </div>
              <div className="btn mt-5">
                <button className="bg-[#2F455C] p-3 rounded-full w-full text-white font-semibold">
                  Get Offer
                </button>
              </div>
              <div className="text text-sm mt-3 text-center">
                <p>
                  By submitting, you agree to our{" "}
                  <span className="text-[#005FC1]">Terms and Condition</span>{" "}
                  and <span className="text-[#005FC1]"> Privacy Policy</span>{" "}
                </p>
              </div>
            </div> */}
          </div>

          <div className="w-full flex-1">
            <div className="text ml-5">
              {/* <div className="font-bold text-2xl">
                Best Content Marketing Software
              </div>
              <div className="text-[#4A4A4A] mb-5">
                See more below to select the best Content Marketing software.
              </div> */}

              <div className="popular bg-white rounded-2xl p-6 border-2 border-gray">
                <div className="flex place-content-center min-h-[50px]">
                  <div>
                    <Link
                      href={{
                        pathname: "/pages/comparison",
                        query: {},
                      }}
                      className={`bg-[#4A4A4A] p-2 rounded-lg font-semibold text-white hover:bg-white border-2 border-solid border-[#black] hover:text-black ${
                        allowComp ? "" : "pointer-events-none"
                      }`}
                    >
                      Comparison
                    </Link>
                  </div>
                </div>

                <div className="ml-4 min-h-[735px] relative">
                  <div className="grid grid-cols-2 s900:grid-cols-3 lg:grid-cols-4 gap-5 ">
                    {softwares.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border border-gray p-3 rounded-lg  font-semibold  hover:bg-[#1e293b] hover:text-white"
                        >
                          <div className="flex justify-between">
                            <p>{item.name}</p>
                            <div className="flex items-center mb-4 rounded-full">
                              <input
                                onChange={(event) => {
                                  addIds(
                                    item.id,
                                    item.name,
                                    event.currentTarget.checked
                                  );
                                }}
                                id="default-checkbox"
                                type="checkbox"
                                value=""
                                className="w-4 h-4 bg-white border-white rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2  "
                              />
                            </div>
                          </div>
                          <div className="star flex">
                            {[1, 2, 3, 4, 5].map((it, ind) => {
                              return (
                                <svg
                                  width="18"
                                  height="17"
                                  viewBox="0 0 18 17"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  key={ind}
                                >
                                  <path
                                    d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z"
                                    fill="#F3B146"
                                  />
                                </svg>
                              );
                            })}
                            <p className="text-gray">(2,145)</p>
                          </div>
                          <Link
                            href={{
                              pathname: "/pages/software_page",
                              query: { id: 8 },
                            }}
                            className="pic flex justify-center my-5 "
                          >
                            <img src={item.icon} alt="" className="h-20" />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                  <div className="h-[100px]"></div>
                  <div className="flex place-items-center place-content-center mt-10 absolute bottom-0 w-full">
                    {pageNumber > 1 && (
                      <button
                        className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center"
                        onClick={() => {
                          getPreviousPage();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.7em"
                          height="1.7em"
                          viewBox="0 0 48 48"
                          className="fill-transparent"
                        >
                          <g
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="4"
                          >
                            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                            <path strokeLinecap="round" d="m27 33l-9-9l9-9" />
                          </g>
                        </svg>
                      </button>
                    )}
                    {[1, 2, 3].map((item, index) => {
                      return (
                        <button
                          key={index}
                          className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-7 xm:w-9 md:w-12 h-7 xm:h-9 md:h-12 rounded-full"
                        >
                          {item}
                        </button>
                      );
                    })}
                    {pageNumber != Math.ceil(total / pageStep) && (
                      <button
                        className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center"
                        onClick={() => {
                          getNextPage();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.7em"
                          height="1.7em"
                          viewBox="0 0 48 48"
                          className="fill-transparent"
                        >
                          <g
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="4"
                          >
                            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                            <path strokeLinecap="round" d="m21 33l9-9l-9-9" />
                          </g>
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              {/* <div className="popular bg-white rounded-2xl p-6 border-2 border-gray mt-5">
                <div className="text mb-5">
                  <div className="font-semibold text-2xl">Popular Product</div>
                  <div className="text-[#4A4A4A] ">
                    Popular Content Analytics products used by Content Marketing
                    professionals.
                  </div>
                </div>
                <div className="ml-4">
                  <CardItem2 addIds={addIds}></CardItem2>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
