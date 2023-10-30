import FilterComponent from "./components/filter";
import ComparisonItems from "./components/comparison_item";
import CircularProgress from "./components/circular_progress";
import TapComponent from "./components/tap_component";
import ReviewBox from "./components/review_box";

export default function ComparisonPage() {
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

      <FilterComponent></FilterComponent>

      <p className="text-3xl font-semibold ml-10 mt-7">
        {"Let's us help you find the perfect product!"}
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
      </div>
    </div>
  );
}
