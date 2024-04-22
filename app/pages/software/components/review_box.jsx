import Stars from "./star_display";

export default function ReviewBox({ review = null }) {
  const star = (parseInt(review.experience) + parseInt(review.recommend)) / 4;

  return (
    <div className="bg-base xm:p-10 p-3 pb-0 border-[1px] border-slate-300 mx-3 my-7 overflow-hidden rounded-2xl">
      <div className="flex place-items-center">
        <div className="flex w-10 xm:w-16 h-10 xm:h-16 rounded-full overflow-hidden">
          {review.photoURL == "0" ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 48 48"
              >
                <g fill="#434280">
                  <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
                  <path
                    fillRule="evenodd"
                    d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20a21.253 21.253 0 0 1-.274 0c-.181 0-.362-.006-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.942 17.942 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            </div>
          ) : (
            <img src={userinfo.photoURL}></img>
          )}
        </div>
        <div className="ml-3 text-xs xm:text-[1rem] flex-1">
          <p className="font-semibold">{review.username}</p>
          <p className="text-basedark">{review.occupation}</p>
        </div>
      </div>
      <hr className="border-divider my-5" />
      <div className="flex place-items-center">
        <Stars number={star} />
        {review != null ? (
          <p className="text-xs xm:text-[1rem] ml-2 font-medium text-bgray">
            {review.date}
          </p>
        ) : (
          <p className="text-xs xm:text-[1rem] ml-2 font-medium text-bgray">
            {review.data}
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
    </div>
  );
}
