import React from 'react'

const HomePage = () => {
  return (
    <div className="">
      <div className='pl-7 pr-7'>
        <div className=" scale-95 h-screen max-w-screen bg-cover bg-[url('/photo/background.png')] flex flex-col justify-center items-center rounded-lg" >
                <div className='mb-64 text-center'>
                  <h1 className='text-white font-simibold text-7xl'>Where Leading Company</h1>
                  <h1 className='text-white font-simibold text-7xl'>fine best product</h1>
                </div>
                
                <div className="search form-container w-3/5">
                    <form >   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 " placeholder="Enter product, categories, servicec name..." required />
                            <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-[#2F455C] hover:bg-[#2F455C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                        </div>
                        <p className='text-white text-center mt-2 text-xl'>Find the right software and services based on <span className='text-cyan-500'>2,318,200+</span> real reviews.</p>
                    </form>
            
                    
                </div>
                    

        </div>
      </div>
      <div className='flex justify-center -translate-y-24'>
        <img className='scale-110' 
          src="/photo/Facts.png" alt="" />
      </div>

      <div className="showproduct flex justify-between m-10">
        <h1 className='text-4xl  font-simibold'>
          Popular products
        </h1>
        <div className="function flex gap-4 mx-35 ">
            <button id="Categorise" data-dropdown-toggle="dropdown" class=" hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm  px-9 py-2 text-center inline-flex items-center dark:bg-gray-300 " type="button">Categorise <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <button id="Service" data-dropdown-toggle="dropdown" class=" hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm  px-9 py-2 text-center inline-flex items-center dark:bg-gray-300 " type="button">Service <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <button id="Categorise" data-dropdown-toggle="dropdown" class=" hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm  px-9 py-2 text-center inline-flex items-center dark:bg-gray-300 " type="button">Budget <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <button id="Categorise" data-dropdown-toggle="dropdown" class=" hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm  px-9 py-2 text-center inline-flex items-center dark:bg-gray-300 " type="button">Rated <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <button id="Categorise" data-dropdown-toggle="dropdown" class=" hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm  px-9 py-2 text-center inline-flex items-center dark:bg-gray-300 " type="button">Industry <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            
        </div>
      </div>

      <div className='p-4 m-4 border-solid border border-gray-500 rounded-lg '>
        <div className="border-solid border-2 border-gray-200 bg-gray-100  m-5 flex justify-between">
       
          <div id='nameproduct' className='flex gap-6 bg-gray-100 p-4 m-4 rounded-lg'>

              <div id="number">1</div>

              <div id="logo">
                <img 
                src='../photo/icon/zendek.png'/>
              </div>
              <div id="name" className=''>
                  <div className="product text-xl font-normal ">Zendesk</div>
                  <div id="rated" className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>
                        <p>4.4</p>
                        <p className='Review underline'>3.6k Reviews</p>
                  </div>

              </div>

          </div>
          <div id="price" className=' p-4 m-4 '>
              <div className='text-sl '>$1-49 / Month</div>
          </div>
          <div id="serviceProduct" className='p-4 m-4 '>
              <p className='text-sl'>CRM,Customer Srevice & Sales</p>
          </div>
          <div id="industry " className='flex justify-between gap-5 items-center text-center mx-7'>
              <div className="bg-white rounded-full ">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                  </svg>

              </div>
              <div className="bg-white  rounded-full ">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>

              </div>
              <div className="bg-white  rounded-full">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>

              </div>
              <div className="bg-white rounded-full">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

              </div>
          </div>  
      </div>
      <div className="border-solid border-2 border-gray-200 bg-gray-100  m-5 flex justify-between">
       
          <div id='nameproduct' className='flex gap-6 bg-gray-100 p-4 m-4 rounded-lg'>

              <div id="number">1</div>

              <div id="logo">
                <img 
                src='../photo/icon/dropbox.png'/>
              </div>
              <div id="name" className=''>
                  <div className="product text-xl font-normal ">Dropbox</div>
                  <div id="rated" className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>
                        <p>4.4</p>
                        <p className='Review underline'>3.6k Reviews</p>
                  </div>

              </div>

          </div>
          <div id="price" className=' p-4 m-4 '>
              <div className='text-sl text-center '>$1-49 / Month</div>
          </div>
          <div id="serviceProduct" className='p-4 m-4 text-center'>
              <p className='text-sl text-center'>CRM,Customer Srevice & Sales</p>
          </div>
          <div id="industry " className='flex justify-between gap-5 items-center text-center mx-7'>
              <div className="bg-white rounded-full ">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                  </svg>

              </div>
              <div className="bg-white  rounded-full ">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>

              </div>
              <div className="bg-white  rounded-full">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>

              </div>
              <div className="bg-white rounded-full">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

              </div>
          </div>  
      </div>
      <div className="border-solid border-2 border-gray-200 bg-gray-100  m-5 flex justify-between">
       
          <div id='nameproduct' className='flex gap-6 bg-gray-100 p-4 m-4 rounded-lg'>

              <div id="number">1</div>

              <div id="logo">
                <img 
                src='../photo/icon/asana.png'/>
              </div>
              <div id="name" className=''>
                  <div className="product text-xl font-normal ">Asana</div>
                  <div id="rated" className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                        </svg>
                        <p>4.4</p>
                        <p className='Review underline'>3.6k Reviews</p>
                  </div>

              </div>

          </div>
          <div id="price" className=' p-4 m-4 '>
              <div className='text-sl '>$1-49 / Month</div>
          </div>
          <div id="serviceProduct" className='p-4 m-4 '>
              <p className='text-sl'>CRM,Customer Srevice & Sales</p>
          </div>
          <div id="industry " className='flex justify-between gap-5 items-center text-center mx-7'>
              <div className="bg-white rounded-full ">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                  </svg>

              </div>
              <div className="bg-white  rounded-full ">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>

              </div>
              <div className="bg-white  rounded-full">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>

              </div>
              <div className="bg-white rounded-full">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>

              </div>
          </div>  
      </div>
      </div>
      




      <div className='border-solid border border-gray-500 m-4 p-4 rounded-lg my-20'>
        <div className='flex justify-between gap'>
            <button className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
            <img 
               src="/photo/advertie.png" alt="" 
               className='col-span-2' />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
      </div>
      <div className=' chart my-20'>
        <div className='m-10'>
          <h1 className='text-4xl  font-simibold'>
              Trending Categories
          </h1>
        </div>
          <div className='p-4 m-4 border-solid border border-gray-500 rounded-lg flex justify-center'>
              <img 
              src="/photo/chart.png" alt="" />
          </div>
      </div>
      <div className='popular software'>
          <div className='m-10'>
              <h1 className='text-4xl  font-simibold'>
                  Most Popular Software
              </h1>
              <h1 className='text-4xl  font-simibold'>
                  Categories
          </h1>
          </div>
          <div className="categories flex">
            <div className="title m-10">
              <div className='grid'>
                <buttton className='text-xl font-normal hover:bg-sky-500  hover:text-white p-3 rounded-lg '>Project Management</buttton>
                <buttton className='text-xl font-normal hover:bg-sky-500  hover:text-white p-3 rounded-lg '>CRM</buttton>
                <buttton className='text-xl font-normal hover:bg-sky-500  hover:text-white p-3 rounded-lg '>ERS System</buttton>
                <buttton className='text-xl font-normal hover:bg-sky-500  hover:text-white p-3 rounded-lg '>Online Backup</buttton>
                <buttton className='text-xl font-normal hover:bg-sky-500  hover:text-white p-3 rounded-lg '>Attention Tracking</buttton>
                <buttton className='text-xl font-normal hover:bg-sky-500  hover:text-white p-3 rounded-lg '>Project Management</buttton>
              </div>
              
            </div>
            <div className=' grid grid-cols-3 gap-4 ml-80'>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56">
                  <p>Trello</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 ">
                    <img src="/photo/icon/trello.png" alt="" />
                  </div>
                   
              </div>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56 ">
                  <p>Copy.ai</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 h-38">
                    <img src="/photo/icon/CopyAI.png" alt="" />
                  </div>
              </div>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56">
                  <p>ChatGPT</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 h-38">
                    <img src="/photo/icon/ChatGPT.png" alt="" />
                  </div>
              </div>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56">
                  <p>Trello</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 ">
                    <img src="/photo/icon/trello.png" alt="" />
                  </div>
                   
              </div>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56">
                  <p>Trello</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 ">
                    <img src="/photo/icon/trello.png" alt="" />
                  </div>
                   
              </div>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56">
                  <p>Trello</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 ">
                    <img src="/photo/icon/trello.png" alt="" />
                  </div>
                   
              </div>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56">
                  <p>Trello</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 ">
                    <img src="/photo/icon/trello.png" alt="" />
                  </div>
                   
              </div>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56">
                  <p>Trello</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 ">
                    <img src="/photo/icon/trello.png" alt="" />
                  </div>
                   
              </div>
              <div className="Trello border borer-gray-500 p-3 rounded-lg h-48 w-56">
                  <p>Trello</p>
                  <div className="star flex">
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.00033 14.275L4.85033 16.775C4.667 16.8916 4.47533 16.9416 4.27533 16.9249C4.07533 16.9083 3.90033 16.8416 3.75033 16.725C3.60033 16.6083 3.48366 16.4623 3.40033 16.287C3.317 16.1116 3.30033 15.916 3.35033 15.7L4.45033 10.975L0.775329 7.79995C0.608662 7.64995 0.504662 7.47895 0.463329 7.28695C0.421996 7.09495 0.434329 6.90762 0.500329 6.72495C0.566996 6.54162 0.666995 6.39162 0.800329 6.27495C0.933662 6.15828 1.117 6.08328 1.35033 6.04995L6.20033 5.62495L8.07533 1.17495C8.15866 0.974952 8.288 0.824951 8.46333 0.724951C8.63866 0.624951 8.81766 0.574951 9.00033 0.574951C9.18366 0.574951 9.36266 0.624951 9.53733 0.724951C9.712 0.824951 9.84133 0.974952 9.92533 1.17495L11.8003 5.62495L16.6503 6.04995C16.8837 6.08328 17.067 6.15828 17.2003 6.27495C17.3337 6.39162 17.4337 6.54162 17.5003 6.72495C17.567 6.90829 17.5797 7.09595 17.5383 7.28795C17.497 7.47995 17.3927 7.65062 17.2253 7.79995L13.5503 10.975L14.6503 15.7C14.7003 15.9166 14.6837 16.1126 14.6003 16.288C14.517 16.4633 14.4003 16.609 14.2503 16.725C14.1003 16.8416 13.9253 16.9083 13.7253 16.9249C13.5253 16.9416 13.3337 16.8916 13.1503 16.775L9.00033 14.275Z" fill="#F3B146"/>
                      </svg>
                      <p>(2,145)</p>
                  </div>
                  <div className="pic flex justify-center my-5 ">
                    <img src="/photo/icon/trello.png" alt="" />
                  </div>
                   
              </div>
              
            </div>
          </div>

          <div className='border-solid border border-gray-500 m-4 p-4 rounded-lg my-20'>
        <div className='flex justify-between gap'>
            <button className=''>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </button>
            <img 
               src="/photo/advertie.png" alt="" 
               className='col-span-2' />
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
      </div>
      <div className='Feedback flex justify-center'>
          <img src="/photo/Feedback.png" alt="" />
      </div>
      </div>
      <div className="vendor flex justify-center my-20">
        <img src="/photo/vendor.png" alt="" />
      </div>

    </div>
  )
}

export default HomePage