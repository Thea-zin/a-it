import ReviewBox from "./components/review_box";
import Item from "../write_review_page/components/item_component";
import TapSoftwareComponent from "./components/tap_component";
import { getSoftware, getIconURL, populate } from "@/app/api/firebase";
import Stars from "./components/star_display";

export default async function SoftwarePage({ searchParams }) {
  let data = { name: "" };
  let iconUrl = null;
  // populate()
  try {
    data = await getSoftware(searchParams.id);
    iconUrl = await getIconURL(`${data.icon}.png`);
  } catch (e) {
    console.log(e);
    data = { name: "ChatGPT" };
    iconUrl = null;
  }

  return (
    <div className="sm:px-2 xl:px-10 pt-7 pb-10 bg-base font-dmsan">
      <div className="">
        <img
          src="/write_review/software_hero.png"
          alt=""
          className="hidden sm:block"
        />
        <img
          src="/write_review/software_hero_mobile.png"
          alt=""
          className="sm:hidden"
        />
      </div>
      <div className="bg-white flex justify-between px-3 sm:px-8 relative h-40 xm:h-52 lg:h-auto ">
        <div className="flex">
          <div className="p-2 xm:p-5 sm:p-7 w-20 xm:w-28 sm:w-[9.3rem] h-20 xm:h-28 sm:h-[9.3rem] border-[1px] border-divider -translate-y-5 sm:-translate-y-8 bg-white flex rounded-lg">
            <img src={iconUrl} alt="" placeholder="" />
          </div>
          <div className="ml-5 mt-1">
            <p className="text-xl sm:text-3xl font-semibold">{data.name}</p>
            <div className="xm:flex mt-2 sm:mt-4 place-items-center">
              <Stars number={5} />
              <p className="xm:border-l-[1px] xm:pl-2 border-divider text-sm sm:text-[1rem] font-semibold text-bblue">
                9,872 reviews
              </p>
            </div>
            <button className="flex place-items-center mt-2 text-darkgray">
              <div className="text-[1rem] xm:text-2xl flex place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 1024 1024"
                >
                  <path
                    fill="currentColor"
                    d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39c-10 6.1-19.5 12.8-28.5 20.1c-9-7.3-18.5-14-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3z"
                  />
                </svg>
              </div>
              <p className="font-semibold text-sm ml-2">Save to My List</p>
            </button>
          </div>
        </div>

        <div className="lg:block hidden py-5 px-12 bg-base text-center my-6 rounded-2xl shadow">
          <p className="text-darkblue font-medium text-2xl">
            Hard to make a dicision?
          </p>
          <p className="font-medium">Compare with other products</p>
          <button className="bg-darkblue mt-4 text-white text-xl font-semibold py-3 px-20 rounded-full">
            Compare
          </button>
        </div>

        <div className="absolute bottom-0 right-0 left-0 lg:block flex place-content-center">
          <TapSoftwareComponent id={searchParams.id} />
        </div>
      </div>

      <hr className="border-divider" />

      <div className="lg:flex xl:p-8 p-4 bg-white relative">
        <div className="border-divider border-[1px] xl:w-[67%] lg:w-[63%] p-4 rounded-2xl">
          <p className="text-xl xm:text-3xl font-bold mt-3">
            {`${data.name} Reviews & Product Details`}
          </p>
          <div className="bg-base xm:p-10 p-3 mt-5 rounded-2xl">
            <p className="text-[1rem] xm:text-2xl font-bold">{`${data.name} Overview`}</p>
            <hr className="border-divider my-3" />
            <p className="font-medium text-xs xm:text-nbase ">
              <span className="font-semibold text-sm xm:text-[1rem]">{`What is ${data.name}?`}</span>
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
              <p className="text-[1rem] xm:text-2xl font-bold">
                Google Analytics Overview
              </p>
              <button className="flex place-items-center mt-2">
                <div className="text-darkblue text-2xl xm:text-3xl flex place-items-center">
                  <iconify-icon icon="cryptocurrency:chat"></iconify-icon>
                </div>
                <p className="text-bblue font-semibold ml-3 text-sm xm:text-[1rem]">
                  Contact ChatGPT Company
                </p>
              </button>
              <p className="mt-8 text-sm xm:text-lg font-semibold">
                Product Description
              </p>
              <p className="mt-3 text-basedark text-xs xm:text-nbase">
                Google Analytics not only lets you measure sales and
                conversions, but also gives you fresh insights into how visitors
                use your site, how they arrived on your site, and how you can
                keep them coming back. Delivered on Google's world-class
                platform.
              </p>

              <hr className="my-8 border-divider" />

              <div>
                <p className="mt-8 text-sm xm:text-lg font-semibold">
                  Seller Details
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item, index) => {
                    return (
                      <div
                        className="flex place-items-center mt-5 relative"
                        key={index}
                      >
                        <div className="text-3xl">
                          <iconify-icon icon="mdi:user-star"></iconify-icon>
                        </div>
                        <div className="font-medium ml-3 text-xs xm:text-nbase overflow-clip">
                          <p className="font-bold xm:font-normal line-clamp-1">
                            Elon Musk
                          </p>
                          <p className="-translate-y-1 line-clamp-1">Seller</p>
                        </div>
                      </div>
                    );
                  })}
                  {/* 
                  <div className="">
                    {[1, 2, 3].map((item, index) => {
                      return (
                        <div
                          className="flex place-items-center mt-5"
                          key={index}
                        >
                          <div className="text-3xl">
                            <iconify-icon icon="mdi:user-star"></iconify-icon>
                          </div>
                          <div className="font-medium ml-3 text-xs xm:text-nbase">
                            <p className="font-bold xm:font-normal">Elon Musk</p>
                            <p className="-translate-y-1">Seller</p>
                          </div>
                        </div>
                      );
                    })}
                  </div> */}
                </div>
                <p className="mt-7 text-sm xm:text-lg font-semibold">
                  Seller Description
                </p>
                <p className="text-basedark mt-1 text-xs xm:text-nbase">
                  Organize the world’s information and make it universally
                  accessible and useful.
                </p>
              </div>

              <hr className="border-divider mt-7" />

              <div className="flex my-3 place-items-center">
                <div className="w-10 xm:w-16 h-10 xm:h-16 flex rounded-full overflow-hidden">
                  <img src="/write_review/profile_1.png" alt="" />
                </div>
                <div className="ml-3 text-xs xm:text-nbase flex-1">
                  <p className="text-basedark">Overviewed Provided by:</p>
                  <p className="font-semibold">Mao Timong</p>
                </div>
              </div>

              <hr className="border-divider my-7" />

              <div className="relatvie">
                <p className="mt-7 text-sm xm:text-lg font-semibold">
                  Values & Ethics
                </p>
                <div className="xm:flex justify-between mt-3">
                  <div className="xm:w-[300px] text-xs xm:text-nbase mb-4">
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
                  <div className="xm:w-[300px] text-xs xm:text-nbase mb-4">
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

          <div className="px-5 py-4 bg-base flex sm:flex-row flex-col justify-between mt-5 rounded-2xl place-items-center">
            <p className="text-basedark text-sm xm:text-nbase sm:ml-5 mb-3 sm:mb-0">
              Software user?
            </p>
            <button className="bg-darkblue text-white text-sm xm:text-nbase sm:text-xl xl:text-2xl font-semibold py-4 px-5 xm:px-10 md:px-20 rounded-full">
              Write a Review
            </button>
          </div>

          <div className="mt-5 bg-base pb-10 rounded-2xl overflow-hidden">
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
          </div>

          <div className="grid place-items-center w-full">
            <div className="hidden sm:flex place-items-center mt-3">
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

            <div className="flex sm:hidden place-items-center mt-3">
              {[1, 2, 3].map((item, index) => {
                return (
                  <button
                    key={index}
                    className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-7 xm:w-9 md:w-12 h-7 xm:h-9 md:h-12 rounded-full"
                  >
                    {item}
                  </button>
                );
              })}
              <button className="bg-[#E3E6EA] mx-1 p-1 xm:p-2 w-8 xm:w-10 md:w-12 h-8 xm:h-10 md:h-12   rounded-full grid place-content-center">
                <img src="/write_review\icons\next.png" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:hidden py-5 xm:px-12 px-3 bg-base text-center my-6 rounded-2xl shadow">
          <p className="font-medium text-[1rem] xm:text-2xl text-darkblue ">
            Hard to make a dicision?
          </p>
          <p className="font-medium text-sm xm:text-[1rem]">
            Compare with other products
          </p>
          <button className="bg-darkblue mt-4 text-white text-sm xm:text-xl font-semibold py-3 xm:px-20 px-10 rounded-full">
            Compare
          </button>
        </div>

        <div className="flex-1 xl:ml-6 lg:ml-3">
          <div className="bg-base p-5 rounded-2xl">
            <p className="text-[1rem] xm:text-2xl font-bold text-center">
              {`${data.name} Comparision`}
            </p>
            {[
              [data.name, iconUrl, "BingAI", 5],
              [data.name, iconUrl, "CanvaAI", 3],
              [data.name, iconUrl, "NotionAI", 6],
              [data.name, iconUrl, "Google Doc AI", 4],
            ].map((item, index) => {
              return (
                <div
                  className="flex justify-between place-items-center mt-7 items-start"
                  key={index}
                >
                  <div className="text-center xm:w-28 sm:w-36 relative">
                    <div className="xm:p-7 p-3 bg-white w-full xm:h-28 sm:h-36 h-20 flex place-content-center flex-1 rounded-lg border-[1px] border-divider">
                      <img src={item[1]} alt="" className="" />
                    </div>
                    <p className="text-[1rem] xm:text-xl font-semibold mt-1 text-center">
                      {item[0]}
                    </p>
                  </div>
                  <p className="mt-10 xm:mt-16 sm:mt-20">VS</p>
                  <div className="text-center xm:w-28 sm:w-36 w-20 relative">
                    <div className="xm:p-7 p-3 bg-white w-full xm:h-28 sm:h-36 h-20 flex place-content-center flex-1 rounded-lg border-[1px] border-divider">
                      <img
                        src={`/write_review/icons/${item[3]}.png`}
                        alt=""
                        className=""
                      />
                    </div>
                    <p className="text-[1rem] xm:text-xl font-semibold mt-1 text-center">
                      {item[2]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 bg-base rounded-2xl pt-4 pb-10 px-7">
            <p className="text-center text-[1rem] xm:text-2xl font-bold">
              {`${data.name} Features`}
            </p>
            <div className="lg:block flex place-content-center">
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
                    <div
                      className="flex place-items-center items-start mt-5"
                      key={index}
                    >
                      <div className="text-cyan flex mt-1">
                        <iconify-icon icon="octicon:feed-star-16"></iconify-icon>
                      </div>
                      <p className="ml-1 text-sm xm:text-[1rem]">{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-5 bg-base rounded-2xl pt-6">
            <p className="text-center text-[1rem] xm:text-2xl font-bold">
              Best Alternative
            </p>
            <div className="lg:block flex place-content-center">
              <div className="mt-5 px-12 lg:w-auto w-96">
                {[1, 2, 3, 4].map((item, index) => {
                  return Item(index, "BingAI", item);
                })}
              </div>
            </div>

            <div className="flex place-content-center py-10">
              <button className="text-bblue font-semibold">
                See All Alternatives
              </button>
            </div>
          </div>

          <div className="mt-5 bg-base pt-4 pb-8 rounded-2xl">
            <p className="font-semibold text-[1rem] xm:text-2xl text-center">
              Explore more
            </p>
            <div className="lg:block flex place-content-center">
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
                    <button
                      className="my-1 flex place-content-start text-bblue mt-3"
                      key={index}
                    >
                      <div className="w-5 xm:w-10">
                        <img
                          src="/write_review/icons/next_blue.png"
                          alt=""
                          className=""
                        />
                      </div>
                      <p className="text-left flex-1 text-sm xm:text-[1rem] ml-1">
                        {item}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
