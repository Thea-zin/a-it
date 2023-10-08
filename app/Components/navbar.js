import React from 'react'
import Image from 'next/image'
const navbar = () => {
  return (
    <div>
      <header className='p-4  '>
        <div className='menu flex justify-between '>
            <div className='listing flex items-center gap-5  '>
                <a className='logo '>
                  <img 
                  src="/photo/logoAIT.png"/>
                </a>
                    <div className='categories'>Software categories</div>
                    <div className='update'>Update</div>
                    <div className='write a Review'>Write a Review</div>
                    <div className='vendor'>For Vendors</div>
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