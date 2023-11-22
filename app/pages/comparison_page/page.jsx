"use client";

import FilterComponent from "./components/filter";
import ComparisonItems from "./components/comparison_item";
import CircularProgress from "./components/circular_progress";
import TapComponent from "./components/tap_component";
import ReviewBox from "./components/review_box";
import React, { useEffect, useState } from "react";

export default function ComparisonPage() {
  var product = [
    {
      name: "Jasper",
      img: "20",
      features: {
        function: {
          file_sharing: {
            rating: 3.5,
            quantity: 20,
          },
          doc_colab: {
            rating: 3.5,
            quantity: 20,
          },
          search: {},
          messaging: {},
          task_manage: {
            rating: 3.5,
            quantity: 20,
          },
        },
        rating: {
          satisfaction: {
            rating: 3.5,
            quantity: 20,
          },
          ease_use: {
            rating: 3.5,
            quantity: 20,
          },
          support_quality: {},
          price: {},
          ease_implement: {
            rating: 3.5,
            quantity: 20,
          },
        },
        pricing: {
          free: {
            value: true,
          },
          free_trial: {
            value: false,
          },
          paid: {
            value: true,
          },
        },
        reviews: {
          like_recommend: {
            review: "1",
          },
        },
      },
    },
    {
      name: "ChatGPT",
      img: "7",
      features: {
        function: {
          file_sharing: {},
          doc_colab: {
            rating: 3.5,
            quantity: 20,
          },
          search: {
            rating: 3.5,
            quantity: 20,
          },
          messaging: {},
          task_manage: {
            rating: 3.5,
            quantity: 20,
          },
        },
        rating: {
          satisfaction: {},
          ease_use: {
            rating: 3.5,
            quantity: 20,
          },
          support_quality: {
            rating: 3.5,
            quantity: 20,
          },
          price: {},
          ease_implement: {
            rating: 3.5,
            quantity: 20,
          },
        },
        pricing: {
          free: {
            value: false,
          },
          free_trial: {
            value: true,
          },
          paid: {},
        },
        reviews: {
          like_recommend: {
            review: "0",
          },
        },
      },
    },
    {
      name: "Canva",
      img: "3",
      features: {
        function: {
          file_sharing: {
            rating: 3.5,
            quantity: 20,
          },
          doc_colab: {},
          search: {
            rating: 3.5,
            quantity: 20,
          },
          messaging: {
            rating: 3.5,
            quantity: 20,
          },
          task_manage: {
            rating: 3.5,
            quantity: 20,
          },
        },
        rating: {
          satisfaction: {
            rating: 3.5,
            quantity: 20,
          },
          ease_use: {},
          support_quality: {
            rating: 3.5,
            quantity: 20,
          },
          price: {
            rating: 3.5,
            quantity: 20,
          },
          ease_implement: {
            rating: 3.5,
            quantity: 20,
          },
        },
        pricing: {
          free: {
            value: false,
          },
          free_trial: {
            value: true,
          },
          paid: {
            value: false,
          },
        },
        reviews: {
          like_recommend: {
            review: "2",
          },
        },
      },
    },
    {
      name: "Juillbot.ai",
      img: "18",
      features: {
        function: {
          file_sharing: {
            rating: 3.5,
            quantity: 20,
          },
          doc_colab: {
            rating: 3.5,
            quantity: 20,
          },
          search: {
            rating: 3.5,
            quantity: 20,
          },
          messaging: {
            rating: 3.5,
            quantity: 20,
          },
          task_manage: {},
        },
        rating: {
          satisfaction: {
            rating: 3.5,
            quantity: 20,
          },
          ease_use: {
            rating: 3.5,
            quantity: 20,
          },
          support_quality: {
            rating: 3.5,
            quantity: 20,
          },
          price: {
            rating: 3.5,
            quantity: 20,
          },
          ease_implement: {},
        },
        pricing: {
          free: {},
          free_trial: {
            value: false,
          },
          paid: {
            value: true,
          },
        },
        reviews: {
          like_recommend: {
            review: "0",
          },
        },
      },
    },
    {
      name: "Juillbot.ai",
      img: "18",
      features: {
        function: {
          file_sharing: {
            rating: 3.5,
            quantity: 20,
          },
          doc_colab: {
            rating: 3.5,
            quantity: 20,
          },
          search: {
            rating: 3.5,
            quantity: 20,
          },
          messaging: {
            rating: 3.5,
            quantity: 20,
          },
          task_manage: {},
        },
        rating: {
          satisfaction: {
            rating: 3.5,
            quantity: 20,
          },
          ease_use: {
            rating: 3.5,
            quantity: 20,
          },
          support_quality: {
            rating: 3.5,
            quantity: 20,
          },
          price: {
            rating: 3.5,
            quantity: 20,
          },
          ease_implement: {},
        },
        pricing: {
          free: {},
          free_trial: {
            value: false,
          },
          paid: {
            value: true,
          },
        },
        reviews: {
          like_recommend: {
            review: "0",
          },
        },
      },
    },
    {
      name: "ChatGPT",
      img: "7",
      features: {
        function: {
          file_sharing: {},
          doc_colab: {
            rating: 3.5,
            quantity: 20,
          },
          search: {
            rating: 3.5,
            quantity: 20,
          },
          messaging: {},
          task_manage: {
            rating: 3.5,
            quantity: 20,
          },
        },
        rating: {
          satisfaction: {},
          ease_use: {
            rating: 3.5,
            quantity: 20,
          },
          support_quality: {
            rating: 3.5,
            quantity: 20,
          },
          price: {},
          ease_implement: {
            rating: 3.5,
            quantity: 20,
          },
        },
        pricing: {
          free: {
            value: false,
          },
          free_trial: {
            value: true,
          },
          paid: {},
        },
        reviews: {
          like_recommend: {
            review: "0",
          },
        },
      },
    },
  ];
  const [start, setStart] = useState(0);
  const [range, setRange] = useState(3); //the number of gap between two items
  const num_product = 6;

  // const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) setRange(3);
      else if (window.innerWidth > 800 && window.innerWidth <= 1100)
        setRange(2);
      else setRange(1);
    });
  });

  return (
    <div className="w-[640px] sm:w-full font-dmsan">
      <div className="w-full bg-black">
        <div className="grid grid-cols-2 p-10">
          <p className="text-[#1DCDFE] text-3xl font-semibold">Marketing</p>
          <div className="text-black px-3 py-1 bg-[#D9D9D9] rounded-full flex w-full">
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
          </div>
        </div>
        <TapComponent />
      </div>

      <FilterComponent></FilterComponent>

      <p className="text-3xl font-semibold ml-10 mt-7">
        Let's us help you find the perfect product!
      </p>
      <div className={`w-full bg-[#F7F8FA] mt-7 px-6 xl:px-10 py-5`}>
        <div className="border-2 border-[#E3E6EA] rounded-2xl p-4">
          <div className="w-full flex">
            <div className="w-[30%] rounded-2xl bg-white shadow-md">
              <ComparisonItems />
            </div>
            <div className="w-[70%] ml-10">
              <p className="text-3xl font-semibold mt-3">Comparison: AI</p>
              <p className="text-[#4A4A4A]">
                See more below to select the best content marketign software.
              </p>
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
                {product.map((item, index) => {
                  if (index < start || index > start + range) return;
                  return (
                    <React.Fragment key={index}>
                      <p className={index > start ? "block" : "hidden"}>VS</p>
                      <div className="text-center">
                        <div className="bg-white p-7 border-[1px] border-[#E3E6EA] w-36 h-36 flex rounded-lg">
                          <img
                            src={`/write_review/icons/${item.img}.png`}
                            alt=""
                          />
                        </div>
                        <p className="text-2xl font-medium">{item.name}</p>
                      </div>
                    </React.Fragment>
                  );
                })}
                {start + range < num_product - 1 && (
                  <button
                    onClick={() => {
                      if (start + range < num_product - 1) {
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
            </div>
          </div>

          <div className="bg-white text-basedark rounded-t-2xl py-6 px-10 mt-8 h-[27rem] flex flex-col border-b-[1px] border-divider">
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
              {product.map((item, index) => {
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
              })}
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
              {product.map((item, index) => {
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
              })}
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
              {product.map((item, index) => {
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
              })}
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
              {product.map((item, index) => {
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
                      } else if (item.features.reviews[feature].review == "2") {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
