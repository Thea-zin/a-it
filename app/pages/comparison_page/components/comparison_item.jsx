"use client";

export default function ComparisonItems() {
  return (
    <div className="">
      <p className="text-xl ml-8 mt-7 font-medium">Comparison Items</p><br />
      <hr className="text-[#E3E6EA] w-full"/>
      <div className="ml-8 mt-3 mb-6 text-lg text-[#4A4A4A] font-medium">
        <div className="">
          <input type="checkbox" id="product_list" className="cursor-pointer my-3 mr-2" />
          <label htmlFor="product_list" className="cursor-pointer">
            Product list
          </label>
        </div>
        <div className="">
          <input type="checkbox" id="function" className="cursor-pointer my-3 mr-2" />
          <label htmlFor="function" className="cursor-pointer">
            Function
          </label>
        </div>
        <div className="">
          <input type="checkbox" id="rating" className="cursor-pointer my-3 mr-2" />
          <label htmlFor="rating" className="cursor-pointer">
            Rating
          </label>
        </div>
        <div className="">
          <input type="checkbox" id="pricing_1" className="cursor-pointer my-3 mr-2" />
          <label htmlFor="pricing_1" className="cursor-pointer">
            Pricing
          </label>
        </div>
        <div className="">
          <input type="checkbox" id="review" className="cursor-pointer my-3 mr-2" />
          <label htmlFor="review" className="cursor-pointer">
            Review
          </label>
        </div>
        <div className="">
          <input type="checkbox" id="enterprise" className="cursor-pointer my-3 mr-2" />
          <label htmlFor="enterprise" className="cursor-pointer">
            Enterprise
          </label>
        </div>
      </div>
    </div>
  );
}
