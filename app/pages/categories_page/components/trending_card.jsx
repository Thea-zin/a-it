export default function TrendingCard() {
  return (
    <div className="border-[1px] border-bgray rounded-2xl p-4">
      <div className="flex flex-col place-items-center bg-base rounded-3xl py-5 px-7">
        <div className="flex">
          <div className="flex place-items-center text-cyan">
            <iconify-icon icon="mdi:star-four-points"></iconify-icon>
            <div className="flex place-items-center text-[22px]">
              <iconify-icon icon="mdi:star-four-points"></iconify-icon>
            </div>
            <iconify-icon icon="mdi:star-four-points"></iconify-icon>
          </div>
          <p className="text-xl font-semibold mx-3">Trending</p>
          <div className="flex place-items-center text-cyan">
            <iconify-icon icon="mdi:star-four-points"></iconify-icon>
            <div className="flex place-items-center text-[22px]">
              <iconify-icon icon="mdi:star-four-points"></iconify-icon>
            </div>
            <iconify-icon icon="mdi:star-four-points"></iconify-icon>
          </div>
        </div>
        <div className="mt-7 w-28">
          <img src="/write_review/icons/15.png" alt="" className="w-full"/>
        </div>
        <p className="mt-2 text-2xl font-medium text-[#2F455C]">VLive</p>
        <div className="flex bg-darkblue px-3 rounded place-content-center place-items-center">
          <div className="text-[#EDA42D] flex place-content-center text-lg">
            <iconify-icon icon="clarity:star-solid"></iconify-icon>
          </div>
          <p className="ml-2 text-lg font-medium text-white">4.4</p>
        </div>
        <div className="line-clamp-3 text-darkgray text-[15px] mt-7">
          Canva's AI features—including Text to Image, Magic Edit, Magic
          Design,...
        </div>
        <button className="mt-12 rounded-full bg-darkblue font-semibold text-2xl text-white py-2 w-full">Learn more</button>
      </div>
    </div>
  );
}
