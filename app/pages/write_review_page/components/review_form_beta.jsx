"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ReviewFormBeta() {
  const [experience, setExperience] = useState("");
  const [recommend, setRecommend] = useState("");
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [completed, setCompleted] = useState({
    experience: true,
    recommend: true,
    title: true,
    comment: true,
  });
  const [softwareInfo, setSoftwareInfo] = useState({ icon: "", name: "" });
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id == null) return;
    const getSofwareInfo = async () => {
      const temp = await fetch(`/api/writeReview?id=${id}`);
      const software = await temp.json();
      setSoftwareInfo(software.data[0]);
    };
    getSofwareInfo();
  }, []);

  async function uploadReview() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date();
    let date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    const data = await fetch("/api/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experience: experience,
        recommend: recommend,
        title: title,
        comment: comment,
        user_id: "1",
        soft_id: id,
        date: date,
      }),
    });

    // setShowForm(-1);
    router.push(`/pages/software_page?id=${id}`);
  }

  function validateInput() {
    setCompleted({
      experience: experience.length > 0,
      recommend: recommend.length > 0,
      title: title.length > 0,
      comment: comment.length > 0,
    });
    try {
      if (
        experience.length == 0 &&
        recommend.length == 0 &&
        title.length == 0 &&
        comment.length == 0
      ) {
        return;
      }
    } catch (e) {
      return;
    }
    uploadReview();
  }

  try {
    if (id == null) throw new Error("");
    return (
      <div className="w-[400px] xm:w-full font-dmsan z-20 bg-white">
        <div className="mx-2 xm:mx-4 sm:mx-8 md:mx-16 mt-10 mb-5 border-2 border-baselight rounded-xl">
          <div className="w-full flex place-content-center">
            <div className="-translate-y-7 bg-white px-3 flex flex-col place-content-center">
              <img src={`${softwareInfo.icon}`} alt="" className="w-28" />
              <p className="text-center">{`${softwareInfo.name}`}</p>
            </div>
          </div>
          <div className="sm:px-10 px-2">
            <div className="w-full flex place-content-center">
              <div className="relative w-[95%] sm:w-[95%] md:w-[85%] lg:w-[75%] xl:w-[60%] rounded-2xl overflow-clip bg-[#F7F8FA]">
                <div className="h-7 bg-[#1DCDFE]"></div>
                <div className="p-5">
                  <li>
                    Your review will only be published after it has been
                    reviewed by our team and passed quality checks
                  </li>
                  <li>This may take up to 3 business days</li>
                  <li>
                    If your review is incentivized, it can take up to 1-2
                    additional business days to receive it
                  </li>
                </div>
              </div>
            </div>

            <div className="w-full flex place-content-center">
              <div className="w-[95%] sm:w-[95%] md:w-[85%] lg:w-[75%] xl:w-[60%]">
                <p
                  className={`mt-10 ${!completed.experience ? "text-red" : ""}`}
                >
                  <span className="text-red-600 text-red font-bold">* </span>
                  {`How
                  would you rate your overall experience with ${softwareInfo.name}?`}
                </p>
                <div className="mt-5">
                  <div className="flex relative w-full justify-between">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                      return (
                        <button
                          key={item}
                          className={`rounded-full w-9 p-1 border-[1px] ${
                            experience == item
                              ? "bg-[#1DCDFE] font-bold text-white border-none"
                              : ""
                          }`}
                          onClick={() => {
                            setExperience(item.toString());
                            let temp = completed;
                            temp.experience = true;
                            setCompleted(temp);
                          }}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    <p>Not Likely</p>
                    <p>Neutral</p>
                    <p>Very Likely</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex place-content-center">
              <div className="w-[95%] sm:w-[95%] md:w-[85%] lg:w-[75%] xl:w-[60%]">
                <p
                  className={`mt-10 ${!completed.recommend ? "text-red" : ""}`}
                >
                  <span className="text-red-600 text-red font-bold">* </span>
                  {`How
                  likely is it that you would recommend ${softwareInfo.name}?`}
                </p>
                <div className="mt-5">
                  <div className="flex relative w-full justify-between">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                      return (
                        <button
                          key={item}
                          className={`rounded-full w-9 p-1 border-[1px] ${
                            recommend == item
                              ? "bg-[#1DCDFE] font-bold text-white border-none"
                              : ""
                          }`}
                          onClick={() => {
                            setRecommend(item.toString());
                            let temp = completed;
                            temp.recommend = true;
                            setCompleted(temp);
                          }}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                  <div className="flex justify-between">
                    <p>Not Likely</p>
                    <p>Neutral</p>
                    <p>Very Likely</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex place-content-center">
              <div className="w-[95%] sm:w-[95%] md:w-[85%] lg:w-[75%] xl:w-[60%]">
                <p
                  className={`mt-10 ${!completed.recommend ? "text-red" : ""}`}
                >
                  <span className="text-red-600 text-red font-bold">* </span>
                  Leave your comment
                </p>
                <div className="mt-5">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Title"
                      className={`w-full rounded-full py-2 px-5 ${
                        !completed.title
                          ? "border-2 border-red"
                          : "border-[1px]"
                      }`}
                      onChange={(event) => {
                        setTitle(event.target.value);
                        let temp = completed;
                        temp.title = event.target.value != "";
                        setCompleted(temp);
                      }}
                    />
                  </div>
                  <div className="mt-5">
                    <textarea
                      cols="1"
                      rows="10"
                      className={`p-5 resize-none w-full rounded-2xl ${
                        !completed.comment
                          ? "border-2 border-red"
                          : "border-[1px]"
                      }`}
                      placeholder="Your comment"
                      onChange={(event) => {
                        setComment(event.target.value);
                        let temp = completed;
                        temp.comment = event.target.value != "";
                        setCompleted(temp);
                      }}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-16"></div>
          </div>
          {/* <div className="h-24 w-full flex place-content-between place-items-center">
            <button
              onClick={() => {
                router.push("/pages/mainCategories");
              }}
              className="bg-basedark py-2 px-5 sm:px-10 font-medium rounded-full text-white ml-2 sm:ml-10 text-xl xm:text-2xl hover:bg-[#1DCDFE]"
            >
              Exit
            </button>
            <button
              onClick={() => {
                validateInput();
              }}
              className="bg-basedark py-2 px-5 sm:px-10 font-medium rounded-full text-white mr-2 sm:mr-10 text-xl xm:text-2xl hover:bg-[#1DCDFE]"
            >
              Submit Your Review
            </button>
          </div> */}
          <div className="h-24 w-full flex place-content-center place-items-center">
            <button
              onClick={() => {
                validateInput();
              }}
              className="bg-basedark py-2 px-5 sm:px-10 font-medium rounded-full text-white mr-2 sm:mr-10 text-xl xm:text-2xl hover:bg-[#1DCDFE]"
            >
              Submit Your Review
            </button>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    router.push("/pages/mainCategories");
  }
}
