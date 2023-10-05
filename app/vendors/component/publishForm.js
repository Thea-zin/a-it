function PublishForm(){
    return(
        <div className="p-4 ">
            <form className="space-y-5 p-10  border-white border-2 lg:text-[15px] md:text-[14px] xsm:text-[12px]  ">
            <div className="lg:text-[32px] md:text-[25px] sm:text-[20px] xsm:text-[16px] text-darkblue text-center font-medium ">Publish Your Product/Service</div>
            <div className="flex justify-between space-x-3 ">
                    <div className="block w-1/2 ">
                        <div className="p-2"><label>Company name : </label></div>
                        <input type="text" className=" border-[1px]   rounded-full w-full p-2"></input>
                    </div>
                    <div className="block w-1/2">
                        <div className="p-2"><label>Phone Number : </label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                </div>
                <div className="flex justify-between space-x-3">
                    <div className="block w-1/2">
                        <div className="p-2 "><label>Name of person in charge : </label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                    <div className="block w-1/2">
                        <div className="p-2"><label>Occupation </label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                </div>
              
                <div >
                        <div className="p-2"><label>Company URL </label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Product/Service name </label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Product/Service URL</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Prefered plan</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Desired product/category</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Remark</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input>
                    </div>
                    <button className="bg-darkblue text-white p-2 rounded-full w-full hover:bg-darkblue-[300]  lg:text-display-sm md-body-sm " >Book</button>
        
                
            </form>
        </div>
    )
}
export default PublishForm;