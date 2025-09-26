import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa6'
import { MdAddShoppingCart } from 'react-icons/md'

const SingleDiscount = ({img , proName , ProDetails , proPrice}) => {
  return (
    <>
        <div className='w-[338px] border-1 border-gray-300 p-6 rounded-[8px] relative'>
            <Image src={img} alt='Image'></Image>
            <h2 className='text-second text-[26px] mt-6 mb-2'>{proName}</h2>
            <p className='text-subText text-base'>{ProDetails}</p>
            {/* ----Price  */}
            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center gap-3'>
                    <h2 className='text-second font-medium text-xl font-inter'>{proPrice}</h2>
                    <p className='text-[#8D918C] line-through font-medium text-sm font-inter'>8.00 USD</p>
                </div>
                <div className='w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center hover:bg-second duration-300 justify-center cursor-pointer text-lg'>
                    <FaPlus />
                </div>
            </div>
            {/* -------Add To Cart  */}
            <div className='addToCart absolute top-[16px] right-[16px] w-[40px] h-[40px] flex items-center justify-center text-second text-2xl cursor-pointer hover:bg-subText hover:text-white rounded-full duration-300'>
                <MdAddShoppingCart />
                <span className="tooltip">Add To Cart</span>
            </div>
            {/* -------Discount Percentage  */}
            <div className='absolute top-[16px] left-[12px] px-[22px] py-[10px] flex items-center justify-center text-white bg-primary text-base rounded-full'>
                <p>20% Off</p>
            </div>
        </div>
    </>
  )
}

export default SingleDiscount