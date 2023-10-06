import React from 'react'
import Image from 'next/image'
const navbar = () => {
  return (
    <div>
      <header className='p-4  '>
        <div className='menu flex justify-between '>
            <div className='listing flex gap-5  '>
                <a className='logo '>
                  <img 
                  src="/photo/logoAIT.png"/>
                </a>
                    <div className='categories'>Software categories</div>
                    <div className='update'>Update</div>
                    <div className='write a Review'>Write a Review</div>
                    <div className='vendor'>For Vendors</div>
            </div>
            <div className=' flex gap-5'>
                <div>Loign</div>
                <div>Sign Up</div>
            </div>
            
        </div>
      </header>

    </div>
  )
}

export default navbar