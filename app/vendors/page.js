import Advertisement from "./component/advertisement";
import Booking from "./component/booking";
import BookingForm from "./component/bookingForm";
import CustomerReview from "./component/customerReview";
import MainComponent from "./component/mainComponnent";
import PublishForm from "./component/publishForm";
import Testimonial from "./component/testimonial";

function Vendor(){
    return (
        <div className="font-dmsan ">
            <div>
                <MainComponent></MainComponent>
            </div>
            <div>
               <Booking></Booking>
            </div>
            <div>
           
            </div>
            <div>
                <PublishForm></PublishForm>
            </div>
            <div>
                <Testimonial></Testimonial>
            </div>
            <div>
                <CustomerReview></CustomerReview>
            </div>
            <div>
                <Advertisement></Advertisement>
            </div>
        </div>
       

    )
}
export default Vendor;