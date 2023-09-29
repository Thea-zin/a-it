'use client';
import { data } from "autoprefixer";
import { useState } from "react";
function Testimonial(){
    // const [testimonialList,setTestimonial] = useState([]);
    const testimonialList=[
        {heading:"Customer Success",icon:"flat-color-icons_debt.png",factors:["Strengthen Engagement","Extended customer support","Accelerate service and product improvement"],summary:"Reviews improve product and service quality, making it easier to understand and increase customer satisfaction. They also represent the voices of the silent majority and customers who don’t usually speak up."},
        {heading:"Customer Success",icon:"flat-color-icons_bullish.png",factors:["Strengthen Engagement","Extended customer support","Accelerate service and product improvement"],summary:"Your service’s strengths will be clarified, leading to the acquisition of appropriate target customers. Additionally, you can gain market recognition, compete beyond price competition, and reduce order lead time."},
        {heading:"Customer Success",icon:"flat-color-icons_stack-of-photos.png",factors:["Organic exposure expansion","Greater negotiation opportunities","Strengthen and renew branding"],summary:"Reviews improve product and service quality, making it easier to understand and increase customer satisfaction. They also represent the voices of the silent majority and customers who don’t usually speak up."}
    ]
    return(
        <div className="p-4 ">
          <div className="text-center space-y-2">
              <div className="text-cyan lg:text-[32px] md:text-[25px] sm:text-[23px] xsm:text-[22px] font-medium">
                  Testimonial
              </div>
              <div>
                Customer review,Customer review,Customer review
              </div>
              <div className="grid lg:grid-cols-3 p-4 md:grid-cols-3 sm:grid-cols-1 lg:space-x-3  ">
              {
                testimonialList.map((datas)=>(
    
                    <div className="border-2 space-y-3 p-10 mt-5  ">
                        <div className="flex justify-center"> <div className="border-2 rounded-full bg-cyan w-[100px] h-[100px] "><img src={datas.icon} className="items-center p-3"></img></div></div>
                       
                        {
                            datas.factors.map((factor)=>(
                                <div className="block  rounded-full border-1 bg-cyan text-white text-[12px] p-2 "> {factor}</div>
                            ))
                        }
                        <div className="text-[10px] "> {datas.summary}</div>
                    </div>

                

                )
                )
               }
              </div>
          </div>
        </div>
    )
}
export default Testimonial;