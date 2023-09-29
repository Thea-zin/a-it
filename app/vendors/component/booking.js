'use client';
import {useState} from 'react';
import BookingForm from './bookingForm';
function Booking(){
    const [isPopUp,setIsPopUp] = useState(false);
    const openPopUp = () =>{
        setIsPopUp(true)
    };
    const closePopUp = () =>{
        setIsPopUp(false)
    };
    return(
        <div >
            <div className="p-4 space-y-5">
            <div >
                <p className="text-darkblue font-medium lg:text-[32px] md:text-[25px] sm:text-[23px] xsm:text-[22px] leading-[45.13px] text-center">Consult with us in your free time</p>
            </div>
            <div className="box-border h-auto w-full bg-cyan p-10   rounded-[16px] space-y-5">
                <div className="lg:text-[32px] md:text-[25px] sm:text-[20px] xsm:text-[20px] text-darkblue text-center font-medium ">Booking</div>
                <div className="leading-[20.83px] lg:text-[15px] md:text-[14px] xsm:text-[12px] ">Don't need leads, but want to get your software displayed on our sites? Request a free basic listing.</div>
             
                <div ><button className="bg-darkblue text-white p-3 rounded-full w-full lg:text-[24px] md:text-[20px] sm:text-[15px] xsm:text-[13px] " onClick={openPopUp} >Make a booking</button></div>
           </div>
           </div>
           {isPopUp && <BookingForm onClose={closePopUp}></BookingForm>}
            
        </div>
    )
}
export default Booking;