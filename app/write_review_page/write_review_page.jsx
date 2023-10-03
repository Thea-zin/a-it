import Item from "./item_component";

export default function WriteReviewPage() {
  var items = [];
  for (let i = 1; i <= 30; i++) {
    items.push([i, "Ai Software", i]);
  }
  return (
    <div className="w-full lg:p-9 p-5 font-dmsan">
      <div className="lg:px-5 lg-8 rounded-2xl bg-[#0B0D14] text-white">
        <div className="grid md:grid-cols-2">
          <div className="pt-6 xl:ml-24 xl:mr-44 lg:ml-12 grid place-content-center">
            <p className="lg:text-5xl text-4xl">Using software?</p>
            <button className="bg-[#2F455C] w-full lg:p-4 p-3 rounded-[500px] mt-5 lg:text-2xl text-xl">
              Write a review
            </button>
          </div>
          <div className="mt-5 md:mt-14 lg:mx-24 mx-10">
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
            <p className="lg:text-2xl text-xl mt-6 text-center">
              Help million of people make the right choice for their business.
            </p>
          </div>
        </div>
        <div className="w-full lg:py-16 lg:px-20 sm:px-32 py-10 px-8">
          <img
            src="write_review/write_review_page_process_bar.png"
            alt=""
            className="lg:block hidden"
          />
          <img
            src="write_review/write_review_page_process_bar_mobile.png"
            alt=""
            className="lg:hidden block"
          />
        </div>
      </div>
      <div className="flex justify-between my-5">
        <div className="md:flex place-items-center">
          <p className="text-center">Filter by</p>
          <select className="outline-none bg-[#E3E6EA] ml-3 py-2 px-4 rounded-xl">
            {[1, 2, 3].map((item, index) => {
              return (
                <option value="category" key={index}>
                  Category {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="md:flex place-items-center">
          <p className="text-center">Sort by</p>
          <select className="outline-none bg-[#E3E6EA] ml-3 py-2 px-4 rounded-xl">
            {[1, 2, 3].map((item, index) => {
              return (
                <option value="popularity" key={index}>
                  Popularity {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 xl:grid-cols-5 grid-cols-2">
        {items.map((item) => {
          return Item(item[0], item[1], item[2]);
        })}
      </div>
      <div className="grid place-items-center w-full">
        <div className="flex place-items-center mt-3">
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <button
                key={index}
                className="bg-[#E3E6EA] mx-1 p-2 md:w-12 md:h-12 w-9 h-9 rounded-full"
              >
                {item}
              </button>
            );
          })}
          <button className="bg-[#E3E6EA] mx-1 p-2 md:w-12 md:h-12 w-10 h-10 rounded-full grid place-content-center">
            <img src="write_review\icons\next.png" alt="" />
          </button>
        </div>
      </div>
      <div className="w-full xl:mt-20 mt-16 lg:px-28 md:px-20 sm:px-16">
        <div className="relative w-full rounded-3xl bg-[url('../public/write_review/vendor_background.png')] bg-cover bg-center">
          <p className="relative xl:text-5.5xl lg:text-4xl md:text-3xl text-xl xl:ml-12 ml-7 xl:pt-16 pt-8 font-bold xl:w-[75%]">
            Start and make a different in your company.
          </p>
          <p className="relative xl:w-[55%] w-[55%] xl:text-2xl md:text-xl text-sm xl:mt-6 mt-2 xl:ml-12 ml-7 text-[#2F455C]">
            Not being able to convey the goodness of our products because people
            think it's just a sales pitch after all.{" "}
          </p>
          <button className="bg-[#2F455C] relative xl:ml-12 ml-5 xl:mt-20 mt-5 xl:mb-11 mb-7 xl:py-5 md:py-3 xl:px-14 md:px-7 xl:text-2xl md:text-xl text-sm px-4 py-2 font-semibold text-white rounded-full">
            Post your service for free
          </button>
        </div>
      </div>
      <div className="h-96"></div>
    </div>
  );
}
