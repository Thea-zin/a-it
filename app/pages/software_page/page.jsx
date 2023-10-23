import ReviewBox from "./components/review_box";
import Item from "../write_review_page/components/item_component";
import TapSoftwareComponent from "./components/tap_component";

export default function SoftwarePage() {
  return (
    <div className="px-10 pt-7 pb-10 bg-base font-dmsan">
      <div className="">
        <img src="/write_review\software_hero.png" alt="" />
      </div>
      <div className="bg-white flex justify-between px-8 relative">
        <div className="flex">
          <div className="p-7 w-[9.3rem] h-[9.3rem] border-[1px] border-divider -translate-y-8 bg-white flex rounded-lg">
            <img src="/write_review/icons/7.png" alt="" />
          </div>
          <div className="ml-5 mt-1">
            <p className="text-3xl font-semibold">ChatGPT</p>
            <div className="flex mt-4 place-items-center">
              <div className="flex text-[#F3B146] relative z-10 pr-2 text-lg place-items-center">
                <iconify-icon icon="clarity:star-solid"></iconify-icon>
                <iconify-icon icon="clarity:star-solid"></iconify-icon>
                <iconify-icon icon="clarity:star-solid"></iconify-icon>
                <iconify-icon icon="clarity:star-solid"></iconify-icon>
                <iconify-icon icon="clarity:star-solid"></iconify-icon>
                <p className="text-bgray text-[1.05rem]">(2134)</p>
              </div>
              <p className="border-l-[1px] pl-2 border-divider font-semibold text-bblue">
                9,872 reviews
              </p>
            </div>
            <button className="flex place-items-center mt-2 text-darkgray">
              <div className="text-2xl flex place-items-center">
                <iconify-icon icon="ant-design:heart-outlined"></iconify-icon>
              </div>
              <p className="font-semibold text-sm ml-2">Save to My List</p>
            </button>
          </div>
        </div>

        <div className="py-5 px-12 bg-base text-center my-6 rounded-2xl shadow">
          <p className="text-darkblue font-medium text-2xl">
            Hard to make a dicision?
          </p>
          <p className="font-medium">Compare with other products</p>
          <button className="bg-darkblue mt-4 text-white text-xl font-semibold py-3 px-20 rounded-full">
            Compare
          </button>
        </div>

        <TapSoftwareComponent />
      </div>

      <hr className="border-divider" />

      <div className="flex p-8 bg-white relative">
        <div className="border-divider border-[1px] w-[67%] p-4 rounded-2xl">
          <p className="text-3xl font-bold mt-3">
            ChatGPT Reviews & Product Details
          </p>
          <div className="bg-base p-10 mt-5 rounded-2xl">
            <p className="text-2xl font-bold">Google Analytics Overview</p>
            <hr className="border-divider my-3" />
            <p className="font-medium">
              <span className="font-semibold">What is Google Analytics?</span>
              <br />
              <br />
              Improve the customer experience with digital analytics for your
              website or mobile app — for free.
              <br />
              <br />
              Google Analytics gives companies rich insights about their
              websites, their audiences and their digital marketing. Powerful,
              flexible and easy to use, Analytics helps savvy marketers find the
              messages and channels that earn them the best results.
              State-of-the-art conversion attribution and testing tools help
              companies large and small build better user experiences and
              maximize their digital strategy.
              <br />
              <br />
              Get user insights that only Google can give you. Understand your
              site and app users to better evaluate the performance of your
              content, products, and more. Whether your business is big or
              small, Google can help you see what’s working and fix what’s not.
              Let Google Analytics work for you. Learn more at
              google.com/analytics.
            </p>

            <hr className="border-divider my-5" />

            <div className="mt-10">
              <p className="text-2xl font-bold">Google Analytics Overview</p>
              <button className="flex place-items-center mt-2">
                <div className="text-darkblue text-3xl flex place-items-center">
                  <iconify-icon icon="cryptocurrency:chat"></iconify-icon>
                </div>
                <p className="text-bblue font-semibold ml-3">
                  Contact ChatGPT Company
                </p>
              </button>
              <p className="mt-8 text-lg font-semibold">Product Description</p>
              <p className="mt-3 text-basedark">
                Google Analytics not only lets you measure sales and
                conversions, but also gives you fresh insights into how visitors
                use your site, how they arrived on your site, and how you can
                keep them coming back. Delivered on Google's world-class
                platform.
              </p>

              <hr className="my-8 border-divider" />

              <div>
                <p className="mt-8 text-lg font-semibold">Seller Details</p>
                <div className="flex justify-start">
                  <div>
                    {[1, 2, 3].map((item, index) => {
                      return (
                        <div className="flex place-items-center mt-5" key={index}>
                          <div className="text-3xl">
                            <iconify-icon icon="mdi:user-star"></iconify-icon>
                          </div>
                          <div className="font-medium ml-3">
                            <p className="">Elon Musk</p>
                            <p className="-translate-y-1">Seller</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="ml-72">
                    {[1, 2, 3].map((item, index) => {
                      return (
                        <div className="flex place-items-center mt-5" key={index}>
                          <div className="text-3xl">
                            <iconify-icon icon="mdi:user-star"></iconify-icon>
                          </div>
                          <div className="font-medium ml-3">
                            <p className="">Elon Musk</p>
                            <p className="-translate-y-1">Seller</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <p className="mt-7 text-lg font-semibold">Seller Description</p>
                <p className="text-basedark mt-1">
                  Organize the world’s information and make it universally
                  accessible and useful.
                </p>
              </div>

              <hr className="border-divider mt-7" />

              <div className="flex my-3 place-items-center">
                <div className="w-16 h-16 flex rounded-full overflow-hidden">
                  <img src="/write_review/profile_1.png" alt="" />
                </div>
                <div className="ml-3">
                  <p className="text-basedark">Overviewed Provided by:</p>
                  <p className="font-semibold">Mao Timong</p>
                </div>
              </div>

              <hr className="border-divider my-7" />

              <div className="relatvie">
                <p className="mt-7 text-lg font-semibold">Values & Ethics</p>
                <div className="flex justify-between mt-3">
                  <div className="w-[300px]">
                    <button
                      className="bg-cyan px-3 rounded-full text-white"
                      disabled
                    >
                      Open Cloud
                    </button>
                    <p className="mt-2">
                      We help you develop, innovate, and scale with open,
                      flexible technology without vendor lock-in.
                    </p>
                  </div>
                  <div className="w-[300px]">
                    <button
                      className="bg-cyan px-3 rounded-full text-white"
                      disabled
                    >
                      Trust and Security
                    </button>
                    <p className="mt-2">
                      We keep your data - and your customers’ data - secure and
                      compliant using Google’s own technology and expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-5 py-4 bg-base flex justify-between mt-5 rounded-2xl place-items-center">
            <p className="text-basedark ml-5">Software user?</p>
            <button className="bg-darkblue text-white text-2xl font-semibold py-4 px-20 rounded-full">
              Write a Review
            </button>
          </div>

          <div className="mt-5 bg-base pb-10 rounded-2xl overflow-hidden">
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
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
                <img src="/write_review\icons\next.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-6">
          <div className="bg-base p-5 rounded-2xl">
            <p className="text-2xl font-bold text-center">
              ChatGPT Comparision
            </p>
            {[
              ["ChatGPT", 7, "BingAI", 5],
              ["ChatGPT", 7, "CanvaAI", 3],
              ["ChatGPT", 7, "NotionAI", 6],
              ["ChatGPT", 7, "Google Doc AI", 4],
            ].map((item, index) => {
              return (
                <div
                  className="flex justify-between place-items-center mt-7"
                  key={index}
                >
                  <div className="w-36 text-center  flex flex-col">
                    <div className="p-7 bg-white w-full h-36 flex place-content-center flex-1 rounded-lg border-[1px] border-divider">
                      <img
                        src={`/write_review/icons/${item[1]}.png`}
                        alt=""
                        className=""
                      />
                    </div>
                    <p className="text-xl font-semibold mt-1">{item[0]}</p>
                  </div>
                  <p>VS</p>
                  <div className="w-36 text-center  flex flex-col">
                    <div className="p-7 bg-white w-full h-36 flex place-content-center flex-1 rounded-lg border-[1px] border-divider">
                      <img
                        src={`/write_review/icons/${item[3]}.png`}
                        alt=""
                        className=""
                      />
                    </div>
                    <p className="text-xl font-semibold mt-1">{item[2]}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-base rounded-2xl pt-4 pb-10 px-7">
            <p className="text-center text-2xl font-semibold">
              ChatGPT Features
            </p>
            <div className="">
              {[
                "Language understanding and generation",
                "Strengthen and renew branding",
                "Language understanding and generation",
                "Greater negotiation opportunities",
                "Strengthen and renew branding",
                "Language understanding and generation",
                "Strengthen and renew branding",
              ].map((item, index) => {
                return (
                  <div className="flex place-items-center mt-5" key={index}>
                    <div className="text-cyan flex">
                      <iconify-icon icon="octicon:feed-star-16"></iconify-icon>
                    </div>
                    <p className="ml-1">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 bg-base rounded-2xl pt-6">
            <p className="text-center text-2xl font-semibold">
              Best Alternative
            </p>
            <div className="mt-5 px-12">
              {[1, 2, 3, 4].map((item, index) => {
                return Item(index, "BingAI", item);
              })}
            </div>
            <div className="flex place-content-center py-10">
              <button className="text-bblue font-semibold">
                See All Alternatives
              </button>
            </div>
          </div>

          <div className="mt-5 bg-base pt-4 pb-8 rounded-2xl">
            <p className="font-semibold text-2xl text-center">Explore more</p>
            <div className="px-16 mt-6">
              {[
                "CRM",
                "Digital Marketing",
                "Sale Management",
                "Content Analytic",
                "SEO Analytic",
                "Designer",
                "Business Management",
                "Financial",
              ].map((item, index) => {
                return (
                  <button className="my-1 flex text-bblue mt-3" key={index}>
                    <div className="w-10">
                      <img src="/write_review/icons/next_blue.png" alt="" />
                    </div>
                    <p>{item}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
