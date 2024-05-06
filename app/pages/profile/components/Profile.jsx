"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function ProfilePage({ setUserInfo = () => {} }) {
  const [profile, setProfile] = useState({
    displayName: "",
    email: "",
    joined: "",
    photoURL: "",
    occupation: "",
  });
  const [fullname, setFullName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [fn, setFN] = useState(true);
  const [oc, setOC] = useState(true);
  const [allow, setAllow] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setProfile({
      displayName: localStorage.getItem("displayName"),
      email: localStorage.getItem("email"),
      joined: localStorage.getItem("joined"),
      photoURL: localStorage.getItem("photoURL").split("!បំបែក!")[1],
      occupation: localStorage.getItem("photoURL").split("!បំបែក!")[0],
    });
    setFullName(localStorage.getItem("displayName"));
    setOccupation(localStorage.getItem("photoURL").split("!បំបែក!")[0]);
  }, []);

  useEffect(() => {
    if (fn && oc && allow) {
      onSave();
    }
  }, [fn, oc, allow]);

  useEffect(() => {
    console.log(fullname, occupation);
  }, [fullname, occupation]);

  const validate = () => {
    const tfullname = document.getElementById("fullname").value;
    const toccupation = document.getElementById("occupation").value;
    setFullName(tfullname.trim());
    setOccupation(toccupation.trim());
    setFN(tfullname.trim().length > 0);
    setOC(toccupation.trim().length > 0);
    setAllow(true);
  };

  const onSave = async () => {
    setAllow(false);
    setLoading(true);

    const temp = await fetch("/api/user/updateprofile", {
      method: "POST",
      body: JSON.stringify({
        fullname: fullname,
        occupation: occupation,
        token: localStorage.getItem("token"),
      }),
    });
    const res = await temp.json();

    if (temp.status != 200) {
      if (temp.status == 402) {
        Swal.fire({
          title: "Failed",
          text: "Profile Updation Failed!",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Failed",
          text: "Something is wrong on the server side!",
          icon: "error",
        });
      }
    } else {
      localStorage.setItem("displayName", res.displayName);
      localStorage.setItem("photoURL", res.photoURL);
      setUserInfo({
        displayName: localStorage.getItem("displayName"),
        email: localStorage.getItem("email"),
        joined: localStorage.getItem("joined"),
        photoURL: localStorage.getItem("photoURL").split("!បំបែក!")[1],
        occupation: localStorage.getItem("photoURL").split("!បំបែក!")[0],
      });

      Swal.fire({
        title: "Successful",
        text: "Your profile has been updated!",
        icon: "success",
      });
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-8 py-[4rem] rounded-[16px]">
      <div className="flex space-x-3 py-2 px-4  hover:rounded-[16px] hover:font-bold ">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="cyan"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[-1%]"
        >
          <g clipPath="url(#clip0_130_2449)">
            <path
              d="M4.26667 26.6667V27.7333H6.4V26.6667H4.26667ZM14.9333 26.6667V27.7333H17.0667V26.6667H14.9333ZM6.4 26.6667V25.6H4.26667V26.6667H6.4ZM14.9333 25.6V26.6667H17.0667V25.6H14.9333ZM10.6667 21.3333C11.7983 21.3333 12.8835 21.7829 13.6837 22.583C14.4838 23.3832 14.9333 24.4684 14.9333 25.6H17.0667C17.0667 23.9026 16.3924 22.2747 15.1922 21.0745C13.9919 19.8743 12.3641 19.2 10.6667 19.2V21.3333ZM6.4 25.6C6.4 24.4684 6.84952 23.3832 7.64968 22.583C8.44983 21.7829 9.53508 21.3333 10.6667 21.3333V19.2C8.96928 19.2 7.34142 19.8743 6.14118 21.0745C4.94095 22.2747 4.26667 23.9026 4.26667 25.6H6.4ZM10.6667 8.53333C9.53508 8.53333 8.44983 8.98285 7.64968 9.78301C6.84952 10.5832 6.4 11.6684 6.4 12.8H8.53333C8.53333 12.2342 8.7581 11.6916 9.15817 11.2915C9.55825 10.8914 10.1009 10.6667 10.6667 10.6667V8.53333ZM14.9333 12.8C14.9333 11.6684 14.4838 10.5832 13.6837 9.78301C12.8835 8.98285 11.7983 8.53333 10.6667 8.53333V10.6667C11.2325 10.6667 11.7751 10.8914 12.1752 11.2915C12.5752 11.6916 12.8 12.2342 12.8 12.8H14.9333ZM10.6667 17.0667C11.7983 17.0667 12.8835 16.6171 13.6837 15.817C14.4838 15.0168 14.9333 13.9316 14.9333 12.8H12.8C12.8 13.3658 12.5752 13.9084 12.1752 14.3085C11.7751 14.7086 11.2325 14.9333 10.6667 14.9333V17.0667ZM10.6667 14.9333C10.1009 14.9333 9.55825 14.7086 9.15817 14.3085C8.7581 13.9084 8.53333 13.3658 8.53333 12.8H6.4C6.4 13.9316 6.84952 15.0168 7.64968 15.817C8.44983 16.6171 9.53508 17.0667 10.6667 17.0667V14.9333ZM3.2 6.4H28.8V4.26666H3.2V6.4ZM29.8667 7.46666V24.5333H32V7.46666H29.8667ZM28.8 25.6H3.2V27.7333H28.8V25.6ZM2.13333 24.5333V7.46666H0V24.5333H2.13333ZM3.2 25.6C2.9171 25.6 2.64579 25.4876 2.44575 25.2876C2.24571 25.0875 2.13333 24.8162 2.13333 24.5333H0C0 25.382 0.337142 26.196 0.937258 26.7961C1.53737 27.3962 2.35131 27.7333 3.2 27.7333V25.6ZM29.8667 24.5333C29.8667 24.8162 29.7543 25.0875 29.5542 25.2876C29.3542 25.4876 29.0829 25.6 28.8 25.6V27.7333C29.6487 27.7333 30.4626 27.3962 31.0627 26.7961C31.6629 26.196 32 25.382 32 24.5333H29.8667ZM28.8 6.4C29.0829 6.4 29.3542 6.51238 29.5542 6.71242C29.7543 6.91245 29.8667 7.18377 29.8667 7.46666H32C32 6.61797 31.6629 5.80404 31.0627 5.20392C30.4626 4.6038 29.6487 4.26666 28.8 4.26666V6.4ZM3.2 4.26666C2.35131 4.26666 1.53737 4.6038 0.937258 5.20392C0.337142 5.80404 0 6.61797 0 7.46666H2.13333C2.13333 7.18377 2.24571 6.91245 2.44575 6.71242C2.64579 6.51238 2.9171 6.4 3.2 6.4V4.26666ZM19.2 12.8H25.6V10.6667H19.2V12.8ZM19.2 19.2H25.6V17.0667H19.2V19.2Z"
              fill="#1dcdfe"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_130_2449">
              <rect width="32" height="32" className="text-basedark"></rect>
            </clipPath>
          </defs>
        </svg>
        <span className="text-body-lg font-bold text-cyan">Profile</span>
      </div>
      <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
        <div className="p-2 font-bold">
          <label>
            Full Name <span className="text-red">*</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="Full Name"
          id="fullname"
          name="fullname"
          className={`text-gray-300 rounded-full ${
            fn ? "border-darkgray" : "border-red"
          }  border-[1px] w-full p-2`}
          defaultValue={profile.displayName}
        />
        <div className="flex place-content-center">
          {!fn && (
            <label htmlFor="fullname" className="text-red text-sm">
              *Fullname can not be empty!
            </label>
          )}
        </div>
      </div>
      <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
        <div className="p-2 font-bold">
          <label>
            Ocupation <span className="text-red">*</span>
          </label>
        </div>
        <input
          type="text"
          id="occupation"
          name="occupation"
          placeholder="Ocupation"
          className={`text-gray-300 rounded-full ${
            oc ? "border-darkgray" : "border-red"
          }  border-[1px] w-full p-2`}
          defaultValue={profile.occupation}
        />
        <div className="flex place-content-center">
          {!oc && (
            <label htmlFor="occupation" className="text-red text-sm">
              *Occupation can not be empty!
            </label>
          )}
        </div>
      </div>
      <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
        <div className="p-2 font-bold">
          <label>
            Email <span className="text-red">*</span>
          </label>
        </div>
        <input
          type="text"
          placeholder="Email"
          className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2"
          defaultValue={profile.email}
          readOnly
        ></input>
      </div>
      {loading ? (
        <div className="flex place-content-center mt-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.3em"
            height="2.3em"
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
          className="bg-darkblue text-white p-2 rounded-full w-full  lg:text-[16px] md-text-[12px] mt-[2%]"
          onClick={validate}
        >
          Save
        </button>
      )}
    </div>
  );
}
export default ProfilePage;
