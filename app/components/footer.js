import Link from "next/link";
function Footer(){
    return (
        <div className="lg:grid lg:grid-cols-3 sm:flex-col xsm:flex-col w-full h-full bg-black p-7 content-center lg:text-body-md md:body-sm sm:body-sm x xsm:text-body-sm ">
            <div className="space-y-3 lg:col-span-2 md:col-span-2  mt-[10%] lg:mb-[10%]">
                 <div className="mb-[2rem]" ><img src={"../aIT.png"}  ></img></div>
                 <div className="space-y-[70px] ">
                    <div className="space-x-5">
                         <Link href="/vendors" className="underline decoration-white text-white">Categories</Link>
                         {/* <Link href="/vendors" className="underline decoration-white text-white">Write a Review</Link> */}
                         <Link href="/vendors" className="underline decoration-white text-white">Blog</Link>
                         <Link href="/vendors" className="underline decoration-white text-white">Vendors</Link>
                         <Link href="/vendors" className="underline decoration-white text-white">About us</Link>
                    </div>
                    <div className="space-x-5">
                         <span className="text-darkgray"> 2006 - 2023 Software Review inc,</span>
                         <Link href="/vendors" className="underline decoration-white text-white">User Terms</Link>
                         <Link href="/vendors" className="underline decoration-white text-white">Vendor Terms</Link>
                         <Link href="/vendors" className="underline decoration-white text-white">Community Guidelines</Link>
                    </div>
                    <div className="space-x-5">
                         <Link href="/vendors" className="underline decoration-white text-white">ITReview Content Policy FAQs</Link>
                         <Link href="/vendors" className="underline decoration-white text-white">Cookie Policy</Link>
                         <Link href="/vendors" className="underline decoration-white text-white">Privacy Policy</Link>
                    </div>
            </div>
            </div>
            <div className="sm:block space-y-[70px] lg:mt-[35%] md:mt-[20%] sm:mt-[10%] xsm:mt-[20%]">
                <p className="text-white text-center sm:text-title-md xsm:text-[22px] font-bold">Stay up to date</p>
                <div className="text-center ">
                    <div className="flex justify-center">
                    <input type="email" className='p-2 absolute sm:w-1/2 md:w-1/2 lg:w-auto bg-basedark' placeholder="Email Address"></input>
                        <button className="relative mt-[10px] lg:ml-[40%] md:ml-[50%] sm:ml-[40%] xsm:ml-[30%] "><img src="../send.png"></img></button>
                    </div>
                </div>
                <div className="flex lg:space-x-2 xsm:space-x-[30px] justify-center">
                    <Link href="/vendors"><img src={"../instagram.png"}></img></Link>
                    <Link href="/vendors"><img src={"../linkedin.png"}></img></Link>
                    <Link href="/vendors"><img src={"../twitter.png"}></img></Link>
                    <Link href="/vendors"><img src={"../facebook.png"}></img></Link>

                </div>
            </div>
        

        </div>
    )
}
export default Footer;