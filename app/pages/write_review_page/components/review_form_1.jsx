'use client';

export default function ReviewForm1({setShowForm}) {
  return (
    <div className="w-[400px] xm:w-full font-dmsan z-20 bg-white">
      <div className="sm:px-5 md:px-20 lg:px-32 py-8 bg-[#2F455C]">
        <img
          src="/write_review/proccess_product_rating.png"
          alt=""
          className="relative w-full"
        />
      </div>

      <div className="sm:px-10 px-2">
        <div className="relative w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-1/2 rounded-2xl overflow-clip bg-[#F7F8FA] mt-10">
          <div className="h-7 bg-[#1DCDFE]"></div>
          <div className="p-5">
            <li>
              Your review will only be published after it has been reviewed by
              our team and passed quality checks
            </li>
            <li>This may take up to 3 business days</li>
            <li>
              If your review is incentivized, it can take up to 1-2 additional
              business days to receive it
            </li>
          </div>
        </div>

        <div className="">
          <div className="sm:inline-block">
            <p className="mt-10">
              <span className="text-red-600">* </span>How likely is it that you
              would recommend Google Analytics to a friend or colleague?
            </p>
            <div className="mt-5">
              <div className="flex relative w-full justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <button
                      key={item}
                      className="rounded-full w-9 p-1 border-2"
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

        <div>
          <div className="sm:inline-block">
            <p className="mt-10 w-full">
              <span className="text-red-600">* </span>How likely is it that you
              would recommend Google Analytics to a friend or colleague?
            </p>
            <div className="mt-5">
              <div className="flex justify-between">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <button
                      key={item}
                      className="rounded-full w-9 p-1 border-2"
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

        <div className="flex justify-around mt-10">
          <div className="flex-1 mr-5">
            <p>
              <span className="text-red-600">* </span>What do youo like best
              about ChatGPT?
            </p>
            <textarea
              cols="1"
              rows="10"
              className="border-2 resize-none w-full"
            ></textarea>
            <div className="text-end">
              <p>Minimum characters remaining: 16</p>
            </div>
          </div>

          <div className="flex-1 ml-5">
            <p>
              <span className="text-red-600">* </span>What do youo like best
              about ChatGPT?
            </p>
            <textarea
              cols="1"
              rows="10"
              className="border-2 resize-none w-full"
            ></textarea>
            <div className="text-end">
              <p>Minimum characters remaining: 16</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p>
            <span className="text-red-600">* </span>What is your primary role
            when using ChatGPT?
          </p>
          <div className="flex justify-start flex-wrap mt-5">
            {[
              "User",
              "Administrator",
              "Agency",
              "Consultant",
              "Industry Analyst",
              "User",
              "Administrator",
              "Agency",
              "Consultant",
              "Industry Analyst",
            ].map((item, index) => {
              return (
                <button
                  key={index}
                  className="py-2 px-12 border-2 mx-1 rounded-full"
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-32"></div>
      </div>
      <div className="h-24 w-full flex place-content-end place-items-center">
        <button onClick={() => {setShowForm(2)}} className="bg-basedark py-2 px-10 font-medium rounded-full text-white mr-10 text-xl xm:text-2xl">
          Next: About the Product
        </button>
      </div>
    </div>
  );
}
