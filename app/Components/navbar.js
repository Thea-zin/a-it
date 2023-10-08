import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const navbar = () => {
  return (
    <div>
      <header className='p-4  '>
        <div className='menu flex justify-between '>
            <div className='listing flex items-center gap-5  '>
                <a className='logo '>
                  <Link href='/pages/home'>
                    <img 
                      src="/photo/logoAIT.png"/>
                  </Link>
                </a>
                    <div className='categories'><Link href='/pages/home' >Software categories</Link></div>
                    <div className='update'>Update</div>
                    <div className='write a Review'><Link href='/pages/updates'>Write a Revie</Link>w</div>
                    <div className='vendor'> <Link href='/pages/vendors'>For Vendors</Link></div>
            </div>
            <div className=' flex gap-5 justify-center items-center'>
                <div>Loign</div>
                <div className='bg-[#2F455C] p-2 text-white text-center rounded-full w-24 hover:bg-sky-700 cursor-pointer'>Sign Up</div>
            </div>
            
        </div>
      </header>

    </div>
  )
}

export default navbar