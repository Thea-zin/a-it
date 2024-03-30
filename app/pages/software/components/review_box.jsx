export default function ReviewBox({ review = null }) {
  return (
    <div className="bg-base xm:p-10 p-3 pb-0 border-[1px] border-slate-300 mx-3 my-7 overflow-hidden rounded-2xl">
      <div className="flex place-items-center">
        <div className="flex w-10 xm:w-16 h-10 xm:h-16 rounded-full overflow-hidden">
          <img src="/write_review/profile_1.png" alt="" />
        </div>
        <div className="ml-3 text-xs xm:text-[1rem] flex-1">
          <p className="text-basedark">Small Business (10-20 employees)</p>
          <p className="font-semibold">Kimura Keito (木村慧人)</p>
        </div>
      </div>
      <hr className="border-divider my-5" />
      <div className="flex place-items-center">
        <div className="flex text-[#F3B146] text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 36 36"
          >
            <path
              fill="currentColor"
              d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z"
              className="clr-i-solid clr-i-solid-path-1"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
          <iconify-icon icon="clarity:star-solid"></iconify-icon>
          <iconify-icon icon="clarity:star-solid"></iconify-icon>
          <iconify-icon icon="clarity:star-solid"></iconify-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 36 36"
          >
            <path
              fill="currentColor"
              d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z"
              className="clr-i-solid clr-i-solid-path-1"
            />
            <path fill="none" d="M0 0h36v36H0z" />
          </svg>
        </div>
        {review != null ? (
          <p className="text-xs xm:text-[1rem] ml-2 font-medium text-bgray">
            {review.date}
          </p>
        ) : (
          <p className="text-xs xm:text-[1rem] ml-2 font-medium text-bgray">
            Sep 22, 2023
          </p>
        )}
      </div>
      {review != null ? (
        <p className="mt-3 font-semibold text-sm xm:text-lg">{review.title}</p>
      ) : (
        <p className="mt-3 font-semibold text-sm xm:text-lg">
          A platform that answers any questions
        </p>
      )}

      {review != null ? (
        <p className="mt-6 text-basedark text-xs xm:text-nbase">
          {review.comment}
        </p>
      ) : (
        <p className="mt-6 text-basedark text-xs xm:text-nbase">
          {
            "With Google Analytics, a powerful web analytics tool, website owners, marketers, and analysts can measure, track, and analyse website traffic, user behaviour, and conversion goals. Some of Google Analytics' best qualities include the ones listed below:"
          }
          <br />
          <br />
          Users that use customizable dashboards may keep track of the metrics
          that matter most to their companies.
          <br />
          Users gain access to information about the visitors and behaviour to
          their websites in real-time through real-time reporting.
          <br />
          Users can set up and measure specific targets, such as form fills,
          sales, or page visits.
        </p>
      )}

      {/* <div className="hidden xm:block border-y-[1px] border-divider mt-10 py-4 text-basedark">
        <div className="flex flex-wrap justify-between">
          <button className="flex place-items-center">
            <div className="text-3xl flex">
              <iconify-icon icon="ei:like"></iconify-icon>
            </div>
            <p className="hidden sm:block">Helpful?</p>
          </button>
          <button className="flex place-items-center">
            <div className="text-3xl flex">
              <iconify-icon icon="ei:comment"></iconify-icon>
            </div>
            <p className="hidden sm:block">Comment</p>
          </button>
          <button className="flex place-items-center">
            <div className="text-3xl flex">
              <iconify-icon icon="mdi-light:share"></iconify-icon>
            </div>
            <p className="hidden sm:block">Share</p>
          </button>

          <button className="flex place-items-center">
            <div className="text-2xl flex">
              <iconify-icon icon="ant-design:heart-outlined"></iconify-icon>
            </div>
            <p className="hidden sm:block">Save to My List</p>
          </button>
        </div>
      </div> */}
    </div>
  );
}
