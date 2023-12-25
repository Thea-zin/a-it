
    'use client';
    import { useState } from "react";
    import {Image} from "next/image"
    import { useAuth } from "@/app/context/AuthContext";
    import { useRouter } from "next/navigation";
    import SignUp from "./signUpEmailPassword";
    function SignIn({onClose}){
        const {login} = useAuth();
        const [isOpen,setIsOpen]=useState(false);
        const router=useRouter();
        const [isPopUpSignUp,setIsPopUpSignUp] = useState(false);
    
        const openPopUpSignUp = () =>{
          setIsPopUpSignUp(true)
        };
        const closePopUpSignUp = () =>{
          setIsPopUpSignUp(false)
        };
        const showPassword = ()=>{
            setIsOpen(!isOpen)
        }
        const handleLogin = async (e) =>{
            e.preventDefault();
            const user={
                username: "helloworld"
            }
            login(user);
            onClose();
    
    
            router.push('/pages/home');
            
        }
        return(
    
            <div className="relative lg:text-body-lg md:text-body-sm sm:text-body-sm xsm:text-body-sm" onSubmit={handleLogin}>
    
                <div className="p-4 absoute fixed inset-0 flex item-center justify-center z-50 bg-white  " >
                <div className="relative">
                        <div className="absolute lg:ml-[93%] lg:mt-[2%] md:ml-[93%] md:mt-[2%] sm:ml-[93%] sm:mt-[3%] xsm:ml-[90%] xsm:mt-[3%]" onClick={onClose}><img src={"../cross-bold.png"} className="w-5 h-5" alt="close" /></div>
                     <div className="flex justify-center items-center p-2">
                <div className="space-y-4 lg:w-[700px] md:w-[600px] sm:w-[500px] xsm:w-[300px]  border bg-base rounded-[16px]   md:p-10 sm:p-7 xsm:p-8 ">
                    <div className="space-y-4">
                        <div className="flex justify-center items-center">
                            <img src={"../../Logo.png"}></img>
                            </div>
                    <div className="text-center text-darkblue font-bold text-display-md">Sign In</div>
            
                    <div className="flex justify-center  ">
                        <input type='text' className="border py-2 px-4 border-basedark rounded-full w-[70%]" placeholder="Email Address"></input>
                    </div>   
                    <div className="flex justify-center relative ">
                        <input type={isOpen?"text":"password"} className="border py-2 px-4 lg:pr-[12%] md:pr-[12%] sm:pr-[16%] xsm:pr-[20%] border-basedark rounded-full  w-[70%]" placeholder="Password"/>
    
                        <button className="lg:ml-[60%] md:ml-[60%] sm:ml-[60%] xsm:ml-[50%] bottom-2 absolute" onClick={showPassword} >{isOpen?<p className="text-basedark">show</p >:<p className="text-basedark">hide</p >}</button>
                    </div>
                    <div className="flex justify-center" ><button className="bg-darkblue text-white py-1 px-2 rounded-full w-2/4 lg:text-[24px] md:text-[20px] sm:text-[15px] xsm:text-[13px] "  onClick={handleLogin}>Sign In</button></div>
                    <div className="text-center "> Doesnt have account ? <span className="text-cyan" onClick={openPopUpSignUp}>Register</span></div>
                    </div>
                </div>
            </div>
      
            </div>
    
                    
                </div>
                {isPopUpSignUp && <SignUp onClose={closePopUpSignUp}></SignUp>}
            </div>
        //    <div className="relative">
        //             <div className="absolute lg:ml-[75%] lg:mt-[2%] md:ml-[75%] md:mt-[2%] sm:ml-[73%] sm:mt-[3%] xsm:ml-[70%] xsm:mt-[3%]" >close</div>
        //          <div className="flex justify-center items-center p-4">
        //     <div className=" w-[65%] border bg-base rounded-[16px]  lg:p-20 md:p-10 sm:p-7 xsm:p-8 ">
        //         <div className="space-y-4">
        //             <div className="flex justify-center items-center">
        //                 <img src={"logo.png"}></img>
        //                 </div>
        //         <div className="text-center text-darkblue font-bold text-display-md">Sign In</div>
        //         <div className="flex justify-center">
        //             <input type='text' className="border py-2 px-4 border-basedark rounded-full w-[70%]" placeholder="Email Address"></input>
        //         </div>   
        //         <div className="flex justify-center relative">
        //             <input type={isOpen?"text":"password"} className="border py-2 px-4 lg:pr-[12%] md:pr-[12%] sm:pr-[16%] xsm:pr-[20%] border-basedark rounded-full  w-[70%]" placeholder="Password"/>

        //             <button className="lg:ml-[60%] md:ml-[60%] sm:ml-[60%] xsm:ml-[50%] bottom-2 absolute" onClick={showPassword} >{isOpen?<p className="text-basedark">show</p >:<p className="text-basedark">hide</p >}</button>
        //         </div>
        //         <div className="flex justify-center" ><button className="bg-darkblue text-white p-2 rounded-full w-2/4 lg:text-[24px] md:text-[20px] sm:text-[15px] xsm:text-[13px] "  >Sign In</button></div>
        //         <div className="text-center"> Doesnt have account ? <span className="text-cyan">Register</span></div>
        //         </div>
        //     </div>
        // </div>
  
        // </div>


    )
}
export default SignIn;