'use client';
import { data } from "autoprefixer";
import { useState } from "react";
function CustomerReview(){
    // const [customerReviewList,setCustomerReview]=useState([]);
    const customerReviewList=[
        {name:"Mao Timong",pic:"people.png",role:"Software Engineer",message:"A-IT has been instrumental in helping me share my thoughts and insights about software. It's been rewarding to see my reviews gaining momentum and providing value to others. It's been rewarding to see my reviews gaining momentum and providing value to others."},
        {name:"Mao Timong",pic:"people.png",role:"Software Engineer",message:"A-IT has been instrumental in helping me share my thoughts and insights about software. It's been rewarding to see my reviews gaining momentum and providing value to others. It's been rewarding to see my reviews gaining momentum and providing value to others."},
        {name:"Mao Timong",pic:"people.png",role:"Software Engineer",message:"A-IT has been instrumental in helping me share my thoughts and insights about software. It's been rewarding to see my reviews gaining momentum and providing value to others. It's been rewarding to see my reviews gaining momentum and providing value to others."}
    ]
    return (
        <div className=" p-4">
        <div className="text-center space-y-2 ">
            <div className="text-cyan text-[32px] font-medium">
                Customer Review
            </div>
    
            <div className="grid p-4 lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 lg:space-x-3 md:space-x-3  gap-auto">
            {
             customerReviewList.map((datas)=>(
                <div>
                     <div className="border-2 sm:space-y-3 p-10 mt-5  ">
                        
                      {/* <div className="flex justify-center"> <div className="border-2 rounded-full bg-cyan w-[100px] h-[100px] "><img src={datas.icon} className="items-center p-3"></img></div></div>
                     
                      {
                          datas.factors.map((factor)=>(
                              <div className="block  rounded-full border-1 bg-cyan text-white text-[12px] p-2 "> {factor}</div>
                          ))
                      } */}
                      <div className="text-[13px] text-center"> {datas.message}</div>
                      <div className="grid grid-cols-2"> 
                         
                                    <img src={datas.pic} className="items-center p-3 rounded-full"></img>
               
                            <div className="grid content-center ">
                                <p className="justify-center">{datas.name}</p>
                                <p className="justify-center text-[9px] font-cyan">{datas.role}</p>
                            </div>
                     </div>
                  </div>
                </div>
  
                //   <div className="border-2 space-y-3 p-10 mt-5  ">
                //       {/* <div className="flex justify-center"> <div className="border-2 rounded-full bg-cyan w-[100px] h-[100px] "><img src={datas.icon} className="items-center p-3"></img></div></div>
                     
                //       {
                //           datas.factors.map((factor)=>(
                //               <div className="block  rounded-full border-1 bg-cyan text-white text-[12px] p-2 "> {factor}</div>
                //           ))
                //       } */}
                //       <div className="text-[13px] text-center"> {datas.message}</div>
                //       <div><img src={datas.pic}></img></div>
                //   </div>

              

              )
              )
             }
            </div>
        </div>
      </div>
    )
};
export default CustomerReview;