'use client';
import { useState } from "react";
import SignUpWithThirdParty from "../authentications/components/signUpWith3rdParty";
import SignIn from "../authentications/components/signIn";
function UnauthorizePage(){
    const [isPopUpSignIn,setIsPopUpSignIn] = useState(false);
    const [isPopUpSignUp,setIsPopUpSignUp] = useState(false);
    const openPopUpSignIn = () =>{
        setIsPopUpSignIn(true)
      };
      const closePopUpSignIn = () =>{
        setIsPopUpSignIn(false)
      };
      const openPopUpSignUp = () =>{
        setIsPopUpSignUp(true)
      };
      const closePopUpSignUp = () =>{
        setIsPopUpSignUp(false)
      };
    return (
        <div>
                    <div className="font-dmsan flex-row justify-center item-center p-8  bg-white rounded-[16px] space-y-[5%]">
        <div className="flex justify-center  ">

        </div>
            <div className="flex justify-center text-display-md font-extrabold">Unauthorized Access !</div>
            <div className="flex justify-center text-title-lg">Please register or login</div>
            <div className="grid grid-cols-2 ml-[10%] mr-[10%] space-x-2">
                <button className="bg-white text-darkblue shadow-md font-bold shadow-cyan-500/50  py-2 rounded-full" onClick={openPopUpSignIn}>Log In</button>
                <button className="bg-darkblue text-white py-2 rounded-full" onClick={openPopUpSignUp}>Register</button>
        </div>

      </div>
       {isPopUpSignIn && <SignIn onClose={closePopUpSignIn} ></SignIn>}
       {isPopUpSignUp && <SignUpWithThirdParty onClose={closePopUpSignUp}></SignUpWithThirdParty>}
    </div>

    );
}
export default UnauthorizePage