'use client';

import { useState } from "react";
import Software from "./components/software";
import { useRouter } from 'next/navigation';
import Blog from "./components/blog";
import Demo from "./components/demo";

function adminPage(){
    const [activeItem,setActiveItem]=useState(0);
    const router = useRouter()
    const handleItemClick = (item) =>{
    setActiveItem(item);
};
    return (

        <div className="font-dmsan bg-base p-6 grid grid-cols-3 m-5" >
            <div className="col-span-1">
                <div className="bg-[#1D24CA] flex rounded-[16px] p-8 h-[300px] w-[300px]">
                    
                    <div className="text-display-sm  text-black font-bold ml-8">
                        <div className="text-body-md space-y-8   ml-[-20%] ">
                            <div className="font-bold text-white text-2xl">
                                Admin page
                            </div>
                            <div onClick={()=>handleItemClick(1)} className={`flex space-x-3 bg-white rounded-[16px] hover:bg-white py-2 px-4 hover:text-black hover:rounded-[16px] hover:font-bold ${activeItem==1?'active':''}` }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                </svg>

                                    <span className=" ">Input Software</span>
                            </div>
                            <div onClick={()=>handleItemClick(2)} className={`flex space-x-3 bg-white rounded-[16px] hover:bg-white py-2 px-4 hover:text-black hover:rounded-[16px] hover:font-bold ${activeItem==1?'active':''}` }>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>

                                    <span className="  ">Input Blog</span>
                            </div>
                            
                        
                        </div>
                    </div>
        

    
            
            
                 </div>
            
            </div>
            <div className="col-span-2">
            {
                activeItem===0 && <Demo></Demo>
                
            }
            {
                activeItem===1 && <Software></Software>
                
            }{
                activeItem===2 && <Blog></Blog>
            }
            </div>

        </div>
    )
}
export default adminPage;