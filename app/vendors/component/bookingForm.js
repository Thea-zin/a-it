function BookingForm(){
    return (
        <div className="p-4 space-y-5">
                <form className="box-border h-auto w-[500px] bg-cyan p-10 text-[16px]  rounded-[16px] space-y-5">
                <div className="text-[32px] text-darkblue text-center font-medium ">Booking</div>
                    <div>
                        <div className="p-2"><label>Full name <span className="text-red">*</span></label></div>
                        <input type="text" value="Mao Timong" className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2"></input>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-1/2 block">
                            <div className="p-2"><label>Date <span className="text-red">*</span></label></div>
                            <input type="date" value="Mao Timong" className="text-gray-300 item-center rounded-full border-darkgray border-[1px] w-[200px] p-2"></input>
                        </div>
                        <div className="w-1/2 block">
                            <div className="p-2"><label>Time <span className="text-red">*</span></label></div>
                            <input type="time" value="Mao Timong" className="text-gray-300 rounded-full border-darkgray border-[1px] w-[200px] p-2"></input>
                        </div>
                    </div>
                    <div>
                        <div className="p-2"><label>Company Name <span className="text-red">*</span></label></div>
                        <input type="text" value="Mao Timong" className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2"></input>
                    </div>
                    <div>
                        <div className="p-2"><label>Email Address <span className="text-red">*</span></label></div>
                        <input type="email" value="Mao Timong" className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2"></input>
                    </div>
                    <div>
                        <input type="checkbox"></input>
                        <label> I agree to Privacy Policy</label>
                    </div>
                    <div ><button className="bg-darkblue text-white p-2 rounded-full w-full text-[24px] " >Book</button></div>
    
                </form>
           </div>
    )
}
export default BookingForm;