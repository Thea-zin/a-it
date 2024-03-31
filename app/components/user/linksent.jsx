export default function LinkSent({ setSignStatus, message }) {
  return (
    <div className="p-4 absoute fixed inset-0 flex item-center justify-center z-50 bg-transparent/50">
      <div className="relative">
        <button
          className="absolute lg:ml-[93%] lg:mt-[2%] md:ml-[93%] md:mt-[2%] sm:ml-[93%] sm:mt-[3%] xsm:ml-[90%] xsm:mt-[3%]"
          onClick={() => {
            setSignStatus(0);
          }}
        >
          <img src={"../cross-bold.png"} className="w-5 h-5"></img>
        </button>
        <div className="p-2">
          <div className="text-xl lg:w-[700px] md:w-[600px] sm:w-[500px] xsm:w-[300px] border bg-base rounded-[16px] md:p-10 sm:p-7 xsm:p-8 flex flex-col place-content-center place-items-center">
            <p className="text-center">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
