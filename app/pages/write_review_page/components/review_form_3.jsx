"use client";

export default function ReviewForm3({ setShowForm }) {
  return (
    <div className="w-[400px] xm:w-full font-dmsan">
      <div className="sm:px-5 md:px-20 lg:px-32 py-8 bg-[#2F455C]">
        <img
          src="/write_review/process_about_you.png"
          alt=""
          className="relative w-full"
        />
      </div>

      <div className="px-10">
        <p className="mt-10">
          <span className="text-red-600">* </span>At which organization did you
          most recently use ChatGPT?
        </p>
        <div className="mt-5">
          <input
            type="text"
            className="w-full rounded-full border-2 p-3"
            placeholder="Organization name"
          />
        </div>

        <p className="mt-10">
          <span className="text-red-600">* </span>What was the URL of the
          organization where you most recently used ChatGPT?
        </p>
        <div className="mt-5">
          <input
            type="text"
            className="w-full rounded-full border-2 p-3"
            placeholder="example: tisanddd@mail.com.kh"
          />
        </div>

        <p className="mt-10">
          <span className="text-red-600">* </span>How many people use ChatGPT in
          your organization?
        </p>
        <div className="mt-5">
          <select
            className="outline-none bg-[#E3E6EA] ml-3 py-2 px-4 rounded-full w-full"
            placeholder="Select purpose"
          >
            <option value="">-- Select number of people --</option>
          </select>
        </div>

        <div className="mt-10">
          <p>
            <span className="text-red-600">* </span>What is your primary role
            when using ChatGPT?
          </p>
          <div className="flex justify-start flex-wrap mt-5 w-full">
            {[
              "0-10%",
              "0-10%",
              "0-10%",
              "0-10%",
              "0-10%",
              "0-10%",
              "0-10%",
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

        <div className="mt-10">
          <p>
            <span className="text-red-600">* </span>What is your primary role
            when using ChatGPT?
          </p>
          <div className="flex justify-start flex-wrap mt-5 w-full">
            {[
              "< 1 day",
              "< 1 day",
              "< 1 day",
              "< 1 day",
              "< 1 day",
              "< 1 day",
              "< 1 day",
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

        <div className="mt-10">
          <p>
            <span className="text-red-600">* </span>Are you affiliated with the
            product you are reviewing or the company that makes it?
          </p>
          <div className="flex mt-5">
            <div className="">
              <button className="text-5xl">
                <iconify-icon icon="healthicons:yes-outline"></iconify-icon>
              </button>
              <p className="relative text-center">Yes</p>
            </div>
            <div className="ml-10">
              <button className="text-5xl">
                <iconify-icon icon="healthicons:no-outline"></iconify-icon>
              </button>
              <p className="relative text-center">No</p>
            </div>
          </div>
        </div>

        <div className="h-32"></div>
      </div>
      <div className="h-24 w-full grid grid-cols-2 py-4 xm:p-4 text-xl xm:text-2xl font-medium">
        <button
          onClick={() => {
            setShowForm(2);
          }}
          className="w-fit ml-5 underline underline-offset-2"
        >
          Back to Product Rating
        </button>
        <div className="flex place-content-end">
          <button
            onClick={() => {
              setShowForm(0);
            }}
            className="bg-basedark w-fit py-2 px-10 rounded-full text-white mr-10"
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
