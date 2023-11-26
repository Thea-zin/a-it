"use client";
import { useState } from "react";
import Alert from '@mui/material/Alert';
function BookingForm({onClose}){
    const [name,setName] = useState(null);
    const [date,setDate]= useState(null);
    const [time,setTime]=useState(null);
    const [companyName,setCompanyName]=useState(null);
    const [email,setEmail]= useState(null);
    const [nullWarning,setNullWarning]=useState(false);
    const [errorMessage,setErrorMessage]=useState('');


 
    const addAppointment = async (e) =>{
        e.preventDefault();
        if ((companyName != null) && (name != null) &&(time != null) && (email != null) && (date != null) ){
            setNullWarning(false)

            try{
                const response = await fetch('/api/vendors/createAppointment', {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                      name:name,
                      date:date,
                      time:time,
                      companyName:companyName,
                      email:email,
                      bookedAt:new Date()
                    })
                })
                const message = await response.json()
                
               
                if (response.ok){
                    await setName("")
                    await setDate("")
                    await setEmail("")
                    await setTime("")
                    await setCompanyName("")
                    await onClose()
                    console.log("Add successfully")
                }else{
                    setErrorMessage(message['message'])
                    setNullWarning(true)
                    console.log("fail to add")
                }
            } catch(error){
                setErrorMessage(error)
                setNullWarning(true)
                console.log(error)
            }
        }else{
            setNullWarning(true)
            setErrorMessage('Fields cannot be empty !')

        }
    }
    return (
        <div >
                
                    <div className="p-4 absoute fixed inset-0 flex item-center justify-center z-50 bg-white  " >
                <form className="box-border  bg-cyan p-10  rounded-[16px]  w-auto h-auto">
                    <button className="ml-[95%] mt-[-20%]" onClick={onClose}><img src={"../cross-bold.png"} className="w-5 h-5"></img></button>
                <div className="text-display-md text-darkblue text-center font-medium ">Booking</div>
                
                <div>
                <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
                    <div >
                        {nullWarning && (
                            <Alert severity="error" className="font-dmsan">{errorMessage}</Alert>
                        )}
                    </div>
                        <div className="p-2"><label>Full name <span className="text-red">*</span></label></div>
                        <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2 px-4"></input>
                    </div>
                    <div className=" flex justify-between lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm">
                        <div className="w-1/2 block">
                            <div className="p-2"><label>Date <span className="text-red">*</span></label></div>
                            <input value={date}   onChange={(e)=>setDate(e.target.value)} type="date"  className="text-gray-300 item-center rounded-full border-darkgray border-[1px] w-[200px] p-2 px-4"></input>
                        </div>
                        <div className="w-1/2 block">
                            <div className="p-2"><label>Time <span className="text-red">*</span></label></div>
                            <input value={time} onChange={(e)=>setTime(e.target.value)} type="time"  className="text-gray-300 rounded-full border-darkgray border-[1px] w-[200px] p-2 px-4"></input>
                        </div>
                    </div>
                    <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm " >
                        <div className="p-2"><label>Company Name <span className="text-red">*</span></label></div>
                        <input type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2 px-4"></input>
                    </div>
                    <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm  ">
                        <div className="p-2"><label>Email Address <span className="text-red">*</span></label></div>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="text-gray-300 rounded-full border-darkgray border-[1px] w-full p-2 px-4"></input>
                    </div>
                    <div className="lg:text-title-sm md:text-body-md sm:text-body-sm xsm:text-body-sm  mt-2" >
                        <input type="checkbox"></input>
                        <label> I agree to Privacy Policy</label>
                      
                    </div>
             
                </div>
                
                    <button className="bg-darkblue hover:bg-darkblue_hover text-white p-2 rounded-full w-full  lg:text-[24px] md-text-[15px]  mt-2 "onClick={addAppointment} >Book</button>

        
                </form>
        
           </div>

           <div className="absolute"><img src={"../Star.png"}></img></div>
        </div>

    )
}
export default BookingForm;