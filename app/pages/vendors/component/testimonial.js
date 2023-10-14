function Testimonial(){
    // const [testimonialList,setTestimonial] = useState([]);
    const testimonialList=[
        {id:1,heading:"Customer Success",icon:"../vendors/flat-color-icons_debt.png",factors:["Strengthen Engagement","Extended customer support","improve service and product faster"],summary:"Reviews improve product and service quality, making it easier to understand and increase customer satisfaction. They also represent the voices of the silent majority and customers who don’t usually speak up."},
        {id:2,heading:"Sales",icon:"../vendors/flat-color-icons_bullish.png",factors:["Enhancing Advantages","More business opportunity","Self-serve rate UP"],summary:"Your service’s strengths will be clarified, leading to the acquisition of appropriate target customers. Additionally, you can gain market recognition, compete beyond price competition, and reduce order lead time."},
        {id:3,heading:"Marketing",icon:"../vendors/flat-color-icons_stack-of-photos.png",factors:["Organic exposure expansion","Greater negotiation opportunities","Strengthen and renew branding"],summary:"Reviews improve product and service quality, making it easier to understand and increase customer satisfaction. They also represent the voices of the silent majority and customers who don’t usually speak up."}
    ]
    return(
    
        <div className="p-4 ">
          <div className="text-center space-y-2">
              <div className="text-cyan lg:text-display-md md:display-sm sm:display-sm x xsm:text-display-sm font-medium">
                  Testimonial
              </div>
              <div className="text-body-md ">
                Customer review,Customer review,Customer review
              </div>
              <div className="grid  lg:grid-cols-3 p-4 md:grid-cols-3 sm:grid-cols-1 lg:space-x-3  ">
              {
                testimonialList.map((datas)=>(
    
                    <div key={datas.id} className="border-2 space-y-3 border-stroke p-10 mt-5 bg-white rounded-[16px]  ">
                        <div className="flex justify-center"> <div className="border-2 border-white rounded-full bg-cyan w-[100px] h-[100px] "><img src={datas.icon} className="items-center p-3"></img></div></div>
                       <div className="lg:text-display-md md:text-display-sm sm:text-display-sm x xsm:text-display-sm font-bold text-darkblue">{datas.heading}</div>
                        {
                            datas.factors.map((factor)=>(
                                // <div className=" rounded-full border-1 bg-cyan  p-2 "> <span><img src="../vendors/ticks.png" className></img></span><span className="text-white lg:text-body-large md:text-body-md sm:text-body-sm xsm:text-body-sm">{factor}</span></div>
                            <div className="rounded-full border-1 bg-cyan  p-2"> 
                               <div className="flex">
                                    <div className="">
                                       <img src="../vendors/ticks.png" ></img>
                      
                                    </div>
                                    <div className="ml-[2%] mt-[1.5%] text-white lg:text-body-md md:text-body-sm sm:text-body-sm xsm:text-body-sm">{factor}</div>
                         
                                </div>
                            </div>
                                ))
                        }
                        <div className="lg:text-body-md md:text-body-lg sm:text-body-sm xsm:text-body-sm italic "> {datas.summary}</div>
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