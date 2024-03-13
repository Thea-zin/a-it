"use client";

import ReviewBox from "./components/review_box";
import Item from "./components/item";
import TapSoftwareComponent from "./components/tap_component";
import Stars from "./components/star_display";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SoftwarePage({ searchParams }) {
  const [data, setData] = useState({ name: "", icon: "" });
  const [reviews, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  // let data = ;
  // let iconUrl = null;
  // let reviews = [];
  // populate()
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useEffect(() => {
    document.getElementById("softwareOverview").innerHTML = text;
  }, [text]);

  const getData = async () => {
    const temp = await fetch("/api/software", {
      method: "POST",
      body: JSON.stringify({ ids: [searchParams.id] }),
    });
    const res = await temp.json();
    // console.log(res);
    if (res.data[0].name != "" || res.data[0].name == null) {
      gemini(res.data[0].name);
    }
    setData(res.data[0]);
  };

  const gemini = async (name) => {
    // const temp = await fetch("/api/gemini", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     prompt: `please describe in detail about midjourney ai. what is it? what is it use for? its business values? who created it? when was it created? and so on. make it as detail as possible.`,
    //   }),
    // });
    const temp = await fetch("/api/gemini", {
      method: "POST",
      body: JSON.stringify({
        prompt: `please introduce ${name}. describe it as you would to normal user and business user. make it a very detailed answer.`,
      }),
    });
    const res = await temp.json();
    let temptext = res.result;
    var regex = /(?<=\*\*)(.*?)(?=\*\*)/g;
    const textarr = [...temptext.matchAll(regex)];
    console.log(textarr);
    textarr.forEach((title) => {
      temptext = temptext.replace(`**${title[0]}**`, "<b>" + title[0] + "</b>");
    });
    setText(temptext);
  };

  return loading ? (
    <div className="shadow rounded-md p-4 w-full mx-auto h-[600px] min-w-[460px]">
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
      className={`sm:px-2 xl:px-10 pt-7 pb-10 bg-base font-dmsan min-w-[460px] ${
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
      <div className="bg-white flex justify-between px-3 sm:px-8 relative h-40 xm:h-52 lg:h-auto ">
        <div className="flex">
          <div className="p-2 xm:p-5 sm:p-7 w-20 xm:w-28 sm:w-[9.3rem] h-20 xm:h-28 sm:h-[9.3rem] border-[1px] border-divider -translate-y-5 sm:-translate-y-8 bg-white flex rounded-lg place-content-center">
            <img src={data.icon} alt="" placeholder="" />
          </div>
          <div className="ml-5 mt-1">
            <p className="text-xl sm:text-3xl font-semibold">{data.name}</p>
            <div className="xm:flex mt-2 sm:mt-4 place-items-center">
              <Stars number={5} />
              <p className="xm:border-l-[1px] xm:pl-2 border-divider text-sm sm:text-[1rem] font-semibold text-bblue">
                9,872 reviews
              </p>
            </div>
            <button className="flex place-items-center mt-2 text-darkgray">
              <div className="text-[1rem] xm:text-2xl flex place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-sm ml-2">Save to My List</p>
            </button>
          </div>
        </div>

        <div className="lg:block hidden py-5 px-12 bg-base text-center my-6 rounded-2xl shadow">
          <p className="text-darkblue font-medium text-2xl">
            Hard to make a dicision?
          </p>
          <p className="font-medium">Compare with other products</p>
          <button className="bg-darkblue mt-4 text-white text-xl font-semibold py-3 px-20 rounded-full">
            Compare
          </button>
        </div>

        <div className="absolute bottom-0 right-0 left-0 lg:block flex place-content-center">
          <TapSoftwareComponent id={searchParams.id} />
        </div>
      </div>

      <hr className="border-divider" />

      <div className="lg:flex xl:p-8 p-4 bg-white relative">
        {text != "" ? (
          <div className="border-divider border-[1px] xl:w-[67%] lg:w-[63%] p-4 rounded-2xl">
            <div className="bg-base xm:p-10 p-3 mt-5 rounded-2xl">
              <p className="text-[1rem] xm:text-2xl font-bold">{`${data.name} Overview`}</p>
              <hr className="border-divider my-3" />
              <p
                className="font-medium text-xs xm:text-nbase whitespace-break-spaces"
                id="softwareOverview"
              ></p>
              <hr className="border-divider my-5" />
            </div>

            <div className="px-5 py-4 bg-base flex sm:flex-row flex-col justify-between mt-5 rounded-2xl place-items-center">
              <p className="text-basedark text-sm xm:text-nbase sm:ml-5 mb-3 sm:mb-0">
                Software user?
              </p>
              <button className="bg-darkblue text-white text-sm xm:text-nbase sm:text-xl xl:text-2xl font-semibold py-4 px-5 xm:px-10 md:px-20 rounded-full">
                <Link href={`/pages/write_review_page?id=${searchParams.id}`}>
                  Write a Review
                </Link>
              </button>
            </div>

            <div className="mt-5 bg-base pb-10 rounded-2xl overflow-hidden">
              <ReviewBox />
              <ReviewBox />
              {reviews.map((review, index) => {
                return (
                  <>
                    <ReviewBox review={review} key={index} />
                  </>
                );
              })}
            </div>

            <div className="grid place-items-center w-full">
              <div className="hidden sm:flex place-items-center mt-3">
                {[1, 2, 3, 4, 5, 6].map((item, index) => {
                  return (
                    <button
                      key={index}
                      className="bg-[#E3E6EA] mx-1 p-2 md:w-12 md:h-12 w-9 h-9 rounded-full"
                    >
                      {item}
                    </button>
                  );
                })}
                <button className="bg-[#E3E6EA] mx-1 p-2 md:w-12 md:h-12 w-10 h-10 rounded-full grid place-content-center">
                  <img src="/write_review\icons\next.png" alt="" />
                </button>
              </div>

              <div className="flex sm:hidden place-items-center mt-3">
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
                <button className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center">
                  <img src="/write_review\icons\next.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="animate-pulse flex min-w-[75%] space-x-4">
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
        )}

        <div className="lg:hidden py-5 xm:px-12 px-3 bg-base text-center my-6 rounded-2xl shadow">
          <p className="font-medium text-[1rem] xm:text-2xl text-darkblue ">
            Hard to make a dicision?
          </p>
          <p className="font-medium text-sm xm:text-[1rem]">
            Compare with other products
          </p>
          <button className="bg-darkblue mt-4 text-white text-sm xm:text-xl font-semibold py-3 xm:px-20 px-10 rounded-full">
            Compare
          </button>
        </div>

        <div className="flex-1 xl:ml-6 lg:ml-3">
          <div className="bg-base p-5 rounded-2xl">
            <p className="text-[1rem] xm:text-2xl font-bold text-center">
              {`${data.name} Comparision`}
            </p>
            {[
              [data.name, data.icon, "BingAI", 5],
              [data.name, data.icon, "CanvaAI", 3],
              [data.name, data.icon, "NotionAI", 6],
              [data.name, data.icon, "Google Doc AI", 4],
            ].map((item, index) => {
              return (
                <div
                  className="flex justify-between place-items-center mt-7 items-start"
                  key={index}
                >
                  <div className="text-center xm:w-28 sm:w-36 relative">
                    <div className="xm:p-7 p-3 bg-white w-full xm:h-28 sm:h-36 h-20 flex place-content-center flex-1 rounded-lg border-[1px] border-divider">
                      <img src={item[1]} alt="" className="" />
                    </div>
                    <p className="text-[1rem] xm:text-xl font-semibold mt-1 text-center">
                      {item[0]}
                    </p>
                  </div>
                  <p className="mt-10 xm:mt-16 sm:mt-20">VS</p>
                  <div className="text-center xm:w-28 sm:w-36 w-20 relative">
                    <div className="xm:p-7 p-3 bg-white w-full xm:h-28 sm:h-36 h-20 flex place-content-center flex-1 rounded-lg border-[1px] border-divider">
                      <img
                        src={`/write_review/icons/${item[3]}.png`}
                        alt=""
                        className=""
                      />
                    </div>
                    <p className="text-[1rem] xm:text-xl font-semibold mt-1 text-center">
                      {item[2]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 bg-base rounded-2xl pt-6">
            <p className="text-center text-[1rem] xm:text-2xl font-bold">
              More From This Category
            </p>
            <div className="lg:block flex place-content-center">
              <div className="mt-5 px-12 lg:w-auto w-96">
                {[1, 2, 3, 4].map((item, index) => {
                  return Item(index, "BingAI", item);
                })}
              </div>
            </div>

            <div className="flex place-content-center py-10">
              <button className="text-bblue font-semibold">
                See All Alternatives
              </button>
            </div>
          </div>

          <div className="mt-5 bg-base pt-4 pb-8 rounded-2xl">
            <p className="font-semibold text-[1rem] xm:text-2xl text-center">
              Explore Other Categories
            </p>
            <div className="lg:block flex place-content-center">
              <div className="px-16 mt-6">
                {[
                  "CRM",
                  "Digital Marketing",
                  "Sale Management",
                  "Content Analytic",
                  "SEO Analytic",
                  "Designer",
                  "Business Management",
                  "Financial",
                ].map((item, index) => {
                  return (
                    <button
                      className="my-1 flex place-content-start items-center text-bblue mt-3"
                      key={index}
                    >
                      <div className="w-5 xm:w-10">
                        <img
                          src="/write_review/icons/next_blue.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <p className="text-left flex-1 text-sm xm:text-[1rem] ml-1">
                        {item}
                      </p>
                    </button>
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
