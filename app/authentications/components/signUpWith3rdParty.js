import Link from "next/link";
function SignUpWithThirdParty(){
    return (
        <div className="flex justify-center items-center p-4">
               <div className="absolute lg:ml-[55%] lg:mt-[-65%] md:ml-[75%] md:mt-[2%] sm:ml-[73%] sm:mt-[3%] xsm:ml-[70%] xsm:mt-[3%]" >close</div>
        <div className=" w-[65%] border bg-base rounded-[16px]  lg:p-20 md:p-10 sm:p-7 xsm:p-8 ">
            <div className="space-y-4">
                <div className="flex justify-center items-center">
                    <img src={"logo.png"}></img>
                </div>
                 <div className="flex justify-center">
                    <div className="  rounded-full w-[70%] border-1 bg-darkblue hover:bg-darkblue-[600px]  p-2"> 
                         <div className="flex justify-center">
                                    {/* <div className="">
                                       <img src="../vendors/ticks.png" ></img>
                      
                                    </div> */}
                                   <div className="font-bold text-white lg:text-display-sm md:text-body-sm sm:text-body-sm xsm:text-body-sm">Create an account</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
               <div className="relative mt-[10%] w-[70%] ">
                   <div className="border-t-2  border-baselight my-2">
                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base lg:px-8 md:px-7 sm:px-6 rounded text-center text-basedark lg:text-title-lg xsm:text-body-sm xsm:px-2">
                         or sign in
                       </div>
                   </div>
               </div>
            </div>
            
            <div className="flex justify-center">
                <button className="flex items-ccenter space-x-6 py-2 px-4 bg-base border rounded-full w-[70%] mt-[5%] hover:bg-cyan hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="lg:w-[36px] lg:h-[36px] md:w-[26px] md:h-[26px] sm:w-[18px] sm:h-[18px] xsm:w-[16px] xsm:h-[16px]  " viewBox="0 0 48 48">
<path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg><span className=" lg:text-title-lg md:text-title-sm sm:text-label-sm xsm:text-[8px] text-center mt-[1%]">Continue with google</span>


                </button>
                
            </div>
            <div className="flex justify-center">
                <button className="flex items-ccenter space-x-6 py-2 px-4 bg-base border rounded-full w-[70%] mt-[5%] hover:bg-cyan hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="lg:w-[36px] lg:h-[36px] md:w-[26px] md:h-[26px] sm:w-[18px] sm:h-[18px] xsm:w-[16px] xsm:h-[16px] "  viewBox="0 0 48 48">
                       <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                   </svg>
                   <span className=" lg:text-title-lg md:text-title-sm sm:text-label-sm xsm:text-[8px] text-center mt-[1%]">Continue with linkedin</span>
                </button>
                
            </div>
            <div className="flex justify-center">
                <button className="flex items-ccenter space-x-6 py-2 px-4 bg-base border rounded-full w-[70%] mt-[5%] hover:bg-cyan hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="lg:w-[36px] lg:h-[36px] md:w-[26px] md:h-[26px] sm:w-[18px] sm:h-[18px] xsm:w-[16px] xsm:h-[16px]  " viewBox="0 0 48 48">
                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                    </svg>
                    <span className=" lg:text-title-lg md:text-title-sm sm:text-label-sm xsm:text-[8px] text-center mt-[1%]">Continue with facebook</span>
                </button>
                
            </div>
            <div className="flex justify-center mt-[5%] lg:text-body-md md:text-body-md sm:text-body-sm xsm:text-body-xsm">By proceeding, you agree to our <span className="text-link"><Link href="/pages/vendors">Terms of Use </Link></span>  <span> and </span> <span className="text-link"><Link href="/pages/vendors">  Privacy policy</Link></span> </div>
           

        </div>
        </div>
    )
}
export default SignUpWithThirdParty;