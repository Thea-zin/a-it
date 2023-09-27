import Booking from "./component/booking";
import BookingForm from "./component/bookingForm";
import PublishForm from "./component/publishForm";

function Vendor(){
    return (
        <div className="font-dmsan ">
            <div>
               <Booking></Booking>
            </div>
            <div>
                <BookingForm></BookingForm>
            </div>
            <div>
                <PublishForm></PublishForm>
            </div>
        </div>
       

    )
}
export default Vendor;