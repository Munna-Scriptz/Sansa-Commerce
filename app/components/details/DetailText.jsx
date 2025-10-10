import React from 'react'
import { GoShareAndroid } from "react-icons/go";

const DetailText = () => {
  return (
    <>
        <div className="w-[440px] flex flex-col flex-1">
                {/* -----------------------Title------------------- */}
                <h2 className="text-[32px] font-medium text-[#101110]">
                    Shirt mockup concept with plain clothing
                </h2>
                <p className="text-[#484A47] mt-[18px]">
                    This shirt is made in Thailand in a company called ANM
                </p>

                {/* ---------------------Rating-------------------- */}
                <div className="flex items-center gap-2 mt-3">
                    <div className="flex text-yellow-400 text-2xl">
                    {Array(5).fill(0).map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                    </div>
                    <p className="text-[#484A47] text-sm">(5.0)</p>
                    <a href="#" className="text-primary text-sm underline ml-1">560 reviews</a>
                </div>

                {/* ---------------------- Price--------------------- */}
                <p className="text-[36px] text-[#101110] mt-4">9.50 USD</p>

                {/* ---------------------------Options-------------------- */}
                <p className="text-[#484A47] mb-3 mt-[28px]">Product options:</p>
                <div className="border border-[#E1E4D5] rounded-lg p-4 space-y-4">
                    {/* ------------------Color */}
                    <div className="flex items-center gap-3">
                    <span className="text-[#484A47] w-20">Color</span>
                    <div className="flex gap-2">
                        <button className="w-6 h-6 rounded-full border border-[#E1E4D5] bg-white"></button>
                        <button className="w-6 h-6 rounded-full border border-[#E1E4D5] bg-black"></button>
                    </div>
                    </div>

                    {/* ----------------Size */}
                    <div className="flex items-center gap-3">
                    <span className="text-[#484A47] w-20">Size</span>
                    <select className="border border-[#E1E4D5] rounded px-3 py-1">
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                    </div>

                    {/* ----------------Quantity */}
                    <div className="flex items-center gap-3">
                    <span className="text-[#484A47] w-20">Qty</span>
                    <div className="flex items-center border border-[#E1E4D5] rounded">
                        <button className="px-3 py-1">-</button>
                        <span className="px-4">1</span>
                        <button className="px-3 py-1">+</button>
                    </div>
                    </div>
                </div>

                {/* ----------------------Buttons */}
                <div className="flex items-center gap-4 mt-10">
                    <button className="bg-primary text-white w-[282px] cursor-pointer duration-300 py-3 rounded-full font-semibold hover:opacity-90">
                    Add to cart
                    </button>
                    <button className="border border-[#6A6C68] w-[142px] py-3 rounded-full cursor-pointer hover:bg-[#101110] hover:text-white text-primary duration-300">
                    Add to favorite
                    </button>
                </div>

                {/* ------------------Product Id + Share */}
                <div className="flex items-center gap-6 mt-6">
                    <p className="text-[#484A47]">Product id:1230-rnhj</p>
                    <button className="text-second border-1 border-[#6A6C68] p-2 rounded-full flex items-center justify-center text-2xl cursor-pointer">
                        <GoShareAndroid />
                    </button>
                </div>
                </div>
    </>
  )
}

export default DetailText