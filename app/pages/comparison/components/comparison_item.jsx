"use client";

export default function ComparisonItems({ comparingItems, setCompItems }) {
  const itemNames = [
    "overview",
    "feature",
    "customization",
    "integration",
    "scalability",
    "maturity",
    "support",
    "pricing",
    "freetrial",
    "review",
  ];
  const onCheck = (item, value) => {
    let temp = { ...comparingItems };
    temp[item] = value;
    setCompItems(temp);
  };

  return (
    <div className="">
      <p className="text-xl ml-2 md:ml-8 mt-7 font-medium text-center flex">
        Comparison Items
      </p>
      <br />
      <hr className="text-[#E3E6EA] w-full" />
      <div className="ml-8 mt-3 mb-6 text-lg text-[#4A4A4A] font-medium grid grid-cols-1 xl:grid-cols-2">
        <div className="">
          <input
            type="checkbox"
            id="overview"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("overview", event.currentTarget.checked);
            }}
          />
          <label htmlFor="overview" className="cursor-pointer">
            Overview
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            id="feature"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("feature", event.currentTarget.checked);
            }}
          />
          <label htmlFor="feature" className="cursor-pointer">
            Feature
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            id="customization"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("customization", event.currentTarget.checked);
            }}
          />
          <label htmlFor="customization" className="cursor-pointer">
            Customization
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            id="integration"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("integration", event.currentTarget.checked);
            }}
          />
          <label htmlFor="integration" className="cursor-pointer">
            Integration
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            id="scalability"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("scalability", event.currentTarget.checked);
            }}
          />
          <label htmlFor="scalability" className="cursor-pointer">
            Scalability
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            id="maturity"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("maturity", event.currentTarget.checked);
            }}
          />
          <label htmlFor="maturity" className="cursor-pointer">
            Maturity
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            id="support"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("support", event.currentTarget.checked);
            }}
          />
          <label htmlFor="support" className="cursor-pointer">
            Support
          </label>
        </div>

        <div className="">
          <input
            type="checkbox"
            id="pricing"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("pricing", event.currentTarget.checked);
            }}
          />
          <label htmlFor="pricing" className="cursor-pointer">
            Pricing
          </label>
        </div>
        <div className="">
          <input
            type="checkbox"
            id="freetrial"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("freetrial", event.currentTarget.checked);
            }}
          />
          <label htmlFor="freetrial" className="cursor-pointer">
            Free Trial
          </label>
        </div>

        <div className="">
          <input
            type="checkbox"
            id="review"
            className="cursor-pointer my-3 mr-2"
            defaultChecked
            onChange={(event) => {
              onCheck("review", event.currentTarget.checked);
            }}
          />
          <label htmlFor="review" className="cursor-pointer">
            Review
          </label>
        </div>
      </div>
    </div>
  );
}
