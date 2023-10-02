import Item from "./item_component";

export default function WriteReviewPage() {
  var items = [];
  for (let i = 1; i <= 30; i++) {
    items.push([i, "Ai Software", i]);
  }
  return (
    <div className="w-full p-9 font-dmsan">
      <div className="px-5 pt-8 rounded-2xl bg-[#0B0D14] text-white">
        <div className="grid grid-cols-2">
          <div className=" pt-6 ml-24 mr-44 grid place-content-center">
            <p className="a text-5xl">Using software?</p>
            <button className="bg-[#2F455C] w-full p-4 rounded-[500px] mt-5 text-2xl">
              Write a review
            </button>
          </div>
          <div className="mt-5 mx-24">
            <div className="text-black px-3 py-1 bg-[#D9D9D9] rounded-full flex">
              <div className="pr-1 pt-1">
                <iconify-icon icon="bi:search"></iconify-icon>
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search software to review..."
                className="outline-none bg-transparent w-full ml-2"
              />
            </div>
            <p className="text-2xl mt-6">
              Help million of people make the right choice for their business.
            </p>
          </div>
        </div>
        <div className="w-full py-16 px-20">
          <img src="write_review/write_review_page_process_bar.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between my-5">
        <div className="flex place-items-center">
          <p>Filter by</p>
          <button className="bg-[#E3E6EA] ml-3 py-2 px-4 rounded-xl">Category</button>
        </div>
        <div className="flex place-items-center">
          <p>Sort by</p>
          <button className="bg-[#E3E6EA] ml-3 py-2 px-4 rounded-xl">Popularity</button>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-2">
        {items.map((item) => {
          return Item(item[0], item[1], item[2]);
        })}
      </div>
      <div className="grid place-items-center w-full">
        <div className="flex mt-3">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <button
                key={index}
                className="bg-[#E3E6EA] mx-1 p-2 w-12 h-12 rounded-full"
              >
                {item}
              </button>
            );
          })}
          <button className="bg-[#E3E6EA] mx-1 p-2 w-12 h-12 rounded-full grid place-content-center">
            <img src="write_review\icons\next.png" alt="" />
          </button>
        </div>
      </div>
      {/* <div className="stack"></div> */}
      <div className="w-full mt-20 grid place-content-center place-items-center">
        <div className="absolute z-10 px-8 py-20 w-3/5 left-1/2 -translate-x-[63%]">
          <p className="relative text-[3.5rem] font-bold">
            Start and make a different in your company.
          </p>
          <p className="relative w-[75%] text-2xl mt-5 text-[#2F455C]">
            Not being able to convey the goodness of our products because people
            think it's just a sales pitch after all.{" "}
          </p>
          <button className="bg-[#2F455C] relative mt-20 py-5 px-14 text-2xl font-semibold text-white rounded-full">
            Post your service for free
          </button>
        </div>
          <img
            src="write_review\vendor_background.png"
            alt=""
            className="relative z-0 w-[93%]"
          />
        </div>
      <div className="h-16"></div>
    </div>
  );
}
