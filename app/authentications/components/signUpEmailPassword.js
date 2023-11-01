'use client';
import { useState } from "react";
import Link from "next/link";

function SignUp({onClose}){
    const [isOpen,setIsOpen]=useState(false);
    const showPassword = ()=>{
        setIsOpen(!isOpen)
    }
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const logIn = () =>{
        setIsLoggedIn(true)
    }
    return(
        <div className="relative">

        <div className="xsm:p-2 sm:p-4 md:p-4 lg:p-4 absoute fixed inset-0 flex item-center justify-center z-50 bg-white  " >
        <div className="relative">
        <div className="absolute lg:ml-[93%] lg:mt-[4%] md:ml-[93%] md:mt-[4%] sm:ml-[93%] sm:mt-[4%] xsm:ml-[90%] xsm:mt-[4%]" onClick={onClose}><img src={"../cross-bold.png"} className="w-5 h-5"></img></div>
        <div className="flex justify-center items-center p-2">
           
            <div className="lg:w-[700px] md:w-[600px] sm:w-[500px] xsm:w-[300px] border bg-base rounded-[16px]  lg:p-22 md:p-10 sm:p-7 xsm:p-8 ">
                
                <div className="space-y-4">
                    <div className="flex justify-center items-center">
                        <img src={"../../Logo.png"}></img>
                        </div>

                <div className="text-center text-darkblue font-bold lg:text-display-sm md:text-body-md sm:text-body-md xsm:text-body-lg">Register</div>
                <div className="flex justify-center lg:text-body-lg md:text-body-sm sm:text-body-sm xsm:text-body-sm">
                    <input type='text' className="border py-2 px-4 border-basedark rounded-full w-[70%]" placeholder="First Name"></input>
                </div>   
                <div className="flex justify-center lg:text-body-lg md:text-body-sm sm:text-body-sm xsm:text-body-sm">
                    <input type='text' className="border py-2 px-4 border-basedark rounded-full w-[70%]" placeholder="Last Name"></input>
                </div>   
                <div className="flex justify-center lg:text-body-lg md:text-body-sm sm:text-body-sm xsm:text-body-sm">
                    <input type='text' className="border py-2 px-4 border-basedark rounded-full w-[70%]" placeholder="Email Address"></input>
                </div>   
                <div className="flex justify-center relative lg:text-body-lg md:text-body-sm sm:text-body-sm xsm:text-body-sm">
                    <input type={isOpen?"text":"password"} className="border py-2 px-4 lg:pr-[12%] md:pr-[12%] sm:pr-[16%] xsm:pr-[20%] border-basedark rounded-full  w-[70%]" placeholder="Password"/>

                    <button className="lg:ml-[60%] md:ml-[60%] sm:ml-[60%] xsm:ml-[50%] bottom-2 absolute" onClick={showPassword} >{isOpen?<p className="text-basedark">hide</p >:<p className="text-basedark">show</p >}</button>
                </div>
                <div className="flex justify-center lg:text-body-sm md:text-body-sm sm:text-body-sm xsm:text-body-sm">
                    <div>
                    By proceeding, you agree to our <span className="text-link"><Link href="/pages/vendors">Terms of Use </Link></span>  <span> and </span> <span className="text-link"><Link href="/pages/vendors">  Privacy policy</Link></span> 
                    </div>

                </div >

                    {/* <div className="flex justify-center mt-[5%] lg:text-body-md md:text-body-md sm:text-body-sm xsm:text-body-xsm">By proceeding, you agree to our <span className="text-link"><Link href="/pages/vendors">Terms of Use </Link></span>  <span> and </span> <span className="text-link"><Link href="/pages/vendors">  Privacy policy</Link> </div> */}
                    <div className="flex justify-center " >
                 
           
                        <button className="bg-darkblue text-white px-3 py-2 rounded-full w-2/4 lg:text-body-lg md:text-body-sm sm:text-body-sm xsm:text-body-sm" onClick={logIn} >Sign In</button></div>              
                </div>
            </div>
        </div>
        </div>
        </div>
        
        </div>
    )
}
export default SignUp;