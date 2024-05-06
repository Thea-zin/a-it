"use client";

import ReviewBox from "./components/review_box";
import Item from "./components/item";
import TapSoftwareComponent from "./components/tap_component";
import Stars from "./components/star_display";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { startAfter } from "firebase/firestore";

export default function SoftwarePage() {
  const [data, setData] = useState({
    name: "",
    icon: "",
    fullcategories: [],
    site: "",
  });
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tap, setTap] = useState(0);
  const [text, setText] = useState({ text: "" });
  const [softwareToCompare, setSoftwareToCompare] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reviewPageNumber, setReviewPageNumber] = useState(0);
  const [startAfterList, setStartAfterList] = useState([0]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [totalReviews, setTotalReviews] = useState(0);
  const [loadingGemini, setLoadingGemini] = useState(false);
  const searchParams = useSearchParams();

  const router = useRouter();

  // populate()

  useEffect(() => {
    getData();
    // console.log(searchParams.get("id"));
  }, [searchParams]);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useEffect(() => {
    console.log(text);
    try {
      document.getElementById("softwareOverview").innerHTML = text.text;
    } catch (e) {}
  }, [text]);

  useEffect(() => {
    try {
      if (tap == 0) {
        document.getElementById("softwareOverview").innerHTML = text.text;
      }
    } catch (e) {}
  }, [tap]);

  useEffect(() => {
    console.log(startAfterList);
  }, [startAfterList]);

  const getData = async () => {
    try {
      setLoading(true);
      setText("");

      const temp = await fetch("/api/automation/software", {
        method: "POST",
        body: JSON.stringify({ id: searchParams.get("id") }),
      });
      const res = await temp.json();
      // console.log(res.data);
      if (res.data.name != null && res.data.name != "") {
        gemini(res.data);
      }
      getSameCategories(res.data);
      // getAllCategories();
      setData(res.data);
      setCategories(res.data.othercategories);
      getReivews(res.data.id);
    } catch (e) {
      console.log("Problem Occurs! Possible cause: id, network");
    }
  };

  const getReivews = async (id) => {
    const temp = await fetch("/api/automation/review/pagination", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        startAfter: startAfterList[0],
      }),
    });
    const res = await temp.json();
    setReview([...res.data]);
    setTotalReviews(res.total);

    if (res.data.length > 0) {
      let tplist = startAfterList;
      tplist.push(res.data[res.data.length - 1].timestamp);
      setStartAfterList([...tplist]);
    } else {
      setShowLoadMore(false);
    }
  };

  const loadMore = async () => {
    const temp = await fetch("/api/automation/review/pagination", {
      method: "POST",
      body: JSON.stringify({
        id: data.id,
        startAfter: startAfterList[reviewPageNumber + 1],
      }),
    });
    const res = await temp.json();

    if (res.data.length > 0) {
      let tplist = startAfterList;
      tplist.push(res.data[res.data.length - 1].timestamp);
      setStartAfterList([...tplist]);
      setReviewPageNumber(reviewPageNumber + 1);

      tplist = reviews.concat(res.data);
      setReview([...tplist]);
    } else {
      setShowLoadMore(false);
    }
  };

  const getSameCategories = async (software) => {
    const temp = await fetch("/api/automation/samecategory", {
      method: "POST",
      body: JSON.stringify(software),
    });
    const res = await temp.json();

    setSoftwareToCompare([...res.softwares]);
  };

  const gemini = async (software) => {
    const temp = await fetch("/api/gemini", {
      method: "POST",
      body: JSON.stringify({
        prompt: `What is an ai tool called ${software.name}? what is it use for? what are its business values? make it as detail as possible. For your information, these are the products' categories: ${software.fullcategorieslink}`,
        nci: software.nci,
        id: software.id,
      }),
    });

    if (temp.status != 200) {
      setText({
        text: "Overivew cannot be generated! Please try again later!",
      });
      setLoadingGemini(false);
      return;
    }

    // const temp = await fetch("/api/gemini", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     prompt: `please introduce ${name}. describe it as you would to normal user and business user. make it a very detailed answer.`,
    //   }),
    // });

    try {
      const res = await temp.json();
      let temptext = res.result;
      var regex = /(?<=\*\*)(.*?)(?=\*\*)/g;
      const textarr = [...temptext.matchAll(regex)];
      // console.log(textarr);
      textarr.forEach((title) => {
        temptext = temptext.replace(
          `**${title[0]}**`,
          "<b>" + title[0] + "</b>"
        );
      });
      setText({ text: temptext });
    } catch (e) {
      setText({
        text: "Overivew cannot be generated! Please try again later!",
      });
    }
    setLoadingGemini(false);
  };

  return loading ? (
    <div className="shadow rounded-md p-4 w-full mx-auto h-[600px] min-w-[500px]">
      <p
        className="font-medium text-xs xm:text-nbase whitespace-break-spaces invisible"
        id="softwareOverview"
      ></p>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
            return (
              <div className="space-y-3" key={index}>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`sm:px-2 xl:px-10 pt-7 pb-10 bg-base font-dmsan min-w-[500px] ${
        loading && "animate-pulse"
      }`}
    >
      <div className="">
        <img
          src="/write_review/software_hero.png"
          alt=""
          className="hidden sm:block"
        />
        <img
          src="/write_review/software_hero_mobile.png"
          alt=""
          className="sm:hidden"
        />
      </div>
      <div className="flex bg-white justify-between px-3 sm:px-8 relative min-h-40 xm:h-52 lg:h-auto ">
        <div className="flex">
          <div className="p-2 xm:p-5 sm:p-7 w-20 xm:w-28 sm:w-[9.3rem] h-20 xm:h-28 sm:h-[9.3rem] border-[1px] border-divider -translate-y-5 sm:-translate-y-8 bg-white flex rounded-lg place-content-center">
            <img
              src={data.icon}
              alt=""
              placeholder=""
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="ml-5 mt-1 pb-10">
            <p className="text-xl sm:text-3xl font-semibold">{data.name}</p>
            <div className="xm:flex mt-2 sm:mt-4 place-items-center">
              <Stars number={data.star} />
              <p className="xm:border-l-[1px] xm:pl-2 border-divider text-sm sm:text-[1rem] font-semibold text-bblue">
                {`${totalReviews} reviews`}
              </p>
            </div>
            <div className="flex flex-wrap place-items-center mt-2 text-darkgray">
              {data.fullcategories.map((cat, index) => {
                let category = cat.split("!បំបែក!");
                category = category[0];
                return (
                  <div
                    className="font-semibold text-sm ml-2 p-1 border-[1px] border-darkblue rounded-full"
                    key={index}
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:block hidden py-5 px-12 bg-base text-center my-6 rounded-2xl shadow">
          <p className="text-darkblue font-medium text-2xl">
            Hard to make a dicision?
          </p>
          <p className="font-medium">Compare with other products</p>
          <button
            className={`bg-darkblue mt-4 text-white text-xl font-semibold py-3 px-20 rounded-full ${
              data.name == "" && "invisible"
            }`}
            onClick={() => {
              localStorage.setItem(
                "ait_soft_comp",
                `${data.id},${data.name},${data.icon}`
              );
              router.push("categories");
            }}
          >
            Compare
          </button>
        </div>

        <div className="absolute bottom-0 right-0 left-0 lg:block flex place-content-center">
          <TapSoftwareComponent
            id={searchParams.get("id")}
            tap={tap}
            setTap={setTap}
          />
        </div>
      </div>

      <hr className="border-divider" />

      <div className="lg:flex xl:p-8 p-4 bg-white relative">
        {/* <div className="border-divider border-[1px] xl:w-[67%] lg:w-[63%] p-4 rounded-2xl">
          
        </div> */}

        {tap == 0 ? (
          <div className="border-divider border-[1px] xl:w-[67%] lg:w-[63%] p-4 rounded-2xl">
            {data.name != "" ? (
              data.site != "" ? (
                <div className="bg-base xm:p-7 p-3 mt-5 rounded-2xl flex place-content-center">
                  <a
                    style={{ display: "table-cell" }}
                    href={data.site}
                    target="_blank"
                    className="bg-darkblue px-10 py-5 text-lg font-bold text-white rounded-full"
                  >
                    {`Visit Website of ${data.name}`}
                  </a>
                </div>
              ) : (
                <div className="bg-base xm:p-7 p-3 mt-5 rounded-2xl flex place-content-center">
                  <p className="bg-yellow-300 px-10 py-5 text-lg font-bold text-darkblue rounded-full">
                    {`We cannot reach website of ${data.name}`}
                  </p>
                </div>
              )
            ) : (
              <Loading />
            )}

            {data.name != "" ? (
              <div className="relative bg-base xm:p-10 p-3 mt-5 rounded-2xl flex flex-col place-content-center place-items-center overflow-clip">
                <div className="absolute bg-darkblue text-white font-semibold top-5 -right-14 rotate-[30deg] py-1 px-16">
                  AIExploria
                </div>
                <div className="mb-8">
                  <img
                    src={data.aie_image}
                    alt=""
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-center">{data.aie_text}</p>
                </div>
              </div>
            ) : (
              <Loading />
            )}

            {text.text != "" && !loadingGemini ? (
              <div>
                <div className="bg-base xm:p-10 p-3 mt-5 rounded-2xl relative overflow-clip">
                  <div className="absolute bg-darkblue text-white font-semibold top-5 -right-14 rotate-[30deg] py-1 px-20">
                    Gemini
                  </div>
                  <div className="absolute bg-darkblue text-white font-semibold text-sm top-0 left-0 px-5 max-w-[80%] text-center">
                    {
                      "This overview is generated by Google's Gemini. Please beware of factual errors!"
                    }
                  </div>
                  <p className="text-[1rem] xm:text-2xl font-bold">{`${data.name} Overview`}</p>
                  <hr className="border-divider my-3" />
                  <p
                    className="font-medium text-xs xm:text-nbase whitespace-break-spaces"
                    id="softwareOverview"
                  ></p>
                  {text.text ==
                    "Overivew cannot be generated! Please try again later!" && (
                    <div className="flex place-content-center">
                      <button
                        className="my-5 px-10 py-3 text-white font-semibold bg-darkblue rounded-full"
                        onClick={() => {
                          setLoadingGemini(true);
                          gemini(data);
                        }}
                      >
                        Generate Again!
                      </button>
                    </div>
                  )}
                  <hr className="border-divider my-5" />
                </div>
              </div>
            ) : (
              <div className="bg-base xm:p-10 p-3 mt-5 rounded-2xl relative overflow-clip">
                <Loading />
                <div className="absolute bg-darkblue text-white font-semibold top-5 -right-14 rotate-[30deg] py-1 px-20">
                  Gemini
                </div>
                <div className="absolute bg-darkblue text-white font-semibold text-sm top-0 left-0 px-5 max-w-[80%] text-center">
                  {
                    "This overview is generated by Google's Gemini. Please beware of factual errors!"
                  }
                </div>
              </div>
            )}

            {data.name != "" ? (
              <div className="px-5 py-4 bg-base flex sm:flex-row flex-col justify-between mt-5 rounded-2xl place-items-center">
                <p className="text-basedark text-sm xm:text-nbase sm:ml-5 mb-3 sm:mb-0">
                  Software user?
                </p>
                <button className="bg-darkblue text-white text-sm xm:text-nbase sm:text-xl xl:text-2xl font-semibold py-4 px-5 xm:px-10 md:px-20 rounded-full">
                  <Link
                    href={`/pages/write_review_page?id=${searchParams.get(
                      "id"
                    )}`}
                  >
                    Write a Review
                  </Link>
                </button>
              </div>
            ) : (
              <div className="h-32 overflow-clip">
                <Loading />
              </div>
            )}
          </div>
        ) : (
          <div className="border-divider border-[1px] xl:w-[67%] lg:w-[63%] p-4 rounded-2xl">
            <div className="mt-5 bg-base pb-10 rounded-2xl overflow-hidden relative">
              <div className="absolute bg-darkblue text-white font-semibold text-sm top-0 left-0 px-5 w-full text-center">
                {
                  "These reviews are approved by Google's Gemini. Please beware of inappropriate comments!"
                }
              </div>
              {reviews.map((review, index) => {
                return <ReviewBox review={review} key={index} />;
              })}
            </div>
            <div className="flex place-items-center place-content-center gap-10">
              {showLoadMore && <button onClick={loadMore}>Load More</button>}
            </div>
          </div>
        )}

        <div className="lg:hidden py-5 xm:px-12 px-3 bg-base text-center my-6 rounded-2xl shadow">
          <p className="font-medium text-[1rem] xm:text-2xl text-darkblue ">
            Hard to make a dicision?
          </p>
          <p className="font-medium text-sm xm:text-[1rem]">
            Compare with other products
          </p>
          <button
            className={`bg-darkblue mt-4 text-white text-sm xm:text-xl font-semibold py-3 xm:px-20 px-10 rounded-full ${
              data.name == "" && "invisible"
            }`}
            onClick={() => {
              localStorage.setItem(
                "ait_soft_comp",
                `${data.id},${data.name},${data.icon}`
              );
              router.push("categories");
            }}
          >
            Compare
          </button>
        </div>

        <div className="flex-1 xl:ml-6 lg:ml-3">
          <div className="bg-base rounded-2xl pt-6">
            <p className="text-center text-[1rem] xm:text-2xl font-bold">
              Similar Tools
            </p>
            {softwareToCompare.length > 0 ? (
              <div className="lg:block flex place-content-center">
                <div className="mt-5 px-12 lg:w-auto w-96">
                  {softwareToCompare.map((item, index) => {
                    return <Item key={index} id={index} software={item} />;
                  })}
                </div>
              </div>
            ) : (
              <div className="mt-5 px-12">
                <Loading />
              </div>
            )}

            {/* <div className="flex place-content-center py-10">
              <button className="text-bblue font-semibold">See More</button>
            </div> */}
          </div>

          <div className="mt-5 bg-base pt-4 pb-8 rounded-2xl">
            <p className="font-semibold text-[1rem] xm:text-2xl text-center">
              Explore Other Categories
            </p>
            <div className="lg:block flex place-content-center">
              <div className="px-16 mt-6">
                {categories.map((item, index) => {
                  let cate = item.split("!បំបែក!");
                  return (
                    <Link
                      className="my-1 flex place-content-start items-center text-bblue mt-3"
                      key={index}
                      href="categories"
                      onClick={() => {
                        localStorage.setItem("ait_soft_cat", `${cate[1]}`);
                      }}
                    >
                      <div className="w-5 xm:w-10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.7em"
                          height="1.7em"
                          viewBox="0 0 48 48"
                          className=" stroke-blue-800 fill-transparent"
                        >
                          <g strokeLinecap="round" strokeWidth="4">
                            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" />
                            <path strokeLinecap="round" d="m21 33l9-9l-9-9" />
                          </g>
                        </svg>
                      </div>
                      <p className="text-left flex-1 text-sm xm:text-[1rem] ml-1 hover:text-blue-800 hover:font-bold">
                        {cate[0]}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="animate-pulse flex min-w-[70%] space-x-4">
      <div className="flex-1 space-y-6 py-1">
        <div className="h-2 bg-slate-200 rounded"></div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
          return (
            <div className="space-y-3" key={index}>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-200 rounded"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
