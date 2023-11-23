'use client';
import { useState } from "react";
import Link from "next/link";
import React from "react";
import signUp from "@/app/firebase/signup"
import { useRouter } from 'next/navigation'

function SignUp({onClose}){
    const [isOpen,setIsOpen]=useState(false);
    const showPassword = ()=>{
        setIsOpen(!isOpen)
    }

      const [email, setEmail] = React.useState('')
      const [password, setPassword] = React.useState('')
      const [firstName, setfirstName] = React.useState('')
      const [lastName, setlastName] = React.useState('')
      const router = useRouter()
      const [isPopUpSignUp,setIsPopUpSignUp] = useState(true);

      const handleForm = async (event) => {
        
          event.preventDefault()

          const { result, error } = await signUp(email, password,lastName,firstName);
         
  
          if (error) {
              return console.log(error)
          }
  
          // else successful
          
          console.log(result);
          onClose();
          setIsPopUpSignUp(false);
          
          return router.push("/pages/home")
      }
      
    return(

        <div className={`relative ${isPopUpSignUp? "block" : "hidden" }`} >

        <div className="p-4 absoute fixed inset-0 flex item-center justify-center z-50 bg-transparent/50  " >
        <div className="relative">
        <div className="absolute lg:ml-[93%] lg:mt-[4%] md:ml-[93%] md:mt-[4%] sm:ml-[93%] sm:mt-[4%] xsm:ml-[90%] xsm:mt-[4%]" onClick={onClose}><img src={"../cross-bold.png"} className="w-5 h-5"></img></div>
        <div className="flex justify-center items-center p-2">
           
            <div className="lg:w-[700px] md:w-[600px] sm:w-[500px] xsm:w-[300px] border bg-white rounded-[16px]  lg:p-22 md:p-10 sm:p-7 xsm:p-8 ">
                
                <div className="space-y-4">
                    <div className="flex justify-center items-center">
                    <img 
                      src="/photo/logoAIT.png"/>
                        </div>
                    <form onSubmit={handleForm} className="">

                        <div className="text-center text-darkblue font-bold text-display-md">Register</div>
                  
                        <div className="flex justify-center mt-2">
                            <input type='text' onChange={(e) => setfirstName(e.target.value)} className="border py-2 px-4 border-basedark rounded-full w-[70%]" placeholder="First Name"></input>
                        </div>   
                        <div className="flex justify-center mt-2">
                            <input type='text' onChange={(e) => setlastName(e.target.value)} className="border py-2 px-4 border-basedark rounded-full w-[70%]" placeholder="Last Name"></input>
                        </div>   
                        <div className="flex justify-center mt-2">
                            <input onChange={(e) => setEmail(e.target.value)}  type='text' className="border py-2 px-4 border-basedark rounded-full w-[70%]" placeholder="Email Address"></input>
                        </div>   
                        <div className="flex justify-center relative mt-2">
                            <input onChange={(e) => setPassword(e.target.value)} type={isOpen?"text":"password"} className="border py-2 px-4 lg:pr-[12%] md:pr-[12%] sm:pr-[16%] xsm:pr-[20%] border-basedark rounded-full  w-[70%]" placeholder="Password"/>

                            <button className="lg:ml-[60%] md:ml-[60%] sm:ml-[60%] xsm:ml-[50%] bottom-2 absolute" onClick={showPassword} >{isOpen?<p className="text-basedark">show</p >:<p className="text-basedark">hide</p >}</button>
                        </div>
                        <div className="flex justify-center mt-2">
                            <div>
                            By proceeding, you agree to our <span className="text-link"><Link href="/pages/vendors">Terms of Use </Link></span>  <span> and </span> <span className="text-link"><Link href="/pages/vendors">  Privacy policy</Link></span> 
                            </div>

                        </div >

                            {/* <div className="flex justify-center mt-[5%] lg:text-body-md md:text-body-md sm:text-body-sm xsm:text-body-xsm">By proceeding, you agree to our <span className="text-link"><Link href="/pages/vendors">Terms of Use </Link></span>  <span> and </span> <span className="text-link"><Link href="/pages/vendors">  Privacy policy</Link> </div> */}
                            <div className="flex justify-center mt-2" >
                                <button type="submit" className="bg-darkblue text-white px-3 py-2 rounded-full w-2/4 lg:text-[24px] md:text-[20px] sm:text-[15px] xsm:text-[13px]" > Sign Up </button>
                            </div> 

                      </form>

                      </div>

                    
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default SignUp;