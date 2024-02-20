'use client';
import React from 'react'
import Link from 'next/link'
import firebase_app from "@/app/firebase";
import { useState , useEffect } from 'react'
import SignIn from '../authentications/components/signIn';
import SignUp from '../authentications/components/signUpEmailPassword';
import SignUpWithThirdParty from '../authentications/components/signUpWith3rdParty';

import {
  getAuth,
  signOut
} from 'firebase/auth'
const Navbar = () => {
 
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

  const [isUser, setIsUser] = useState(false);
  const auth=getAuth(firebase_app)

    useEffect(() => {
    //  signOut(auth);
      const user = auth.currentUser;
      setIsUser(user !== null && user.accessToken !== null);
      console.log(user)
  });
 


  return (
     <div >
      <header className='p-4  '>
        <div className='menu flex justify-between '>
            <div className='listing flex items-center gap-5  '>
                <Link className='logo ' href='/pages/home' >
                  
                    <img 
                      src="/photo/LogoAIT.png"/>
                  
                </Link>
                
                    <div className='categories flex items-center'> 
                       <Link href='/pages/mainCategories'>Software Categories</Link>
                    </div>
                    <div className='update'><Link href='/pages/updates'>Update</Link></div>
                    {/* <div className='write_Review'><Link href='/pages/write_review_page'>Write a Review</Link></div> */}
                    <div className='vendor'> <Link href='/pages/vendors'>For Vendors</Link></div>
            </div>
        
             <div className=' flex gap-5 justify-center items-center' >
                {isUser ? (
                // Render these elements if isUser is true
                    <p><Link href='/pages/profile'>
                      <span class="inline-block h-[2.875rem] w-[2.875rem] bg-gray-100 rounded-full overflow-hidden">
                      <svg class="h-full w-full text-gray-300" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.62854" y="0.359985" width="15" height="15" rx="7.5" fill="white"/>
                        <path d="M8.12421 7.20374C9.21151 7.20374 10.093 6.32229 10.093 5.23499C10.093 4.14767 9.21151 3.26624 8.12421 3.26624C7.0369 3.26624 6.15546 4.14767 6.15546 5.23499C6.15546 6.32229 7.0369 7.20374 8.12421 7.20374Z" fill="currentColor"/>
                        <path d="M11.818 10.5975C10.2992 12.6412 7.42106 13.0631 5.37731 11.5537C5.01171 11.2818 4.69296 10.9631 4.42107 10.5975C4.28982 10.4006 4.27107 10.1475 4.37419 9.94123L4.51482 9.65059C4.84296 8.95684 5.53671 8.51624 6.30546 8.51624H9.95231C10.7023 8.51624 11.3867 8.94749 11.7242 9.62249L11.8742 9.93184C11.968 10.1475 11.9586 10.4006 11.818 10.5975Z" fill="currentColor"/>
                      </svg>
                    </span></Link></p>
               ) : (
                // Render this element if isUser is false
             <>
                  <button onClick={openPopUpSignIn}>Log in</button>
                  <button
                    onClick={openPopUpSignUp}
                    className='bg-darkblue p-2 text-white text-center rounded-full w-24 hover:bg-sky-700 cursor-pointer'
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
            

           
            
        </div>
        {isPopUpSignIn && <SignIn onClose={closePopUpSignIn}></SignIn>}
        {isPopUpSignUp && <SignUpWithThirdParty onClose={closePopUpSignUp}></SignUpWithThirdParty>}
      </header>

     </div>
  )
}

export default Navbar