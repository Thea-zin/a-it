"use client";

import React from "react";
import { useEffect, useState } from "react";
import ReviewBox from "./reviewbox";
import { useRouter } from "next/navigation";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [reviewPageNumber, setReviewPageNumber] = useState(0);
  const [startAfterList, setStartAfterList] = useState([0]);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getReivews();
  }, []);

  useEffect(() => {
    console.log(startAfterList);
  }, [startAfterList]);

  const getReivews = async () => {
    try {
      const temp = await fetch("/api/automation/userreview/pagination", {
        method: "POST",
        body: JSON.stringify({
          token: localStorage.getItem("token"),
          startAfter: startAfterList[0],
        }),
      });
      const res = await temp.json();

      if (temp.status == 405) {
        localStorage.setItem("token", "");
        router.push("/");
        router.refresh();
        return;
      }

      setReviews(res.data);

      if (res.data.length > 0) {
        let tplist = startAfterList;
        tplist.push(res.data[res.data.length - 1].timestamp);
        setStartAfterList([...tplist]);
      } else {
        setShowLoadMore(false);
      }
    } catch (e) {}
  };

  const loadMore = async () => {
    const temp = await fetch("/api/automation/userreview/pagination", {
      method: "POST",
      body: JSON.stringify({
        token: localStorage.getItem("token"),
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
      setReviews([...tplist]);
    } else {
      setShowLoadMore(false);
    }
  };

  return (
    <div className="bg-white p-8 py-[4rem] rounded-[16px]">
      <div className="flex space-x-3 py-2 px-4  hover:rounded-[16px] hover:font-bold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.3em"
          height="2.3em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#1dcdfe"
            d="M3 20.077V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.615v10.77q0 .69-.462 1.153T19.385 17H6.077zm6.517-6.404L12 12.167l2.483 1.506l-.66-2.825l2.196-1.885l-2.886-.255L12 6.058l-1.133 2.65l-2.886.255l2.196 1.885z"
          />
        </svg>
        <span className="text-body-lg font-bold text-cyan">Your Reviews</span>
      </div>
      <div>
        {reviews.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <ReviewBox review={item} />
            </React.Fragment>
          );
        })}
        <div className="flex place-items-center place-content-center gap-10">
          {showLoadMore && <button onClick={loadMore}>Load More</button>}
        </div>
      </div>
    </div>
  );
}
