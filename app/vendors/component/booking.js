function Booking(){
    return(
        <div className="p-4 space-y-5">
            <div >
                <p className="text-darkblue font-medium text-[32px] leading-[45.13px]  ">Consult with us in your free time</p>
            </div>
            <div className="box-border h-[285px] w-[500px] bg-cyan p-10   rounded-[16px] space-y-5">
                <div className="text-[32px] text-darkblue text-center font-medium ">Booking</div>
                <div className="leading-[20.83px] p;">Don't need leads, but want to get your software displayed on our sites? Request a free basic listing.</div>
             
                <div ><button className="bg-darkblue text-white p-3 rounded-full w-full text-[24px] " >Make a booking</button></div>
           </div>
            
        </div>
    )
}
export default Booking;