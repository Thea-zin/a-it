import FilterTopComponent from "./components/filter_top";
import TapComponent from "./components/tap_component";
import TrendingCard from "./components/trending_card";
import FilterBox from "./components/filter_box";
import QuestionBox from "./components/question_box";
import PopularProduct from "./components/popular_product";

export default function CategoriesPage() {
  return (
    <div className="w-full font-dmsan">
      <div className="w-full bg-black">
        <div className="grid grid-cols-2 p-10">
          <p className="text-[#1DCDFE] text-3xl font-semibold">Marketing</p>
          <div className="text-black px-3 py-1 bg-[#D9D9D9] rounded-full flex w-full">
            <div className="pr-1 pt-1">
              <iconify-icon icon="bi:search"></iconify-icon>
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter service name..."
              className="outline-none bg-transparent w-full ml-2"
            />
          </div>
        </div>
        <TapComponent />
      </div>

      <FilterTopComponent />
      <div className="py-5 px-10">
        <p className="text-3xl font-semibold mt-1">
          Let’s us help you find the perfect products!
        </p>
        <p className="mt-7 text-lg/[23px] font-medium">
          You can also narrow down your search by satisfaction level and
          functionality.
        </p>

        <div className="bg-[#0B0D14] flex flex-wrap justify-start p-10 mt-2 rounded-lg mx-1">
          {[
            "Cost reduction",
            "Sales expansion/Marketing",
            "Utilization of human resources",
            "Security risk management",
            "Ad Serving",
            "Ad Serving",
            "Work style reform/Improvement of productivity",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
            "Ad Serving",
          ].map((item, index) => {
            return (
              <button
                key={index}
                className="bg-cyan my-2 mx-2 px-4 py-1 rounded-full"
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-4 mt-12 justify-between gap-6">
          <div className="">
            <TrendingCard />
          </div>
          <div className="">
            <TrendingCard />
          </div>
          <div className="">
            <TrendingCard />
          </div>
          <div className="">
            <TrendingCard />
          </div>
        </div>
      </div>
      <div className="bg-base mt-7 px-10 pt-16">
        <div className="flex">
          <div className="max-w-[300px]">
            <FilterBox />
            <div className="h-7"></div>
            <QuestionBox />
          </div>
          <div className="p-4 border-[1px] border-divider rounded-2xl ml-6 flex-1">
            <div className="">
              <div>
                <p className="text-3xl font-bold mt-2 ml-1">Best Content Marketing Software</p>
                <p className="ml-1 text-darkgray">
                  See more below to select the best Content Marketing software.
                </p>
                <div className="mt-5">
                  <PopularProduct />
                </div>

                <div className="mt-5">
                  <PopularProduct />
                </div>

                <div className="mt-5">
                  <PopularProduct />
                </div>

                <div className="mt-5">
                  <PopularProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <p className="text-3xl font-semibold ml-10 mt-7">
        Let's us help you find the perfect product!
      </p>
      <div className="w-full bg-[#F7F8FA] mt-7 px-10 py-5">
        <div className="border-2 border-[#E3E6EA] rounded-2xl p-4">
          <div className="w-full flex">
            <div className="w-[30%] rounded-2xl bg-white shadow-md">
              <ComparisonItems />
            </div>
            <div className="w-[70%] ml-10">
              <p className="text-3xl font-semibold mt-3">Comparison: AI</p>
              <p className="text-[#4A4A4A]">
                See more below to select the best content marketign software.
              </p>
              <div className="flex place-items-center justify-evenly pt-4 font-dmsan">
                <div className="text-center">
                  <div className="bg-white p-7 border-[1px] border-[#E3E6EA] w-36 h-36 flex rounded-lg">
                    <img src="/write_review/icons/20.png" alt="" />
                  </div>
                  <p className="text-2xl font-medium">Jasper</p>
                </div>
                <p>VS</p>
                <div className="text-center">
                  <div className="bg-white p-7 border-[1px] border-[#E3E6EA] w-36 h-36 flex rounded-lg">
                    <img src="/write_review/icons/7.png" alt="" />
                  </div>
                  <p className="text-2xl font-medium">ChatGPT</p>
                </div>
                <p>VS</p>
                <div className="text-center">
                  <div className="bg-white p-7 border-[1px] border-[#E3E6EA] w-36 h-36 flex rounded-lg">
                    <img src="/write_review/icons/3.png" alt="" />
                  </div>
                  <p className="text-2xl font-medium">Canva</p>
                </div>
                <p>VS</p>
                <div className="text-center">
                  <div className="bg-white p-4 border-[1px] border-[#E3E6EA] w-36 h-36 flex rounded-lg">
                    <img src="/write_review/icons/18.png" alt="" />
                  </div>
                  <p className="text-2xl font-medium">Quillbot.ai</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-basedark rounded-t-2xl py-6 px-10 mt-8 h-[27rem] flex flex-col border-b-[1px] border-divider">
            <p className="text-2xl font-semibold relative text-black">Functions</p>
            <div className="flex flex-1">
              <div className="flex-1 flex flex-col justify-around">
                <p className="flex-1 flex place-items-center">File Sharing</p>
                <p className="flex-1 flex place-items-center">
                  Document Collaboration
                </p>
                <p className="flex-1 flex place-items-center">Search</p>
                <p className="flex-1 flex place-items-center">Messaging</p>
                <p className="flex-1 flex place-items-center">
                  Task Management
                </p>
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                <CircularProgress />
                <CircularProgress />
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <CircularProgress />
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <CircularProgress />
                <CircularProgress />
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <CircularProgress />
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                <CircularProgress />
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
              </div>
              <div className="flex-1 flex flex-col justify-around place-content-center place-items-center">
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-basedark py-6 px-10 h-[27rem] flex flex-col border-b-[1px] border-divider">
            <p className="text-2xl font-semibold relative text-black">Ratings</p>
            <div className="flex flex-1">
              <div className="flex-1 flex flex-col justify-around">
                <p className="flex-1 flex place-items-center">Satifaction</p>
                <p className="flex-1 flex place-items-center">Ease of use</p>
                <p className="flex-1 flex place-items-center">
                  Support quality
                </p>
                <p className="flex-1 flex place-items-center">Price</p>
                <p className="flex-1 flex place-items-center">
                  Ease of implementation
                </p>
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                <CircularProgress />
                <CircularProgress />
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <CircularProgress />
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <CircularProgress />
                <CircularProgress />
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <CircularProgress />
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                <CircularProgress />
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
              </div>
              <div className="flex-1 flex flex-col justify-around place-content-center place-items-center">
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-basedark py-6 px-10 h-[20rem] flex flex-col border-b-[1px] border-divider">
            <p className="text-2xl font-semibold relative text-black">Pricing</p>
            <div className="flex flex-1">
              <div className="flex-1 flex flex-col justify-around">
                <p className="flex-1 flex place-items-center">Free</p>
                <p className="flex-1 flex place-items-center">Free trial</p>
                <p className="flex-1 flex place-items-center">Paid/premium</p>
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-cyan">
                  <iconify-icon icon="dashicons:yes"></iconify-icon>
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-red">
                  <iconify-icon icon="dashicons:no"></iconify-icon>
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-cyan">
                  <iconify-icon icon="dashicons:yes"></iconify-icon>
                </div>
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
              <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-red">
                  <iconify-icon icon="dashicons:no"></iconify-icon>
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-cyan">
                  <iconify-icon icon="dashicons:yes"></iconify-icon>
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
              <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-red">
                  <iconify-icon icon="dashicons:no"></iconify-icon>
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-cyan">
                  <iconify-icon icon="dashicons:yes"></iconify-icon>
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-red">
                  <iconify-icon icon="dashicons:no"></iconify-icon>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-around place-content-center place-items-center">
                <div className="w-16 h-16 flex place-content-center place-items-center">
                  N/A
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-red">
                  <iconify-icon icon="dashicons:no"></iconify-icon>
                </div>
                <div className="w-16 h-16 flex place-content-center place-items-center text-4xl text-cyan">
                  <iconify-icon icon="dashicons:yes"></iconify-icon>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-basedark py-6 px-10 flex flex-col border-b-[1px] border-divider">
            <p className="text-2xl font-semibold relative text-black">Reviews</p>
            <div className="flex flex-1 mt-5">
              <div className="flex-1 flex flex-col">
                <p className="">Likelihood to recommend</p>
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                {ReviewBox(
                  "/write_review/profile_1.png",
                  "Kamio Fuju",
                  "Digital Researcher"
                )}
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                <div className="flex place-content-center place-items-center">
                  No Answer
                </div>
              </div>
              <div className="flex-1 border-r-[1px] flex flex-col justify-around place-content-center place-items-center border-divider">
                {ReviewBox(
                  "/write_review/profile_2.png",
                  "岩瀬洋志",
                  "Digital Researcher"
                )}
              </div>
              <div className="flex-1 flex flex-col justify-around place-content-center place-items-center">
                <div className="flex place-content-center place-items-center">
                  No Answer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
