'use client';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SignIn from '../authentications/components/signIn';
import SignUp from '../authentications/components/signUpEmailPassword';
import SignUpWithThirdParty from '../authentications/components/signUpWith3rdParty';
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
                    <div className='vendor'> <Link href='/pages/admin'>Admin</Link></div>
            </div>
            <div className=' flex gap-5 justify-center items-center'>
                <button onClick={openPopUpSignIn}>Log in</button>
                <button onClick={openPopUpSignUp} className='bg-darkblue p-2 text-white text-center rounded-full w-24 hover:bg-sky-700 cursor-pointer'>Sign Up</button>
            </div>
            
        </div>
        {isPopUpSignIn && <SignIn onClose={closePopUpSignIn}></SignIn>}
        {isPopUpSignUp && <SignUpWithThirdParty onClose={closePopUpSignUp}></SignUpWithThirdParty>}
      </header>

     </div>
  )
}

export default Navbar