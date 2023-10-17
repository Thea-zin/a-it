export default function FilterBox() {
  return (
    <div className="bg-white py-7 rounded-2xl shadow">
      <div className="flex justify-between px-7 mb-3">
        <p className="text-2xl font-medium">Filters</p>
        <button className="text-darkblue">Reset Filter</button>
      </div>

      <hr className="border-divider"/>

      <div className="px-7">
        <p className="mt-2 font-semibold">Software Rating</p>
        <div className="flex place-items-center mt-3">
          <input
            type="checkbox"
            id="r1"
            className="cursor-pointer mr-2"
          />
          <label
            htmlFor="r1"
            className="cursor-pointer flex place-items-center"
          >
            <div className="flex bg-darkblue px-2 rounded place-content-center place-items-center">
              <div className="text-[#EDA42D] flex place-content-center text-lg">
                <iconify-icon icon="clarity:star-solid"></iconify-icon>
              </div>
              <p className="ml-2 text-md font-medium text-white">4.4</p>
            </div>
          </label>
        </div>
        <div className="flex place-items-center mt-4">
          <input
            type="checkbox"
            id="r2"
            className="cursor-pointer mr-2"
          />
          <label
            htmlFor="r2"
            className="cursor-pointer flex place-items-center"
          >
            <div className="flex bg-darkblue px-2 rounded place-content-center place-items-center">
              <div className="text-[#EDA42D] flex place-content-center text-lg">
                <iconify-icon icon="clarity:star-solid"></iconify-icon>
              </div>
              <p className="ml-2 text-md font-medium text-white">4.5</p>
            </div>
            <p className="text-[#4A4A4A] font-semibold text-lg ml-2">& above</p>
          </label>
        </div>
        <div className="flex place-items-center mt-4 mb-5">
          <input
            type="checkbox"
            id="r3"
            className="cursor-pointer mr-2"
          />
          <label
            htmlFor="r3"
            className="cursor-pointer flex place-items-center"
          >
            <div className="flex bg-darkblue px-2 rounded place-content-center place-items-center">
              <div className="text-[#EDA42D] flex place-content-center text-lg">
                <iconify-icon icon="clarity:star-solid"></iconify-icon>
              </div>
              <p className="ml-2 text-md font-medium text-white">2.5</p>
            </div>
            <p className="text-[#4A4A4A] font-semibold text-lg ml-2">& above</p>
          </label>
        </div>
      </div>

      <hr className="border-divider"/>

      <div className="px-7 text-lg">
        <p className="mt-3 font-semibold text-[1rem]">Business type</p>
        <div className="flex flex-col">
          <div className="flex place-items-center mt-2">
            <input
              type="checkbox"
              id="student"
              className="cursor-pointer mr-2"
            />
            <label htmlFor="student" className="cursor-pointer text-[#4A4A4A] font-semibold text-lg">
              Student
            </label>
          </div>
          <div className="flex place-items-center mt-2">
            <input
              type="checkbox"
              id="startup"
              className="cursor-pointer mr-2"
            />
            <label htmlFor="startup" className="cursor-pointer text-[#4A4A4A] font-semibold text-lg">
              Start-up
            </label>
          </div>
          <div className="flex place-items-center mt-2">
            <input
              type="checkbox"
              id="freelance"
              className="cursor-pointer mr-2"
            />
            <label htmlFor="freelance" className="cursor-pointer text-[#4A4A4A] font-semibold text-lg">
              Freelancer
            </label>
          </div>
          <div className="flex place-items-center mt-2">
            <input
              type="checkbox"
              id="sme"
              className="cursor-pointer mr-2"
            />
            <label htmlFor="sme" className="cursor-pointer text-[#4A4A4A] font-semibold text-lg">
              SMEs
            </label>
          </div>
          <div className="flex place-items-center mt-2">
            <input
              type="checkbox"
              id="agency"
              className="cursor-pointer mr-2"
            />
            <label htmlFor="agency" className="cursor-pointer text-[#4A4A4A] font-semibold text-lg">
              Agency
            </label>
          </div>
          <div className="flex place-items-center mt-2">
            <input
              type="checkbox"
              id="enterprise"
              className="cursor-pointer mr-2"
            />
            <label htmlFor="enterprise" className="cursor-pointer text-[#4A4A4A] font-semibold text-lg">
              Enterprise
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
