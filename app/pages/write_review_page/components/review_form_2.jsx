"use client";

export default function ReviewForm2({ setShowForm }) {
  return (
    <div className="w-[400px] xm:w-full font-dmsan">
      <div className="sm:px-5 md:px-20 lg:px-32 py-8 bg-[#2F455C]">
        <img
          src="/write_review/process_about_product.png"
          alt=""
          className="relative w-full"
        />
      </div>

      <div className="px-3 sm:px-10">
        <p className="mt-10">
          <span className="text-red-600">* </span>For which purpose did you use
          ChatGPT?
        </p>
        <div className="mt-5 relative w-full">
          <select
            className="outline-none bg-[#E3E6EA] py-2 px-4 rounded-full relative w-full"
            placeholder="Select purpose"
          >
            <option value="">-- Select purpose --</option>
          </select>
        </div>

        <p className="mt-10">
          <span className="text-red-600">* </span>For which purpose did you use
          ChatGPT?
        </p>
        <textarea
          name=""
          id=""
          cols="100"
          rows="10"
          placeholder="What business problem is ChatGPT helping you solve?"
          className="border-2 resize-none relative w-full"
        ></textarea>

        <p className="mt-10">
          <span className="text-red-600">* </span>Ease of use
        </p>
        <div className="mt-5 sm:w-[80%] md:w-[65%] lg:w-[55%] xl:w-1/2">
          <div className="flex relative w-full justify-between">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <button key={item} className="rounded-full w-9 p-1 border-2">
                  {item}
                </button>
              );
            })}
          </div>
          <div className="flex relative w-full justify-between">
            <p>Not Likely</p>
            <p>Neutral</p>
            <p>Very Likely</p>
          </div>
        </div>

        <p className="mt-10">
          <span className="text-red-600">* </span>Meets requirements
        </p>
        <div className="mt-5 sm:w-[80%] md:w-[65%] lg:w-[55%] xl:w-1/2">
          <div className="flex relative w-full justify-between">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <button key={item} className="rounded-full w-9 p-1 border-2">
                  {item}
                </button>
              );
            })}
          </div>
          <div className="flex relative w-full justify-between">
            <p>Not Likely</p>
            <p>Neutral</p>
            <p>Very Likely</p>
          </div>
        </div>

        <p className="mt-10">
          <span className="text-red-600">* </span>Meet requirements
        </p>
        <div className="mt-5 sm:w-[80%] md:w-[65%] lg:w-[55%] xl:w-1/2">
          <div className="flex relative w-full justify-between">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <button key={item} className="rounded-full w-9 p-1 border-2">
                  {item}
                </button>
              );
            })}
          </div>
          <div className="flex relative w-full justify-between">
            <p>Not Likely</p>
            <p>Neutral</p>
            <p>Very Likely</p>
          </div>
        </div>

        <p className="mt-10">
          <span className="text-red-600">* </span>Price
        </p>
        <div className="mt-5 sm:w-[80%] md:w-[65%] lg:w-[55%] xl:w-1/2">
          <div className="flex relative w-full justify-between">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
              return (
                <button key={item} className="rounded-full w-9 p-1 border-2">
                  {item}
                </button>
              );
            })}
          </div>
          <div className="flex relative w-full justify-between">
            <p>Not Likely</p>
            <p>Neutral</p>
            <p>Very Likely</p>
          </div>
        </div>

        <div className="h-32"></div>
      </div>
      <div className="h-24 w-full flex place-content-end place-items-center">
        <button
          onClick={() => {
            setShowForm(3);
          }}
          className="bg-basedark py-2 px-10 font-medium rounded-full text-white mr-10 text-xl xm:text-2xl"
        >
          Next: About You
        </button>
      </div>
    </div>
  );
}
