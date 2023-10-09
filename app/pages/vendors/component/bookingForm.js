function BookingForm({onClose}){
    return (
        <div >
                    <div className="p-4 absoute fixed inset-0 flex item-center justify-center z-50 bg-white  " >
                <form className="box-border  bg-cyan p-10  rounded-[16px]  w-auto h-auto">
                    <button className="ml-[95%] mt-[-20%]" onClick={onClose}><img src={"../cross-bold.png"} className="w-5 h-5"></img></button>
                <div className="text-display-md text-darkblue text-center font-medium ">Booking</div>
                <div>
                <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
                        <div className="p-2"><label>Full name <span className="text-red">*</span></label></div>
                        <input type="text" value="Mao Timong" className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2"></input>
                    </div>
                    <div className="flex justify-between lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
                        <div className="w-1/2 block">
                            <div className="p-2"><label>Date <span className="text-red">*</span></label></div>
                            <input type="date" value="Mao Timong" className="text-gray-300 item-center rounded-full border-darkgray border-[1px] w-[200px] p-2"></input>
                        </div>
                        <div className="w-1/2 block">
                            <div className="p-2"><label>Time <span className="text-red">*</span></label></div>
                            <input type="time" value="Mao Timong" className="text-gray-300 rounded-full border-darkgray border-[1px] w-[200px] p-2"></input>
                        </div>
                    </div>
                    <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm " >
                        <div className="p-2"><label>Company Name <span className="text-red">*</span></label></div>
                        <input type="text" value="Mao Timong" className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2"></input>
                    </div>
                    <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm  ">
                        <div className="p-2"><label>Email Address <span className="text-red">*</span></label></div>
                        <input type="email" value="Mao Timong" className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2"></input>
                    </div>
                    <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm  mt-2" >
                        <input type="checkbox"></input>
                        <label> I agree to Privacy Policy</label>
                      
                    </div>
                </div>
                
                    <button className="bg-darkblue text-white p-2 rounded-full w-full  lg:text-[24px] md-text-[15px]  mt-2 " >Book</button>
 
        
                </form>
        
           </div>
           <div className="absolute"><img src={"../Star.png"}></img></div>
        </div>

    )
}
export default BookingForm;