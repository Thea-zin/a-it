"use client";

import { useEffect, useState } from "react";

export default function SignUp({ setSignStatus }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showVerify, setShowVerify] = useState(false);
  const [name, setName] = useState(true);
  const [occupation, setOccupation] = useState(true);
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  const [verify, setVerify] = useState(true);
  const [allow, setAllow] = useState(false);
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name && occupation && email && password && verify && allow) {
      onSignUp();
      setAllow(false);
    }
  }, [name, occupation, email, password, verify, allow]);

  const validation = (formData) => {
    setForm(formData);

    const name_form = formData.get("name");
    const occupation_form = formData.get("occupation");
    const email_form = formData.get("email");
    const password_form = formData.get("password");
    const verify_form = formData.get("verify");
    // console.log(
    //   name_form,
    //   occupation_form,
    //   email_form,
    //   password_form,
    //   verify_form
    // );

    setName(name_form != "" && name_form != null);
    setOccupation(occupation_form != "" && occupation_form != null);
    setEmail(
      email_form != null &&
        String(email_form)
          .toLocaleLowerCase()
          .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    );

    setPassword(
      password_form != null &&
        password_form.length >= 8 &&
        password_form == verify_form
    );
    setVerify(
      verify_form != null &&
        verify_form.length >= 8 &&
        password_form == verify_form
    );
    setAllow(true);
  };

  const onSignUp = async () => {
    setLoading(true);
    const temp = await fetch("/api/user/signup", {
      method: "POST",
      body: form,
    });
    const res = await temp.json();
    // console.log(res);
    setLoading(false);
    if (temp.status == 200) setSignStatus(3);
    else alert(`Sign up Failed!\n${res.reason}`);
  };

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
                Sign Up
              </div>

              <form action={validation}>
                <div className="flex justify-center mt-2">
                  <input
                    type="text"
                    className={`border py-2 px-4  rounded-full w-[70%] ${
                      name ? "border-basedark" : "border-red"
                    }`}
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <input
                    type="text"
                    className={`border py-2 px-4  rounded-full w-[70%] ${
                      occupation ? "border-basedark" : "border-red"
                    }`}
                    id="occupation"
                    name="occupation"
                    placeholder="Occupation"
                  />
                </div>
                <div className="flex justify-center mt-2">
                  <input
                    type="text"
                    className={`border py-2 px-4  rounded-full w-[70%] ${
                      email ? "border-basedark" : "border-red"
                    }`}
                    id="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex justify-center relative mt-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`border py-2 px-4 lg:pr-[12%] md:pr-[12%] sm:pr-[16%] xsm:pr-[20%] rounded-full w-[70%] ${
                      password ? "border-basedark" : "border-red"
                    }`}
                    id="password"
                    name="password"
                    placeholder="Password"
                  />

                  <div
                    className="lg:ml-[60%] md:ml-[60%] sm:ml-[60%] xsm:ml-[50%] bottom-2 absolute cursor-pointer"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <p className="text-basedark">hide</p>
                    ) : (
                      <p className="text-basedark">show</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center relative mt-2">
                  <input
                    type={showVerify ? "text" : "password"}
                    className={`border py-2 px-4 lg:pr-[12%] md:pr-[12%] sm:pr-[16%] xsm:pr-[20%] rounded-full w-[70%] ${
                      password ? "border-basedark" : "border-red"
                    }`}
                    id="verify"
                    name="verify"
                    placeholder="Re Enter Password"
                  />

                  <div
                    className="lg:ml-[60%] md:ml-[60%] sm:ml-[60%] xsm:ml-[50%] bottom-2 absolute cursor-pointer"
                    onClick={() => {
                      setShowVerify(!showVerify);
                    }}
                  >
                    {showVerify ? (
                      <p className="text-basedark">hide</p>
                    ) : (
                      <p className="text-basedark">show</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center mt-2">
                  {loading ? (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#434280"
                          d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                          opacity="0.5"
                        />
                        <path
                          fill="#434280"
                          d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                        >
                          <animateTransform
                            attributeName="transform"
                            dur="1s"
                            from="0 12 12"
                            repeatCount="indefinite"
                            to="360 12 12"
                            type="rotate"
                          />
                        </path>
                      </svg>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className="bg-darkblue text-white p-2 rounded-full w-2/4 lg:text-[24px] md:text-[20px] sm:text-[15px] xsm:text-[13px] "
                    >
                      Sign Up
                    </button>
                  )}
                </div>
              </form>

              <div className="text-center">
                Already have an account?
                <span className="text-cyan">
                  {" "}
                  <button
                    onClick={() => {
                      setSignStatus(2);
                    }}
                  >
                    {" "}
                    Log In
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
