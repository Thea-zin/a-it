'use client';
import { useState } from "react";
function Favorite(){
    const [isEmpty,setEmpty] = useState(false);
    return(
        <div className="flex-row justify-center  p-8 bg-white rounded-[16px] space-y-4">
            <div className="flex justify-center">
            <svg width="106" height="122" viewBox="0 0 106 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="11.7207" y="72.325" width="1.95347" height="5.86042" rx="0.976736" fill="#2F455C"/>
                        <rect x="51.4414" y="112.046" width="1.95347" height="5.20926" rx="0.976736" fill="#2F455C"/>
                        <rect x="11.7207" y="80.1389" width="1.95347" height="31.2556" rx="0.976736" fill="#2F455C"/>
                        <rect x="12.2969" y="54.0018" width="1.95347" height="15.985" rx="0.976736" transform="rotate(48.0421 12.2969 54.0018)" fill="#2F455C"/>
                        <rect x="13.6816" y="54.3416" width="1.95347" height="15.985" rx="0.976736" transform="rotate(128.8 13.6816 54.3416)" fill="#2F455C"/>
                        <rect x="65.123" y="74.5274" width="1.95347" height="15.985" rx="0.976736" transform="rotate(128.8 65.123 74.5274)" fill="#2F455C"/>
                        <rect x="105.495" y="63.4577" width="1.95347" height="15.985" rx="0.976736" transform="rotate(128.8 105.495 63.4577)" fill="#2F455C"/>
                        <rect x="53.4023" y="43.2719" width="1.95347" height="15.985" rx="0.976736" transform="rotate(128.8 53.4023 43.2719)" fill="#2F455C"/>
                        <rect x="54.3281" y="42.6739" width="1.95347" height="43.3418" rx="0.976736" transform="rotate(75.4762 54.3281 42.6739)" fill="#2F455C"/>
                        <rect x="41.5576" y="33.359" width="1.95347" height="42.9294" rx="0.976736" transform="rotate(75.4762 41.5576 33.359)" fill="#2F455C"/>
                        <rect x="104.72" y="63.2088" width="1.95347" height="42.9294" rx="0.976736" transform="rotate(75.4762 104.72 63.2088)" fill="#2F455C"/>
                        <rect x="76.6895" y="58.4214" width="1.95347" height="26.0806" rx="0.976736" transform="rotate(75.4762 76.6895 58.4214)" fill="#2F455C"/>
                        <rect x="93.6182" y="54.0926" width="1.95347" height="8.79422" rx="0.976736" transform="rotate(75.4762 93.6182 54.0926)" fill="#2F455C"/>
                        <rect x="83.1377" y="56.6972" width="1.95347" height="4.49086" rx="0.976736" transform="rotate(75.4762 83.1377 56.6972)" fill="#2F455C"/>
                        <rect x="42.7949" y="75.3484" width="1.95347" height="43.1884" rx="0.976736" transform="rotate(106.679 42.7949 75.3484)" fill="#2F455C"/>
                        <rect x="53.1436" y="65.261" width="1.95347" height="42.517" rx="0.976736" transform="rotate(105.883 53.1436 65.261)" fill="#2F455C"/>
                        <rect x="104.424" y="45.3096" width="1.95347" height="42.434" rx="0.976736" transform="rotate(105.883 104.424 45.3096)" fill="#2F455C"/>
                        <rect x="94.1729" y="54.0075" width="1.95347" height="42.517" rx="0.976736" transform="rotate(105.883 94.1729 54.0075)" fill="#2F455C"/>
                        <rect x="52.2588" y="65.1623" width="1.95347" height="15.985" rx="0.976736" transform="rotate(48.0421 52.2588 65.1623)" fill="#2F455C"/>
                        <rect x="102.946" y="44.9378" width="1.95347" height="14.0948" rx="0.976736" transform="rotate(48.0421 102.946 44.9378)" fill="#2F455C"/>
                        <rect x="63.876" y="33.2556" width="1.95347" height="14.0948" rx="0.976736" transform="rotate(48.0421 63.876 33.2556)" fill="#2F455C"/>
                        <rect x="12.3721" y="111.331" width="1.95347" height="42.3433" rx="0.976736" transform="rotate(-75.4068 12.3721 111.331)" fill="#2F455C"/>
                        <rect width="1.95347" height="43.4264" rx="0.976736" transform="matrix(-0.251954 -0.967739 -0.967739 0.251954 93.959 111.059)" fill="#2F455C"/>
                        <rect x="51.4414" y="73.6273" width="1.95347" height="34.5113" rx="0.976736" fill="#2F455C"/>
                        <rect x="91.8135" y="71.6738" width="1.95347" height="39.7206" rx="0.976736" fill="#2F455C"/>
                        <ellipse cx="84.325" cy="89.2551" rx="2.27905" ry="3.25579" fill="#2F455C"/>
                        <ellipse cx="60.8835" cy="96.4178" rx="2.27905" ry="3.25579" fill="#2F455C"/>
                        <path d="M68.6973 103.581C70.4337 99.131 74.753 92.3155 78.139 100.65" stroke="#2F455C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        <circle cx="52.4181" cy="30.9765" r="3.23252" stroke="#2F455C" stroke-width="2"/>
                        <rect x="49" y="1" width="6" height="23" stroke="#2F455C" stroke-width="2"/>
                        <path d="M64.9053 25.6331L70.1145 15.8657" stroke="#2F455C" stroke-width="3" stroke-linecap="round"/>
                        <path d="M71.627 30.6509L76.8362 25.4416" stroke="#2F455C" stroke-width="3" stroke-linecap="round"/>
                        <path d="M39.9316 25.4417L34.7224 15.6743" stroke="#2F455C" stroke-width="3" stroke-linecap="round"/>
                        <path d="M33.21 30.4594L28.0007 25.2502" stroke="#2F455C" stroke-width="3" stroke-linecap="round"/>
                </svg>
            </div>
            <div className="flex justify-center text-title-lg">There aren’t any products in this list</div>
            <div className="flex justify-center text-title-lg">Find a product that you use and write a review!</div>
            <div className="grid grid-cols-2 ml-[10%] mr-[10%] space-x-2">
                <button className="bg-white text-darkblue shadow-md font-bold shadow-cyan-500/50  py-2 rounded-full">+ Add a product</button>
                <button className="bg-darkblue text-white py-2 rounded-full">Write a review</button>
            </div>

        </div>
    )

}
export default Favorite;