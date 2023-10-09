
import Advertisement from "./component/advertisement";
import Booking from "./component/booking";
import BookingForm from "./component/bookingForm";
import CustomerReview from "./component/customerReview";
import MainComponent from "./component/mainComponnent";
import PublishForm from "./component/publishForm";
import Testimonial from "./component/testimonial";


function Vendor(){
    return (
        <div className="font-dmsan bg-base  ">
            <div>
                <MainComponent></MainComponent>
            </div>
            <div>
                <Advertisement></Advertisement>
            </div>
            <div>
                <Testimonial></Testimonial>
            </div>
            <div>
                <CustomerReview></CustomerReview>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 p-2 ">
                <div className="mt-10"> <Booking ></Booking></div>
                <PublishForm></PublishForm>
            </div>

        </div>
       

    )
}
export default Vendor;