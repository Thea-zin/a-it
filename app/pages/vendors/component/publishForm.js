"use client"
import { useState } from "react";
import Alert from '@mui/material/Alert';
import { SwitchAccessShortcutOutlined } from "@mui/icons-material";
function PublishForm(){
    const [companyName,setCompanyName] = useState("");
    const [phoneNumber,setPhoneNumber]= useState("");
    const [namePersonInCharge,setNamePersonInCharge]= useState("");
    const [occupation,setOccupation] = useState("");
    const [companyURL,setCompanyURL]=useState("")
    const [serviceName,setServiceName]=useState("")
    const [serviceURL,setServiceURL]=useState("")
    const [preferPlan,setPreferPlan]= useState("")
    const [desireProduct,setDesireProduct]=useState("")
    const [remark,setRemark]=useState("")
    const [nullWarning,setNullWarning]=useState(false);


 
    const addPublishForm = async (e) =>{
        e.preventDefault();
        if ((companyName != "") && (phoneNumber != "") &&(namePersonInCharge != "") && (occupation != "") && (companyURL != "") && (serviceName !="") && (serviceURL != "")&&(preferPlan != "") && (desireProduct != "")&&(remark!="")){
            setNullWarning(false)
            try{
                const response = await fetch('/api/vendors/createProduct', {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body:JSON.stringify({
                        companyName:companyName,
                        phoneNumber:phoneNumber,
                        namePersonInCharge:namePersonInCharge,
                        occupation:occupation,
                        companyURL:companyURL,
                        serviceName:serviceName,
                        serviceURL:serviceURL,
                        preferPlan:preferPlan,
                        desireProduct:desireProduct,
                        remark:remark,
                        requestedAt: new Date()
                    })
                })
                if (response.ok){
                    await setCompanyName("")
                    await setPhoneNumber("")
                    await setNamePersonInCharge("")
                    await setCompanyName("")
                    await setCompanyURL("")
                    await setServiceName("")
                    await setServiceURL("")
                    await setPreferPlan("")
                    await setDesireProduct("")
                    await setRemark("")
                    await setOccupation("")
                }else{
                    console.log("fail to add")
                }
            } catch(error){
                console.log(error)
            }
        }else{
            setNullWarning(true)
        }
    }
    return(
        <div className="p-4 bg-white rounded-[16px] ">
            <form className="space-y-5 p-10  border-white border-2 lg:text-[15px] md:text-[14px] xsm:text-[12px]  ">
            <div className="lg:text-[32px] md:text-[25px] sm:text-[20px] xsm:text-[16px] text-darkblue text-center font-medium ">Publish Your Product/Service</div>
            <div className="flex justify-between space-x-3 ">
                    <div className="block w-1/2 ">
                        <div className="p-2"><label>Company name : </label></div>
                        {/* <input type="text" className=" border-[1px]   rounded-full w-full p-2" ></input> */}
                        <input type="text" className=" border-[1px]   rounded-full w-full p-2" value={companyName} onChange={(e)=>setCompanyName(e.target.value)} required></input>
                    </div>
                    <div className="block w-1/2">
                        <div className="p-2"><label>Phone Number : </label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required></input>
                    </div>
            </div>
            <div className="flex justify-between space-x-3">
                    <div className="block w-1/2">
                        <div className="p-2 "><label>Name of person in charge : </label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2" value={namePersonInCharge} onChange={(e)=>setNamePersonInCharge(e.target.value)} required></input>
                    </div>
                    <div className="block w-1/2">
                        <div className="p-2"><label>Occupation :</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2" value={occupation} onChange={(e)=>setOccupation(e.target.value)} required></input>
                    </div>
            </div>
            <div >
                    <div className="p-2"><label>Company URL :</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2" value={companyURL} onChange={(e)=>setCompanyURL(e.target.value)} required></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Product/Service name :</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2" value={serviceName} onChange={(e)=>setServiceName(e.target.value)} required></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Product/Service URL :</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2" value={serviceURL} onChange={(e)=>setServiceURL(e.target.value)} required></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Prefered plan :</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2" value={preferPlan} onChange={(e)=>setPreferPlan(e.target.value)} required></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Desired product/category :</label></div>
                        <input type="text" className=" border-[1px]  rounded-full w-full p-2" value={desireProduct} onChange={(e)=>setDesireProduct(e.target.value)} required></input>
                    </div>
                    <div >
                        <div className="p-2"><label>Remark :</label></div>
                        <textarea className="w-full px-2 p-2  border-[1px] h-[120px] rounded-md" value={remark} onChange={(e)=>setRemark(e.target.value)} required></textarea>
                        {/* <input type="text" className=" border-[1px]  rounded-full w-full p-2"></input> */}
                    </div>
                    {/* <button className="bg-darkblue text-white p-2 rounded-full w-full hover:bg-darkblue-[300]  lg:text-display-sm md-body-sm " >Book</button> */}
                    <button className="bg-darkblue hover:bg-darkblue_hover text-white p-2 rounded-full w-full hover:bg-darkblue-[300]  lg:text-display-sm md-body-sm " onClick={addPublishForm}>Book</button>
                    <div >
                        {nullWarning && (
                            <Alert severity="error" className="font-dmsan">Field cant be null !</Alert>
                        )}
                    </div>
            </form>
        </div>
    )
}
export default PublishForm;