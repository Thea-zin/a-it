"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChangePassword({ setActiveItem = () => {} }) {
  const [showHide, setShowHide] = useState({
    current: false,
    newPass: false,
    renew: false,
  });
  const [current, setCurrent] = useState(true);
  const [newPass, setNewPass] = useState(true);
  const [changingPass, setChangingPass] = useState(false);
  const [cPassword, setCPassword] = useState("");
  const [nPassword, setNPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [allow, setAllow] = useState(false);
  const router = useRouter();
  const [ErrorMessageN,setErrorMessageN]=useState("")
  const [ErrorMessageR,setErrorMessageR]=useState("")

  useEffect(() => {
    // console.log(current, newPass, allow);
    if (current && newPass && allow) {
      onChangePassword();
    }
  }, [current, newPass, allow]);

  const onChangePassword = async () => {
    setChangingPass(true);
    setAllow(false);

    const temp = await fetch("/api/user/changepassword", {
      method: "POST",
      body: JSON.stringify({
        current: cPassword,
        newPass: nPassword,
        renew: rPassword,
        token: localStorage.getItem("token"),
      }),
    });
    const res = await temp.json();

    if (temp.status != 200) {
      if (temp.status == 402) {
        setNewPass(false);
        alert("New Password is not allowed!\nPleasee try other password!");
      } else if (temp.status == 403) {
        setCurrent(false);
        alert(
          "Wrong Current Password!\nPlease enter correct current password!"
        );
      } else if (temp.status == 405) {
        router.push("");
        router.refresh();
      } else {
        alert(
          "Something is wrong on the server side!\nPlease try again later!"
        );
      }
    } else {
      localStorage.setItem("token", res.token);
      setActiveItem(3);
    }

    setChangingPass(false);
  };

  const validatePassword = async () => {
    // console.log(cPassword, nPassword, rPassword);
    if (nPassword.length<8){
      setAllow(false)
      setCurrent(false)
      setNewPass(false)
      setErrorMessageN("It cant be null. The character must be 8 letters.")
      setErrorMessageR("")
    } else if (rPassword<8){
      setAllow(false)
      setCurrent(false)
      setNewPass(false)
      setErrorMessageR("It cant be null. The character must be 8 letters.")
      setErrorMessageN("")
    } else if(nPassword.length < 8 && rPassword.length < 8 ){
      setAllow(false)
      setCurrent(false)
      setNewPass(false)
      setErrorMessageR("It cant be null. The character must be 8 letters.")
      setErrorMessageN("It cant be null. The character must be 8 letters.")
    } else{
        if (nPassword != rPassword){
          setAllow(false)
          setCurrent(false)
          setNewPass(false)
          setErrorMessageR("Password is not match. Re-enter it again")
          setErrorMessageN("Password is not match. Re-enter it again")
        }
        else{
          setErrorMessageR("")
          setErrorMessageN("")
          setCurrent(cPassword.length >= 8);
          setNewPass(
            nPassword.length >= 8 && rPassword.length >= 8 && nPassword == rPassword
          );
          setAllow(true);
        }
    }
    // if (nPassword != rPassword){}
    // setCurrent(cPassword.length >= 8);
    // setNewPass(
    //   nPassword.length >= 8 && rPassword.length >= 8 && nPassword == rPassword
    // );
    // setAllow(true);
  };

  return (
    <div className="bg-white p-8 py-[4rem] rounded-[16px]">
      <div className="flex space-x-3 py-2 px-4  hover:rounded-[16px] hover:font-bold ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 15 15"
        >
          <path
            fill="none"
            stroke="#1dcdfe"
            d="M12.5 8.5v-1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1m0-4h-4a2 2 0 1 0 0 4h4m0-4a2 2 0 1 1 0 4m-9-6v-3a3 3 0 0 1 6 0v3m2.5 4h1m-3 0h1m-3 0h1"
          />
        </svg>
        <span className="text-body-lg font-bold text-cyan">
          Change Password
        </span>
      </div>

      <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
        <div className="p-2 font-bold">
          <label>
            Current Password <span className="text-red">*</span>
          </label>
        </div>
        <div className="flex">
          <input
            name="current"
            type={showHide.current ? "text" : "password"}
            placeholder="Current Password"
            className={`text-gray-300 rounded-full ${
              current ? "border-darkgray" : "border-red"
            } border-[1px] w-full p-2`}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
          />
          {showHide.current ? (
            <div
              onClick={() => {
                setShowHide({
                  current: false,
                  newPAss: showHide.newPass,
                  renew: showHide.renew,
                });
              }}
            >
              hide
            </div>
          ) : (
            <div
              onClick={() => {
                setShowHide({
                  current: true,
                  newPass: showHide.newPass,
                  renew: showHide.renew,
                });
              }}
            >
              show
            </div>
          )}
        </div>
      </div>
      <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
        <div className="p-2 font-bold">
          <label>
            New Password <span className="text-red">*</span><span className="text-red">{ErrorMessageN}</span>
          </label>
        </div>
        <div className="flex">
          <input
            name="new"
            type={showHide.newPass ? "text" : "password"}
            placeholder="New Password"
            className={`text-gray-300 rounded-full ${
              newPass ? "border-darkgray" : "border-red"
            } border-[1px] w-full p-2`}
            onChange={(e) => {
              setNPassword(e.target.value);
            }}
          />
          {showHide.newPass ? (
            <div
              onClick={() => {
                setShowHide({
                  current: showHide.current,
                  newPass: false,
                  renew: showHide.renew,
                });
              }}
            >
              hide
            </div>
          ) : (
            <div
              onClick={() => {
                setShowHide({
                  current: showHide.current,
                  newPass: true,
                  renew: showHide.renew,
                });
              }}
            >
              show
            </div>
          )}
        </div>
      </div>
      <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
        <div className="p-2 font-bold">
          <label>
            Confirm New Password <span className="text-red">*</span><span className="text-red">{ErrorMessageR}</span>
          </label>
        </div>
        <div className="flex">
          <input
            name="renew"
            type={showHide.renew ? "text" : "password"}
            placeholder="Confirm New Password"
            className={`text-gray-300 rounded-full ${
              newPass ? "border-darkgray" : "border-red"
            } border-[1px] w-full p-2`}
            onChange={(e) => {
              setRPassword(e.target.value);
            }}
          />
          {showHide.renew ? (
            <div
              onClick={() => {
                setShowHide({
                  current: showHide.current,
                  newPass: showHide.newPass,
                  renew: false,
                });
              }}
            >
              hide
            </div>
          ) : (
            <div
              onClick={() => {
                setShowHide({
                  current: showHide.current,
                  newPass: showHide.newPass,
                  renew: true,
                });
              }}
            >
              show
            </div>
          )}
        </div>
      </div>
      {changingPass ? (
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
          onClick={validatePassword}
        >
          Save
        </button>
      )}
    </div>
  );
}
