export default function ReviewBox() {
  return (
    <div className="bg-base xm:p-10 p-3 pb-0">
      <div className="flex place-items-center">
        <div className="flex w-10 xm:w-16 h-10 xm:h-16 rounded-full overflow-hidden">
          <img src="/write_review/profile_1.png" alt="" />
        </div>
        <div className="ml-3 text-xs xm:text-[1rem] flex-1">
          <p className="text-basedark">Small Business (10-20 employees)</p>
          <p className="font-semibold">Kimura Keito (木村慧人)</p>
        </div>
      </div>
      <hr className="border-divider my-5" />
      <div className="flex place-items-center">
        <div className="flex text-[#F3B146] text-lg">
          <iconify-icon icon="clarity:star-solid"></iconify-icon>
          <iconify-icon icon="clarity:star-solid"></iconify-icon>
          <iconify-icon icon="clarity:star-solid"></iconify-icon>
          <iconify-icon icon="clarity:star-solid"></iconify-icon>
          <iconify-icon icon="clarity:star-solid"></iconify-icon>
        </div>
        <p className="text-xs xm:text-[1rem] ml-2 font-medium text-bgray">Sep 22, 2023</p>
      </div>
      <p className="mt-3 font-semibold text-sm xm:text-lg">
        A platform that answers any questions
      </p>
      <p className="mt-6 text-basedark text-xs xm:text-nbase">
        With Google Analytics, a powerful web analytics tool, website owners,
        marketers, and analysts can measure, track, and analyse website traffic,
        user behaviour, and conversion goals. Some of Google Analytics' best
        qualities include the ones listed below:
        <br />
        <br />
        Users that use customizable dashboards may keep track of the metrics
        that matter most to their companies.
        <br />
        Users gain access to information about the visitors and behaviour to
        their websites in real-time through real-time reporting.
        <br />
        Users can set up and measure specific targets, such as form fills,
        sales, or page visits.
      </p>
      <div className="hidden xm:block border-y-[1px] border-divider mt-10 py-4 text-basedark">
        <div className="flex flex-wrap justify-between">
          <button className="flex place-items-center">
            <div className="text-3xl flex">
              <iconify-icon icon="ei:like"></iconify-icon>
            </div>
            <p className="hidden sm:block">Helpful?</p>
          </button>
          <button className="flex place-items-center">
            <div className="text-3xl flex">
              <iconify-icon icon="ei:comment"></iconify-icon>
            </div>
            <p className="hidden sm:block">Comment</p>
          </button>
          <button className="flex place-items-center">
            <div className="text-3xl flex">
              <iconify-icon icon="mdi-light:share"></iconify-icon>
            </div>
            <p className="hidden sm:block">Share</p>
          </button>

          <button className="flex place-items-center">
            <div className="text-2xl flex">
              <iconify-icon icon="ant-design:heart-outlined"></iconify-icon>
            </div>
            <p className="hidden sm:block">Save to My List</p>
          </button>
        </div>
      </div>
    </div>
  );
}
