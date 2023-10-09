'use client';
import { useState} from "react";

function Advertisement(){

    const [currentIndex,setCurrentIndex]=useState(0);
    const ads=[
        "ads.png","ads.png",".ads.png",
    ];
    const nextSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex === ads.length -1 ? 0: prevIndex +1));
    }
    const prevSlide =()=>{
        setCurrentIndex((prevIndex)=>(prevIndex === 0 ? ads.length-1:prevIndex-1));
    }
    return(
        <div className="p-6">
            <div className="border border-stroke rounded-[16px] p-4">
                       <div className="flex p-4  space-x-2">
                                    <div className="grid content-center"> 
                                           <img src={"../vendors/left.png"}  onClick={nextSlide}></img>
                                    </div>
                                    <div className="shrink">
                                           <img src={"../vendors/"+ads[currentIndex]} className="w-[100%] h-[100%]"></img>
                                    </div>
                                     <div className="grid content-center"> 
                                           <img src={"../vendors/right.png"} className="w-[100%]" onClick={nextSlide}></img>
                                    </div>
                        </div>
        
            </div>
        </div>

    )
}
export default Advertisement;