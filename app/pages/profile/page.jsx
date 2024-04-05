"use client";

import { useEffect, useState } from "react";
import Favorite from "./components/Favorite";
import ProfilePage from "./components/Profile";
import Setting from "./components/Setting";
import Dashboard from "./components/Dashboard";
import PublishSoftware from "./components/PublishSoftware";
import IsAuth from "@/app/components/isauth";

function Profile() {
  const [activeItem, setActiveItem] = useState(null);
  const [userinfo, setUserInfo] = useState({});
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    handleItemClick(3);
    try {
      let temp = {};
      temp["displayName"] = localStorage.getItem("displayName");
      temp["email"] = localStorage.getItem("email");
      temp["joined"] = localStorage.getItem("joined");
      temp["photoURL"] = localStorage.getItem("photoURL").split("!បំបែក!")[1];

      // console.log(temp);
      setUserInfo(temp);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    determineAdmin();
  }, []);

  const determineAdmin = async () => {
    const token = localStorage.getItem("token");
    const temp = await fetch("/api/user/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    });
    const res = await temp.json();
    if (temp.status == 200) {
      setIsAdmin(true);
    } else if (temp.status == 405) {
      localStorage.setItem("token", "");
    }
  };

  return (
    <div className="font-dmsan bg-base p-6 grid grid-cols-3 m-5 min-w-[946px]">
      <div className="col-span-1">
        <div className="bg-white flex flex-col rounded-[16px] p-4 w-[300px]">
          <div className=" ml-[35%] ">
            <div className="absolute mt-[3%] ">
              {userinfo["photoURL"] == "0" ? (
                <div>
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
              <div className="relative mt-[-20%] ml-[50%] ">
                <img src={"../profile/profile-edit.png"}></img>
              </div>
            </div>
          </div>
          <div className="mt-[52%] text-display-sm">
            <div className="text-center">{userinfo.displayName}</div>
            <div className=" text-basedark text-label-lg text-center">
              Joined on {userinfo.joined}
            </div>
            <div className="text-body-md space-y-8  mt-[10%]">
              {isAdmin && (
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
              )}
              <button
                onClick={() => handleItemClick(3)}
                className={`flex space-x-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                  activeItem == 3
                    ? "active bg-cyan rounded-[16px] font-bold"
                    : ""
                }`}
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
              {/* <button
                onClick={() => handleItemClick(4)}
                className={`flex space-x-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                  activeItem == 4
                    ? "active bg-cyan rounded-[16px] font-bold"
                    : ""
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.8438 8.8625C28.4249 7.89261 27.8209 7.01371 27.0656 6.275C26.3098 5.53408 25.4186 4.94528 24.4406 4.54062C23.4265 4.11935 22.3388 3.90372 21.2406 3.90625C19.7 3.90625 18.1969 4.32812 16.8906 5.125C16.5781 5.31562 16.2812 5.525 16 5.75312C15.7188 5.525 15.4219 5.31562 15.1094 5.125C13.8031 4.32812 12.3 3.90625 10.7594 3.90625C9.65 3.90625 8.575 4.11875 7.55937 4.54062C6.57812 4.94687 5.69375 5.53125 4.93437 6.275C4.17811 7.01288 3.57399 7.89199 3.15625 8.8625C2.72188 9.87187 2.5 10.9437 2.5 12.0469C2.5 13.0875 2.7125 14.1719 3.13438 15.275C3.4875 16.1969 3.99375 17.1531 4.64062 18.1187C5.66563 19.6469 7.075 21.2406 8.825 22.8563C11.725 25.5344 14.5969 27.3844 14.7188 27.4594L15.4594 27.9344C15.7875 28.1438 16.2094 28.1438 16.5375 27.9344L17.2781 27.4594C17.4 27.3813 20.2687 25.5344 23.1719 22.8563C24.9219 21.2406 26.3313 19.6469 27.3563 18.1187C28.0031 17.1531 28.5125 16.1969 28.8625 15.275C29.2844 14.1719 29.4969 13.0875 29.4969 12.0469C29.5 10.9437 29.2781 9.87187 28.8438 8.8625ZM16 25.4625C16 25.4625 4.875 18.3344 4.875 12.0469C4.875 8.8625 7.50937 6.28125 10.7594 6.28125C13.0437 6.28125 15.025 7.55625 16 9.41875C16.975 7.55625 18.9563 6.28125 21.2406 6.28125C24.4906 6.28125 27.125 8.8625 27.125 12.0469C27.125 18.3344 16 25.4625 16 25.4625Z"
                    fill="black"
                  />
                </svg>
                <span className="  hover:bg-cyan">Favorite</span>
              </button> */}
              <button
                className={`flex space-x-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                  activeItem == 5
                    ? "active bg-cyan rounded-[16px] font-bold"
                    : ""
                }`}
                onClick={() => handleItemClick(5)}
              >
                <img src={"../profile/review.png"}></img>
                <span className="  hover:bg-cyan">Review</span>
              </button>
              <button
                onClick={() => handleItemClick(6)}
                className={`flex space-x-3 hover:bg-cyan py-2 px-4  hover:rounded-[16px] hover:font-bold ${
                  activeItem == 6
                    ? "active bg-cyan rounded-[16px] font-bold"
                    : ""
                }`}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7722 2C18.9839 2.00001 19.1902 2.06721 19.3613 2.19193C19.5323 2.31664 19.6594 2.49244 19.7242 2.694L20.8242 6.112C21.2862 6.338 21.7282 6.592 22.1502 6.878L25.6622 6.122C25.8693 6.07779 26.085 6.10045 26.2784 6.18671C26.4718 6.27297 26.6328 6.41838 26.7382 6.602L29.5102 11.4C29.6161 11.5835 29.6609 11.7959 29.6383 12.0065C29.6156 12.2172 29.5267 12.4152 29.3842 12.572L26.9742 15.232C27.0093 15.7421 27.0093 16.2539 26.9742 16.764L29.3842 19.428C29.5267 19.5848 29.6156 19.7828 29.6383 19.9935C29.6609 20.2041 29.6161 20.4165 29.5102 20.6L26.7382 25.4C26.6325 25.5833 26.4714 25.7283 26.278 25.8141C26.0847 25.9 25.8691 25.9224 25.6622 25.878L22.1502 25.122C21.7302 25.406 21.2862 25.662 20.8262 25.888L19.7242 29.306C19.6594 29.5076 19.5323 29.6834 19.3613 29.8081C19.1902 29.9328 18.9839 30 18.7722 30H13.2282C13.0165 30 12.8103 29.9328 12.6392 29.8081C12.4681 29.6834 12.341 29.5076 12.2762 29.306L11.1782 25.89C10.7175 25.6647 10.273 25.4074 9.84822 25.12L6.33822 25.878C6.13115 25.9222 5.91539 25.8996 5.72202 25.8133C5.52865 25.727 5.36765 25.5816 5.26222 25.398L2.49022 20.6C2.38437 20.4165 2.33953 20.2041 2.36218 19.9935C2.38482 19.7828 2.47378 19.5848 2.61622 19.428L5.02622 16.764C4.99131 16.2553 4.99131 15.7447 5.02622 15.236L2.61622 12.572C2.47378 12.4152 2.38482 12.2172 2.36218 12.0065C2.33953 11.7959 2.38437 11.5835 2.49022 11.4L5.26222 6.6C5.36794 6.41675 5.52907 6.27175 5.72241 6.18586C5.91576 6.09997 6.13136 6.07761 6.33822 6.122L9.84822 6.88C10.2722 6.594 10.7162 6.336 11.1782 6.11L12.2782 2.694C12.3428 2.49309 12.4693 2.31776 12.6396 2.1931C12.8098 2.06844 13.0152 2.00085 13.2262 2H18.7702H18.7722ZM18.0402 4H13.9602L12.8242 7.534L12.0582 7.908C11.6817 8.09227 11.3181 8.3021 10.9702 8.536L10.2622 9.016L6.63022 8.232L4.59022 11.768L7.08022 14.524L7.02022 15.372C6.99148 15.7902 6.99148 16.2098 7.02022 16.628L7.08022 17.476L4.58622 20.232L6.62822 23.768L10.2602 22.986L10.9682 23.464C11.3161 23.6979 11.6797 23.9077 12.0562 24.092L12.8222 24.466L13.9602 28H18.0442L19.1842 24.464L19.9482 24.092C20.3244 23.9082 20.6873 23.6983 21.0342 23.464L21.7402 22.986L25.3742 23.768L27.4142 20.232L24.9222 17.476L24.9822 16.628C25.011 16.2092 25.011 15.7888 24.9822 15.37L24.9222 14.522L27.4162 11.768L25.3742 8.232L21.7402 9.012L21.0342 8.536C20.6873 8.30163 20.3244 8.09178 19.9482 7.908L19.1842 7.536L18.0422 4H18.0402ZM16.0002 10C17.5915 10 19.1176 10.6321 20.2429 11.7574C21.3681 12.8826 22.0002 14.4087 22.0002 16C22.0002 17.5913 21.3681 19.1174 20.2429 20.2426C19.1176 21.3679 17.5915 22 16.0002 22C14.4089 22 12.8828 21.3679 11.7576 20.2426C10.6324 19.1174 10.0002 17.5913 10.0002 16C10.0002 14.4087 10.6324 12.8826 11.7576 11.7574C12.8828 10.6321 14.4089 10 16.0002 10ZM16.0002 12C14.9394 12 13.9219 12.4214 13.1718 13.1716C12.4216 13.9217 12.0002 14.9391 12.0002 16C12.0002 17.0609 12.4216 18.0783 13.1718 18.8284C13.9219 19.5786 14.9394 20 16.0002 20C17.0611 20 18.0785 19.5786 18.8286 18.8284C19.5788 18.0783 20.0002 17.0609 20.0002 16C20.0002 14.9391 19.5788 13.9217 18.8286 13.1716C18.0785 12.4214 17.0611 12 16.0002 12Z"
                    fill="black"
                  />
                </svg>
                <span className="  hover:bg-cyan">Setting</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        {activeItem === 1 && isAdmin && <Dashboard />}
        {activeItem === 2 && isAdmin && (
          <PublishSoftware handleItemClick={handleItemClick} />
        )}
        {activeItem === 3 && <ProfilePage />}
        {activeItem === 4 && <Favorite />}
        {activeItem === 5 && <Favorite />}
        {activeItem === 6 && <Setting />}
      </div>
    </div>
  );
}
export default IsAuth(Profile);
