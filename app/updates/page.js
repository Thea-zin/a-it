import Footer from "../components/footer"
import UpdateBody from "./components/updateBody";
import Update1 from "./components/updateHeader1";
import Header2 from "./components/updateHeader2";

function Updates(){
    return (
        <div className="font-dmsan space-y-5 ">
            <div className="lg:grid lg:grid-cols-3 w-full  h-auto bg-base">
                <div className="lg:col-span-2 "><Update1></Update1></div>
                <div className="lg:mt-[20px] lg:ml-[5rem] md:mt-[29rem] sm:mt-[20rem] xsm:mt-[20rem] "><Header2></Header2></div>
            </div>
            <div>
                    <UpdateBody></UpdateBody>
            </div>
        </div>
      
    )
}
export default Updates;