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
      signOut(auth);
      const user = auth.currentUser;
      setIsUser(user !== null && user.accessToken !== null);
      
  });
 


  return (
     <div >
      <header className='p-4  '>
        <div className='menu flex justify-between '>
            <div className='listing flex items-center gap-5  '>
                <Link className='logo ' href='/pages/home' >
                  
                    <img 
                      src="/photo/logoAIT.png"/>
                  
                </Link>
                
                    <div className='categories flex items-center'> 
                       <Link href='/pages/mainCategories'>Software Categories</Link>
                    </div>
                    <div className='update'><Link href='/pages/updates'>Update</Link></div>
                    <div className='write_Review'><Link href='/pages/write_review_page'>Write a Review</Link></div>
                    <div className='vendor'> <Link href='/pages/vendors'>For Vendors</Link></div>
            </div>
        
             <div className=' flex gap-5 justify-center items-center' >
                {isUser ? (
                // Render these elements if isUser is true
                    <p><Link href='/pages/mainCategories'><div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div></Link></p>
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