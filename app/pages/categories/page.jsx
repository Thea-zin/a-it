import React from 'react'
import Categorise from './components/listing'
const pages = () => {
  return (
    <div className='p-7'>
        <div class="bg-[url('/photo/RectangleBG.png')] bg-cover  ">
          <div className="content p-9 items-center">
              <div className="text_title text-white text-4xl">
                Explore 900+ Software Categorise
              </div>
              <form className='pt-5'>   
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor"  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search" className="block w-full  p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                      <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                  </div>
              </form>
              <div className="text-title pt-5">
                 <p className='text-white'>Find the right software and services based on</p> 
                 <p className='text-white'> <span className='text-blue-500'>2,318,200+</span> real reviews.</p>
              </div>
              <div className="function flex justify-end mt-48 items-center">
                  <div className="sort">
                    sort :
                  </div>
                  <div className='m-2'>
                    <button id="Categorise" data-dropdown-toggle="dropdown" class=" bg-gray focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm  px-5 py-2 text-center inline-flex items-center dark:bg-gray-300 " type="button">Categorise <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                  </div>
              </div>
          </div> 
          </div>
          <Categorise></Categorise>
          <Categorise></Categorise>
          <Categorise></Categorise>
          <Categorise></Categorise>



          
           
       
        
    </div>
  )
}

export default pages
 