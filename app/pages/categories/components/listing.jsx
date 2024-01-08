import React from 'react'

function Listing  (){
  return (

          <div className="categories mt-20 bg-[#F7F8FA] rounded-t-lg border-solid border-2 border-gray p-2">
            <div className="title flex gap-4 items-center bg-[#1DCDFE] p-2 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <div className="title">
                  Project Management & Planning
                </div>
            </div>
            <div className='grid grid-cols-2 justify-items-center mt-1 bg-[#F7F8FA] p-2'>
               <div className="title p-2">
                  <div>Agile Project Management <span className='text-gray'>(210)</span></div>
                  <div>Agile Project Management <span className='text-gray'>(210)</span></div>
                  <div>Agile Project Management Professional Automation <span className='text-gray'>(210)</span></div>
                  <div>Agile Service Automation <span className='text-gray'>(210)</span></div>
                  <div>Agile Service Automation<span className='text-gray'>(210)</span></div>
                  <div>Agile Project Management <span className='text-gray'>(210)</span></div>
                  <div>Agile Service Automation<span className='text-gray'>(210)</span></div>
              </div>
              <div className="title p-2 ">
                  <div>Agile Project Management <span className='text-gray'>(210)</span></div>
                  <div>Agile Project Management <span className='text-gray'>(210)</span></div>
                  <div>Agile Project Management Professional Automation <span className='text-gray'>(210)</span></div>
                  <div>Agile Service Automation <span className='text-gray'>(210)</span></div>
                  <div>Agile Service Automation<span className='text-gray'>(210)</span></div>
                  <div>Agile Project Management <span className='text-gray'>(210)</span></div>
                  <div>Agile Service Automation<span className='text-gray'>(210)</span></div>
              </div>
            </div>
           
        </div>
        
  )
}

export default Listing