"use client";
import React from "react";
import Link from "next/link";
import firebase_app from "@/app/firebase";
import { useState, useEffect } from "react";
// import SignIn from "../authentications/components/signIn";
// import SignUp from "../authentications/components/signUpEmailPassword";
// import SignUpWithThirdParty from "../authentications/components/signUpWith3rdParty";

import { getAuth, signOut } from "firebase/auth";
import SignUp from "./user/signup";
import SignIn from "./user/signin";
import LinkSent from "./user/linksent";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [signStatus, setSignStatus] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const mode = query.get("mode");
    const oobCode = query.get("oobCode");
    if (mode != "" && mode != null) {
      if (mode == "verifyEmail") verifyEmail(oobCode);
    }

    // part of automation to update data in firebase
    updateDataInFirebase();
  }, []);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      if (token != "" && token != null) {
        setShowProfile(true);
      } else {
        setShowProfile(false);
      }
    } catch (e) {
      setShowProfile(false);
    }
  });

  const verifyEmail = async (oobCode) => {
    const temp = await fetch("/api/user/verifyemail", {
      method: "POST",
      body: JSON.stringify({ actionCode: oobCode }),
    });
    const res = await temp.json();
    if (temp.status == 200) {
      setSignStatus(4);
    } else {
      setSignStatus(5);
    }
    router.push("/");
  };

  const updateDataInFirebase = async () => {
    const zooKeeper = Math.floor(Math.random() * 10000000000);
    while (true) {
      try {
        const temp = await fetch("/api/automation/refresh", {
          method: "POST",
          body: JSON.stringify({ zooKeeper: zooKeeper }),
        });
        if (temp.status == 504) {
          continue;
        }
        const res = await temp.json();
        if (!res.cont) {
          break;
        }
      } catch (e) {
        break;
      }
    }
  };

  return (
    <header className="p-4 min-w-[500px]">
      <div className="menu flex justify-between ">
        <div className="listing flex items-center gap-5  ">
          <Link className="logo " href="/">
            <img src="/photo/LogoAIT.png" />
          </Link>

          <div className="categories flex items-center">
            <Link href="/pages/categories">Software Categories</Link>
          </div>
        </div>

        {!showProfile ? (
          <div className=" flex gap-5 justify-center items-center">
            <button
              onClick={() => {
                setSignStatus(2);
              }}
            >
              Log in
            </button>
            <button
              className="bg-darkblue p-2 text-white text-center rounded-full w-24 hover:bg-sky-700 cursor-pointer"
              onClick={() => {
                setSignStatus(1);
              }}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              router.push("/pages/profile");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3em"
              height="3em"
              viewBox="0 0 48 48"
            >
              <g fill="#434280">
                <path d="M32 20a8 8 0 1 1-16 0a8 8 0 0 1 16 0" />
                <path
                  fillRule="evenodd"
                  d="M23.184 43.984C12.517 43.556 4 34.772 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20a21.253 21.253 0 0 1-.274 0c-.181 0-.362-.006-.542-.016M11.166 36.62a3.028 3.028 0 0 1 2.523-4.005c7.796-.863 12.874-.785 20.632.018a2.99 2.99 0 0 1 2.498 4.002A17.942 17.942 0 0 0 42 24c0-9.941-8.059-18-18-18S6 14.059 6 24c0 4.916 1.971 9.373 5.166 12.621"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          </button>
        )}
      </div>

      {signStatus == 1 && <SignUp setSignStatus={setSignStatus} />}
      {signStatus == 2 && <SignIn setSignStatus={setSignStatus} />}
      {signStatus == 3 && (
        <LinkSent
          setSignStatus={setSignStatus}
          message={
            "An email verification link has been sent to your email!\nPlease check your inbox and follow the link."
          }
        />
      )}
      {signStatus == 4 && (
        <LinkSent
          setSignStatus={setSignStatus}
          message={"Email Successfully Verified!"}
        />
      )}
      {signStatus == 5 && (
        <LinkSent
          setSignStatus={setSignStatus}
          message={"Failed to Verify Email!"}
        />
      )}
    </header>
  );
};

export default Navbar;
