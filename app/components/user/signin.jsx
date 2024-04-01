"use client";

import { useState, useEffect } from "react";

export default function SignIn({ setSignStatus }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(true);
  const [password, setPassword] = useState(true);
  const [allow, setAllow] = useState(false);
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email && password && allow) {
      onLogin();
      setAllow(false);
    }
  }, [email, password, allow]);

  const validation = (formData) => {
    setForm(formData);
    const email_form = formData.get("email");
    const password_form = formData.get("password");

    setEmail(
      email_form != null &&
        String(email_form)
          .toLocaleLowerCase()
          .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    );

    setPassword(password_form != null && password_form.length >= 8);
    setAllow(true);
  };

  const onLogin = async () => {
    setLoading(true);
    const temp = await fetch("/api/user/signin", {
      method: "POST",
      body: form,
    });
    const res = await temp.json();
    setLoading(false);
    if (temp.status == 200) {
      localStorage.setItem("token", res.token);
      localStorage.setItem("photoURL", res.photoURL);
      localStorage.setItem("displayName", res.displayName);
      localStorage.setItem("joined", res.joined);
      setSignStatus(0);
    } else if (temp.status == 404)
      alert(`Sign up Failed!\n${res.reason}`); // wrong credential
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
                Log In
              </div>

              <form action={validation}>
                <div className="flex justify-center mt-2">
                  <input
                    type="text"
                    className={`border py-2 px-4  rounded-full w-[70%] ${
                      email ? "border-basedark" : "border-red"
                    }`}
                    id="email"
                    name="email"
                    placeholder="Email Address"
                  ></input>
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
                      Log In
                    </button>
                  )}
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
