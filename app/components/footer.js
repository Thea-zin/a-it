import Link from "next/link";
function Footer(){
    return (
        <div className="grid grid-cols-3 w-full h-full bg-black p-7 content-center">
            <div className="space-y-3 col-span-2 ">
                 <div><img src={"aIT.png"}></img></div>
                 <div className="space-y-3 ">
                    <div className="space-x-5">
                         <Link href="/vendors" className="underline decoration-white text-white">Categories</Link>
                         <Link href="/vendors" className="underline decoration-white text-white">Write a Review</Link>
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
            <div className="space-y-3">
                <p className="text-white text-center">Stay up to date</p>
                <div className="text-center"><input type="email" className='p-2 rounded-full w-auto'></input></div>
                <div className="flex space-x-2 justify-center">
                    <Link href="/vendors"><img src={"instagram.png"}></img></Link>
                    <Link href="/vendors"><img src={"linkedin.png"}></img></Link>
                    <Link href="/vendors"><img src={"twitter.png"}></img></Link>
                    <Link href="/vendors"><img src={"facebook.png"}></img></Link>

                </div>
            </div>
        

        </div>
    )
}
export default Footer;