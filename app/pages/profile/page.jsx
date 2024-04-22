"use client";

import { useEffect, useState } from "react";
import Favorite from "./components/Favorite";
import ProfilePage from "./components/Profile";
import ChangePassword from "./components/ChangePassword";
import Dashboard from "./components/Dashboard";
import PublishSoftware from "./components/PublishSoftware";
import IsAuth from "@/app/components/isauth";
import { useRouter } from "next/navigation";
import Reviews from "./components/Review";

function Profile() {
  const [activeItem, setActiveItem] = useState(null);
  const [userinfo, setUserInfo] = useState({});
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    handleItemClick(3);
    try {
      let temp = {};
      temp["displayName"] = localStorage.getItem("displayName");
      temp["email"] = localStorage.getItem("email");
      temp["joined"] = localStorage.getItem("joined");
      temp["photoURL"] = localStorage.getItem("photoURL").split("!បំបែក!")[1];

      setActiveItem(3);

      // console.log(temp);
      setUserInfo(temp);
    } catch (e) {
      console.log(e);
    }
  }, []);

  // useEffect(() => {
  //   determineAdmin();
  // }, []);

  // const determineAdmin = async () => {
  //   const token = localStorage.getItem("token");
  //   const temp = await fetch("/api/user/admin", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ token: token }),
  //   });
  //   const res = await temp.json();
  //   if (temp.status == 200) {
  //     setIsAdmin(true);
  //   } else if (temp.status == 405) {
  //     localStorage.setItem("token", "");
  //   }
  // };

  return (
    <div className="font-dmsan bg-base p-6 md:flex m-5 min-w-[500px]">
      <div className="min-w-[300px] mb-10">
        <div className="bg-white flex flex-col rounded-[16px] p-4 md:w-[300px] relative">
          <div className="flex place-content-center">
            {userinfo["photoURL"] == "0" ? (
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6em"
                  height="6em"
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
              </div>
            ) : (
              <img src={userinfo.photoURL}></img>
            )}
          </div>

          <div className="text-display-sm">
            <div className="text-center">{userinfo.displayName}</div>
            <div className=" text-basedark text-label-lg text-center">
              Joined on {userinfo.joined}
            </div>
            <div className="text-body-md mt-10 flex justify-between md:block">
              {/* {isAdmin && (
                <button
                  onClick={() => handleItemClick(1)}
                  className={`flex items-center space-x-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                    activeItem == 1
                      ? "active bg-cyan rounded-[16px] font-bold"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
                    />
                  </svg>
                  <span className="hover:bg-cyan">Dashboard</span>
                </button>
              )}
              {isAdmin && (
                <button
                  onClick={() => handleItemClick(2)}
                  className={`flex items-center space-x-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                    activeItem == 2
                      ? "active bg-cyan rounded-[16px] font-bold"
                      : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11 20v-8.15l-2.6 2.6L7 13l5-5l5 5l-1.4 1.45l-2.6-2.6V20zM4 9V6q0-.825.588-1.412T6 4h12q.825 0 1.413.588T20 6v3h-2V6H6v3z"
                    />
                  </svg>
                  <span className="hover:bg-cyan">Publish Software</span>
                </button>
              )} */}

              <button
                className={`flex place-items-center space-x-3 my-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                  activeItem == 3
                    ? "active bg-cyan rounded-[16px] font-bold"
                    : ""
                }`}
                onClick={() => handleItemClick(3)}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="cyan"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hover:text-cyan mt-[-2%]"
                >
                  <g clipPath="url(#clip0_130_2449)">
                    <path
                      d="M4.26667 26.6667V27.7333H6.4V26.6667H4.26667ZM14.9333 26.6667V27.7333H17.0667V26.6667H14.9333ZM6.4 26.6667V25.6H4.26667V26.6667H6.4ZM14.9333 25.6V26.6667H17.0667V25.6H14.9333ZM10.6667 21.3333C11.7983 21.3333 12.8835 21.7829 13.6837 22.583C14.4838 23.3832 14.9333 24.4684 14.9333 25.6H17.0667C17.0667 23.9026 16.3924 22.2747 15.1922 21.0745C13.9919 19.8743 12.3641 19.2 10.6667 19.2V21.3333ZM6.4 25.6C6.4 24.4684 6.84952 23.3832 7.64968 22.583C8.44983 21.7829 9.53508 21.3333 10.6667 21.3333V19.2C8.96928 19.2 7.34142 19.8743 6.14118 21.0745C4.94095 22.2747 4.26667 23.9026 4.26667 25.6H6.4ZM10.6667 8.53333C9.53508 8.53333 8.44983 8.98285 7.64968 9.78301C6.84952 10.5832 6.4 11.6684 6.4 12.8H8.53333C8.53333 12.2342 8.7581 11.6916 9.15817 11.2915C9.55825 10.8914 10.1009 10.6667 10.6667 10.6667V8.53333ZM14.9333 12.8C14.9333 11.6684 14.4838 10.5832 13.6837 9.78301C12.8835 8.98285 11.7983 8.53333 10.6667 8.53333V10.6667C11.2325 10.6667 11.7751 10.8914 12.1752 11.2915C12.5752 11.6916 12.8 12.2342 12.8 12.8H14.9333ZM10.6667 17.0667C11.7983 17.0667 12.8835 16.6171 13.6837 15.817C14.4838 15.0168 14.9333 13.9316 14.9333 12.8H12.8C12.8 13.3658 12.5752 13.9084 12.1752 14.3085C11.7751 14.7086 11.2325 14.9333 10.6667 14.9333V17.0667ZM10.6667 14.9333C10.1009 14.9333 9.55825 14.7086 9.15817 14.3085C8.7581 13.9084 8.53333 13.3658 8.53333 12.8H6.4C6.4 13.9316 6.84952 15.0168 7.64968 15.817C8.44983 16.6171 9.53508 17.0667 10.6667 17.0667V14.9333ZM3.2 6.4H28.8V4.26666H3.2V6.4ZM29.8667 7.46666V24.5333H32V7.46666H29.8667ZM28.8 25.6H3.2V27.7333H28.8V25.6ZM2.13333 24.5333V7.46666H0V24.5333H2.13333ZM3.2 25.6C2.9171 25.6 2.64579 25.4876 2.44575 25.2876C2.24571 25.0875 2.13333 24.8162 2.13333 24.5333H0C0 25.382 0.337142 26.196 0.937258 26.7961C1.53737 27.3962 2.35131 27.7333 3.2 27.7333V25.6ZM29.8667 24.5333C29.8667 24.8162 29.7543 25.0875 29.5542 25.2876C29.3542 25.4876 29.0829 25.6 28.8 25.6V27.7333C29.6487 27.7333 30.4626 27.3962 31.0627 26.7961C31.6629 26.196 32 25.382 32 24.5333H29.8667ZM28.8 6.4C29.0829 6.4 29.3542 6.51238 29.5542 6.71242C29.7543 6.91245 29.8667 7.18377 29.8667 7.46666H32C32 6.61797 31.6629 5.80404 31.0627 5.20392C30.4626 4.6038 29.6487 4.26666 28.8 4.26666V6.4ZM3.2 4.26666C2.35131 4.26666 1.53737 4.6038 0.937258 5.20392C0.337142 5.80404 0 6.61797 0 7.46666H2.13333C2.13333 7.18377 2.24571 6.91245 2.44575 6.71242C2.64579 6.51238 2.9171 6.4 3.2 6.4V4.26666ZM19.2 12.8H25.6V10.6667H19.2V12.8ZM19.2 19.2H25.6V17.0667H19.2V19.2Z"
                      fill="black"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_130_2449">
                      <rect
                        width="32"
                        height="32"
                        className="text-basedark"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="  hover:bg-cyan">Profile</span>
              </button>

              <button
                className={`flex place-items-center space-x-3 my-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                  activeItem == 5
                    ? "active bg-cyan rounded-[16px] font-bold"
                    : ""
                }`}
                onClick={() => handleItemClick(5)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 20.077V4.615q0-.69.463-1.152T4.615 3h14.77q.69 0 1.152.463T21 4.615v10.77q0 .69-.462 1.153T19.385 17H6.077zm6.517-6.404L12 12.167l2.483 1.506l-.66-2.825l2.196-1.885l-2.886-.255L12 6.058l-1.133 2.65l-2.886.255l2.196 1.885z"
                  />
                </svg>
                <span className="  hover:bg-cyan">Review</span>
              </button>
              <button
                onClick={() => handleItemClick(6)}
                className={`flex place-items-center space-x-3 my-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                  activeItem == 6
                    ? "active bg-cyan rounded-[16px] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    d="M12.5 8.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1m0-4h-4a2 2 0 1 0 0 4h4m0-4a2 2 0 1 1 0 4m-9-6v-3a3 3 0 0 1 6 0v3m2.5 4h1m-3 0h1m-3 0h1"
                  />
                </svg>
                <div className="hover:bg-cyan text-left">Change Password</div>
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("token", "");
                  router.push("/");
                  router.refresh();
                }}
                className={`hidden md:flex space-x-3 hover:bg-orange-500 mt-7 py-2 px-4 place-content-center bg-red w-full rounded-[16px] hover:font-bold ${
                  activeItem == 6
                    ? "active bg-orange-500 rounded-[16px] font-bold"
                    : ""
                }`}
              >
                Log Out
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("token", "");
                  router.push("/");
                  router.refresh();
                }}
                className={`absolute top-5 right-5 md:hidden space-x-3 hover:bg-orange-500 py-2 px-10 place-content-center bg-red rounded-[16px] hover:font-bold ${
                  activeItem == 6
                    ? "active bg-orange-500 rounded-[16px] font-bold"
                    : ""
                }`}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 md:ml-3 lg:ml-16">
        {/* {activeItem === 1 && isAdmin && <Dashboard />}
        {activeItem === 2 && isAdmin && (
          <PublishSoftware handleItemClick={handleItemClick} />
        )} */}
        {activeItem === 3 && <ProfilePage setUserInfo={setUserInfo} />}
        {activeItem === 5 && <Reviews />}
        {activeItem === 6 && <ChangePassword setActiveItem={setActiveItem} />}
      </div>
    </div>
  );
}
export default IsAuth(Profile);
