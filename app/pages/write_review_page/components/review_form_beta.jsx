"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";

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
  const [submitLoading, setSubmitLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id == null) return;
    const getSofwareInfo = async () => {
      const temp = await fetch("/api/automation/software", {
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
      });
      const res = await temp.json();
      setSoftwareInfo(res.data);
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
    let timestamp = Date.now();
    const data = await fetch("/api/automation/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        experience: experience,
        recommend: recommend,
        title: title,
        comment: comment,
        username: localStorage.getItem("token"),
        soft_id: id,
        nci: softwareInfo.nci,
        icon: softwareInfo.icon,
        category: softwareInfo.category,
        name: softwareInfo.name,
        fullcategories: softwareInfo.fullcategories,
        date: date,
        timestamp: timestamp,
      }),
    });

    // setShowForm(-1);
    if (data.status == 406) {
      Swal.fire({
        title: "Review Not Accepted",
        text: "Your review is not accepted!\nPlease check your review to make sure it is appropriate and not offensive!",
        icon: "error",
      });
    } else if (data.status == 405) {
      localStorage.setItem("token", "");
      router.push("/");
      router.refresh();
      Swal.fire({
        title: "Successful",
        text: "Your review has been submitted successfully!",
        icon: "success",
      });
    } else if (data.status == 403) {
      Swal.fire({
        title: "Failed",
        text: "You have already submitted a review for this AI tool!",
        icon: "error",
      });
      router.push(`/pages/software?id=${id}`);
    } else {
      Swal.fire({
        title: "Failed",
        text: "Something is wrong!",
        icon: "error",
      });
      router.push(`/pages/software?id=${id}`);
    }

    setSubmitLoading(false);
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
        experience.length == 0 ||
        recommend.length == 0 ||
        title.length == 0 ||
        comment.length == 0
      ) {
        return;
      }
    } catch (e) {
      return;
    }

    setSubmitLoading(true);
    uploadReview();
  }

  try {
    if (
      id == null ||
      localStorage.getItem("token") == null ||
      localStorage.getItem("token") == ""
    )
      throw new Error("Error from review page!");
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
                    {`Your review will be checked by Google's Gemini to determine whether it is appropriate and not offensive`}
                  </li>
                  <li>
                    {`Please make sure your review is correct. Once submitted, you won't be able to delete or modify your review.`}
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
          <div className="h-24 w-full flex place-content-center place-items-center">
            {submitLoading ? (
              <div className="flex place-content-center mt-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2.3em"
                  height="2.3em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#434280"
                    d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                    opacity="0.5"
                  />
                  <path
                    fill="#434280"
                    d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="1s"
                      from="0 12 12"
                      repeatCount="indefinite"
                      to="360 12 12"
                      type="rotate"
                    />
                  </path>
                </svg>
              </div>
            ) : (
              <button
                onClick={() => {
                  validateInput();
                }}
                className="bg-basedark py-2 px-5 sm:px-10 font-medium rounded-full text-white mr-2 sm:mr-10 text-xl xm:text-2xl hover:bg-[#1DCDFE]"
              >
                Submit Your Review
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
    router.push("/pages/categories");
  }
}
