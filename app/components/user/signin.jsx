"use client";

import { useState } from "react";
import firebase_app from "@/app/firebase";
import { getAuth } from "firebase/auth";

export default function SignIn({ setSignStatus }) {
  const [isOpen, setIsOpen] = useState(false);
  const showPassword = () => {
    setIsOpen(!isOpen);
  };
  const auth = getAuth(firebase_app);

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
        <div className="flex justify-center items-center p-2">
          <div className=" lg:w-[700px] md:w-[600px] sm:w-[500px] xsm:w-[300px]  border bg-base rounded-[16px]   md:p-10 sm:p-7 xsm:p-8 ">
            <div className="space-y-4">
              <div className="flex justify-center items-center">
                <img src={"/photo/logoAIT.png"}></img>
              </div>
              <div className="text-center text-darkblue font-bold text-display-md">
                Log In
              </div>

              <form action={() => {}}>
                <div className="flex justify-center mt-2">
                  <input
                    type="text"
                    className="border py-2 px-4 border-basedark rounded-full w-[70%]"
                    placeholder="Email Address"
                  ></input>
                </div>
                <div className="flex justify-center relative mt-2">
                  <input
                    type={isOpen ? "text" : "password"}
                    className="border py-2 px-4 lg:pr-[12%] md:pr-[12%] sm:pr-[16%] xsm:pr-[20%] border-basedark rounded-full  w-[70%]"
                    placeholder="Password"
                  />

                  <button
                    className="lg:ml-[60%] md:ml-[60%] sm:ml-[60%] xsm:ml-[50%] bottom-2 absolute"
                    onClick={showPassword}
                  >
                    {isOpen ? (
                      <p className="text-basedark">show</p>
                    ) : (
                      <p className="text-basedark">hide</p>
                    )}
                  </button>
                </div>

                <div className="flex justify-center mt-2">
                  <button
                    type="submit"
                    className="bg-darkblue text-white p-2 rounded-full w-2/4 lg:text-[24px] md:text-[20px] sm:text-[15px] xsm:text-[13px] "
                  >
                    Log In
                  </button>
                </div>
              </form>

              <div className="text-center">
                {`Doesn't have an account?`}
                <span className="text-cyan">
                  {" "}
                  <button
                    onClick={() => {
                      setSignStatus(1);
                    }}
                  >
                    {" "}
                    Sign Up
                  </button>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
