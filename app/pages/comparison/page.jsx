"use client";

import FilterComponent from "./components/filter";
import ComparisonItems from "./components/comparison_item";
import CircularProgress from "./components/circular_progress";
import TapComponent from "./components/tap_component";
import ReviewBox from "./components/review_box";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";

export default function ComparisonPage() {
  const [start, setStart] = useState(0);
  const [range, setRange] = useState(3); //the number of gap between two items
  const [products, setProducts] = useState([]);
  const [comparingItems, setCompItems] = useState({
    overview: true,
    feature: true,
    customization: true,
    integration: true,
    scalability: true,
    freetrial: true,
    support: true,
    pricing: true,
    maturity: true,
    review: true,
    top: "overview",
    bottom: "review",
  });
  const [geminiText, setGeminiText] = useState("");
  const [comparArr, setComparArr] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) setRange(3);
      else if (window.innerWidth > 800 && window.innerWidth <= 1100)
        setRange(2);
      else setRange(1);
    });
  });

  useEffect(() => {
    const tids = localStorage.getItem("ait_soft_ids").split(",");
    async function getDataRef() {
      try {
        let ids = [];
        tids.forEach((id) => {
          if (!isNaN(parseInt(id))) {
            ids.push(id);
          }
        });
        if (ids.length == 0) throw new Error();

        const data = await fetch("/api/software", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ids: ids }),
        });
        const temp = await data.json();
        const tdata = temp.data;
        let tproduct = [];
        ids.forEach((id) => {
          tdata.forEach((prod) => {
            if (prod.id == id) {
              tproduct.push(prod);
            }
          });
        });
        setProducts(tproduct);
      } catch (e) {
        router.push("/pages/mainCategories");
      }
    }
    getDataRef();
    testGemini();
  }, []);

  const testGemini = async () => {
    let names = "";
    let tnames = [];
    try {
      names = localStorage.getItem("ait_soft_names");
      tnames = names.split(",");
      console.log(tnames);
      if (tnames.length == 0 || tnames[0] == "") throw new Error();
    } catch (e) {
      router.push("/pages/mainCategories");
    }

    let cont = true;
    let text = "";
    let arrText = [];
    let arrData = [];
    while (cont) {
      arrText = [];
      arrData = [];
      text = "";
      try {
        const temp = await fetch("/api/compare", {
          method: "POST",
          body: JSON.stringify({
            prompt: `compare ${names}. please give answer in sections including overview, feature, customization, integration, scalability, maturity, support, price (is it cheap, moderate or expensive?), and free trial. seperate answer for each ai. mark the end of each ai with @ and mark the end of answer with @`,
          }),
        });
        const res = await temp.json();
        text = res.result;
        text = text.replaceAll("*", "");
        text = text.replaceAll("#", "");
        arrText = text.split(new RegExp("Overview:", "i"));
        for (let t = 0; t < arrText.length; t++) {
          if (t > 0) {
            arrData.push([arrText[t]]);
          }
        }
        const aspects = [
          "Features:",
          "Customization:",
          "Integration:",
          "Scalability:",
          "Maturity:",
          "Support:",
          "Price:",
          "Free Trial:",
          "@",
        ];
        aspects.forEach((item, index) => {
          for (let t = 0; t < arrData.length; t++) {
            let temp = arrData[t];
            let last = temp.pop();
            temp.push(...last.split(new RegExp(item, "i")));
          }
          if (index == aspects.length - 1) {
            for (let t = 0; t < arrData.length; t++) {
              arrData[t].pop();
            }
          }
        });

        console.log(arrData);

        let count = 0;
        arrData.forEach((item) => {
          if (item.length == 9) {
            count += 1;
          }
        });
        if (count == tnames.length) cont = false;
      } catch (e) {}
    }

    setGeminiText(text);
    setComparArr(arrData);
  };

  return (
    <div className="w-[640px] sm:w-full font-dmsan">
      {/* <p>The Gemini Text is here!</p>
      <p className=" whitespace-break-spaces">{geminiText}</p> */}
      <div className="w-full bg-black">
        <div className="grid grid-cols-2 p-10">
          <p className="text-[#1DCDFE] text-3xl font-semibold">
            Products Comparision
          </p>
          {/* <div className="text-black px-3 py-1 bg-[#D9D9D9] rounded-full flex w-full">
            <div className="pr-1 pt-1">
              <iconify-icon icon="bi:search"></iconify-icon>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter service name..."
              className="outline-none bg-transparent w-full ml-2"
            />
          </div> */}
        </div>
      </div>

      {/* <FilterComponent></FilterComponent> */}

      <p className="text-3xl font-semibold ml-10 mt-7">
        {"Let's us help you find the perfect product!"}
      </p>
      <div className={`w-full bg-[#F7F8FA] mt-7 px-6 xl:px-10 py-5`}>
        <div className="border-2 border-[#E3E6EA] rounded-2xl p-4">
          <div className="w-full flex">
            <div className="w-[30%] rounded-2xl bg-white shadow-md">
              <ComparisonItems
                comparingItems={comparingItems}
                setCompItems={setCompItems}
              />
            </div>
            <div className="w-[70%] ml-10">
              <p className="text-3xl font-semibold mt-3">Comparing</p>
              <p className="text-[#4A4A4A]">
                See more below to select the best content marketing software.
              </p>
              {products.length == 0 ? (
                <div className="flex place-items-center place-content-center pt-4 text-[80px]">
                  <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                </div>
              ) : (
                <div className="flex place-items-center justify-evenly pt-4 font-dmsan">
                  {start > 0 && (
                    <button
                      onClick={() => {
                        if (start > 0) {
                          setStart(start - 1);
                        }
                      }}
                      className="rounded-full border-[1px] border-baselight p-1 hover:bg-slate-200 active:bg-slate-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z"
                        />
                      </svg>
                    </button>
                  )}
                  <div className="flex-1 flex place-items-center justify-evenly font-dmsan">
                    {products.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <React.Fragment key={index}>
                          <p className={index > start ? "block" : "hidden"}>
                            VS
                          </p>
                          <div className="flex flex-col place-items-center">
                            <div className="bg-white p-7 border-[1px] border-[#E3E6EA] w-36 h-36 flex place-content-center rounded-lg">
                              <img src={item.icon} alt="" className="h-full" />
                            </div>
                            <p className="text-2xl font-medium text-center">
                              {item.name}
                            </p>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                  {start + range < products.length - 1 && (
                    <button
                      onClick={() => {
                        if (start + range < products.length - 1) {
                          setStart(start + 1);
                        }
                      }}
                      className="rounded-full border-[1px] border-baselight p-1 hover:bg-slate-200 active:bg-slate-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="currentColor"
                          d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-2xl overflow-clip mt-8">
            {comparingItems.overview && (
              <div
                className={`bg-white text-basedark py-6 px-10 h-80 flex flex-col border-b-[1px] border-divider`}
              >
                <p className="text-2xl font-semibold relative text-black">
                  Overview
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      {"Software's introduciton"}
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[0]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.feature && (
              <div className="bg-white text-basedark py-6 px-10 h-80 flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Feature
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      {"Software's features"}
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[1]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.customization && (
              <div className="bg-white text-basedark py-6 px-10 h-64 flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Customization
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      Allow customization
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[2]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.integration && (
              <div className="bg-white text-basedark py-6 px-10 h-64 flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Integration
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      Ease of integration
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[3]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.scalability && (
              <div className="bg-white text-basedark py-6 px-10 h-64 flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Scalability
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      Is it scalable?
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[4]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.maturity && (
              <div className="bg-white text-basedark py-6 px-10 h-64 flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Maturity
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      The maturity of the software
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[5]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.support && (
              <div className="bg-white text-basedark py-6 px-10 h-64 flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Support
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      Is there support?
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[6]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.pricing && (
              <div className="bg-white text-basedark py-6 px-10 h-[20rem] flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Pricing
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      {"Software's Pricing"}
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[7]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.freetrial && (
              <div className="bg-white text-basedark py-6 px-10 h-80 flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Free Trial
                </p>
                <div className="flex flex-1">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="flex-1 flex place-items-center">
                      {"Software's free trial offering"}
                    </p>
                  </div>
                  {comparArr.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    comparArr.map((item, index) => {
                      if (index < start || index > start + range) return;
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          <div className="text-center px-5 line-clamp-6 whitespace-break-spaces">
                            {item[8]}
                          </div>
                          <Link
                            href={`/pages/software_page?id=${item.id}`}
                            className="font-bold text-link"
                          >
                            Learn More
                          </Link>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}

            {comparingItems.review && (
              <div className="bg-white text-basedark py-6 px-10 flex flex-col border-b-[1px] border-divider">
                <p className="text-2xl font-semibold relative text-black">
                  Reviews
                </p>
                <div className="flex flex-1 mt-5">
                  <div className="flex-1 flex flex-col justify-around">
                    <p className="">Likelihood to recommend</p>
                  </div>
                  {products.length == 0 ? (
                    <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                      <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                    </div>
                  ) : (
                    products.map((item, index) => {
                      if (index < start || index > start + range) return;
                      const features = Object.keys(item.features.reviews);
                      return (
                        <div
                          key={index}
                          className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                        >
                          {features.map((feature, findex) => {
                            if (item.features.reviews[feature].review == "1") {
                              return (
                                <ReviewBox
                                  key={findex}
                                  imgs="/write_review/profile_1.png"
                                  name="Kamio Fuju"
                                  title="Digital Researcher"
                                  id={item.id}
                                />
                              );
                            } else if (
                              item.features.reviews[feature].review == "2"
                            ) {
                              return (
                                <ReviewBox
                                  key={findex}
                                  imgs="/write_review/profile_2.png"
                                  name="岩瀬洋志"
                                  title="Digital Researcher"
                                  id={item.id}
                                />
                              );
                            } else {
                              return (
                                <div
                                  key={findex}
                                  className="flex place-content-center place-items-center"
                                >
                                  No Review Yet!
                                </div>
                              );
                            }
                          })}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            )}
          </div>

          {/* <div className="bg-white text-basedark rounded-t-2xl py-6 px-10 mt-8 h-[27rem] flex flex-col border-b-[1px] border-divider">
            <p className="text-2xl font-semibold relative text-black">
              Functions
            </p>
            <div className="flex flex-1">
              <div className="flex-1 flex flex-col justify-around">
                <p className="flex-1 flex place-items-center">File Sharing</p>
                <p className="flex-1 flex place-items-center">
                  Document Collaboration
                </p>
                <p className="flex-1 flex place-items-center">Search</p>
                <p className="flex-1 flex place-items-center">Messaging</p>
                <p className="flex-1 flex place-items-center">
                  Task Management
                </p>
              </div>
              {products.length == 0 ? (
                <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                  <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                </div>
              ) : (
                products.map((item, index) => {
                  if (index < start || index > start + range) return;
                  const features = Object.keys(item.features.function);
                  return (
                    <div
                      key={index}
                      className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                    >
                      {features.map((feature, findex) => {
                        if (item.features.function[feature].rating) {
                          return <CircularProgress key={findex} />;
                        } else {
                          return (
                            <div
                              key={findex}
                              className="w-16 h-16 flex place-content-center place-items-center"
                            >
                              N/A
                            </div>
                          );
                        }
                      })}
                    </div>
                  );
                })
              )}
            </div>
          </div>  

          <div className="bg-white text-basedark py-6 px-10 h-[27rem] flex flex-col border-b-[1px] border-divider">
            <p className="text-2xl font-semibold relative text-black">
              Ratings
            </p>
            <div className="flex flex-1">
              <div className="flex-1 flex flex-col justify-around">
                <p className="flex-1 flex place-items-center">Satifaction</p>
                <p className="flex-1 flex place-items-center">Ease of use</p>
                <p className="flex-1 flex place-items-center">
                  Support quality
                </p>
                <p className="flex-1 flex place-items-center">Price</p>
                <p className="flex-1 flex place-items-center">
                  Ease of implementation
                </p>
              </div>
              {products.length == 0 ? (
                <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                  <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                </div>
              ) : (
                products.map((item, index) => {
                  if (index < start || index > start + range) return;
                  const features = Object.keys(item.features.rating);
                  return (
                    <div
                      key={index}
                      className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                    >
                      {features.map((feature, findex) => {
                        if (item.features.rating[feature].rating) {
                          return <CircularProgress key={findex} />;
                        } else {
                          return (
                            <div
                              key={findex}
                              className="w-16 h-16 flex place-content-center place-items-center"
                            >
                              N/A
                            </div>
                          );
                        }
                      })}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="bg-white text-basedark py-6 px-10 h-[20rem] flex flex-col border-b-[1px] border-divider">
            <p className="text-2xl font-semibold relative text-black">
              Pricing
            </p>
            <div className="flex flex-1">
              <div className="flex-1 flex flex-col justify-around">
                <p className="flex-1 flex place-items-center">Free</p>
                <p className="flex-1 flex place-items-center">Free trial</p>
                <p className="flex-1 flex place-items-center">Paid/premium</p>
              </div>
              {products.length == 0 ? (
                <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                  <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                </div>
              ) : (
                products.map((item, index) => {
                  if (index < start || index > start + range) return;
                  const features = Object.keys(item.features.pricing);
                  return (
                    <div
                      key={index}
                      className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                    >
                      {features.map((feature, findex) => {
                        if (item.features.pricing[feature].value == true) {
                          return (
                            <div
                              key={findex}
                              className="w-16 h-16 flex place-content-center place-items-center text-4xl text-cyan"
                            >
                              <iconify-icon icon="dashicons:yes"></iconify-icon>
                            </div>
                          );
                        } else if (
                          item.features.pricing[feature].value == false
                        ) {
                          return (
                            <div
                              key={findex}
                              className="w-16 h-16 flex place-content-center place-items-center text-4xl text-red"
                            >
                              <iconify-icon icon="dashicons:no"></iconify-icon>
                            </div>
                          );
                        } else {
                          return (
                            <div
                              key={findex}
                              className="w-16 h-16 flex place-content-center place-items-center"
                            >
                              N/A
                            </div>
                          );
                        }
                      })}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          <div className="bg-white text-basedark py-6 px-10 flex flex-col border-b-[1px] border-divider">
            <p className="text-2xl font-semibold relative text-black">
              Reviews
            </p>
            <div className="flex flex-1 mt-5">
              <div className="flex-1 flex flex-col">
                <p className="">Likelihood to recommend</p>
              </div>
              {products.length == 0 ? (
                <div className="flex flex-1 place-items-center pt-4 text-[80px]">
                  <iconify-icon icon="svg-spinners:3-dots-fade"></iconify-icon>
                </div>
              ) : (
                products.map((item, index) => {
                  if (index < start || index > start + range) return;
                  const features = Object.keys(item.features.reviews);
                  return (
                    <div
                      key={index}
                      className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider"
                    >
                      {features.map((feature, findex) => {
                        if (item.features.reviews[feature].review == "1") {
                          return (
                            <ReviewBox
                              key={findex}
                              imgs="/write_review/profile_1.png"
                              name="Kamio Fuju"
                              title="Digital Researcher"
                            />
                          );
                        } else if (
                          item.features.reviews[feature].review == "2"
                        ) {
                          return (
                            <ReviewBox
                              key={findex}
                              imgs="/write_review/profile_2.png"
                              name="岩瀬洋志"
                              title="Digital Researcher"
                            />
                          );
                        } else {
                          return (
                            <div
                              key={findex}
                              className="flex place-content-center place-items-center"
                            >
                              No Answer
                            </div>
                          );
                        }
                      })}
                    </div>
                  );
                })
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
