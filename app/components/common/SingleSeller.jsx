import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa6'
import { MdAddShoppingCart } from 'react-icons/md'

const SingleSeller = ({img , proName, proDetails, proPrice}) => {
  return (
    <>
        <div className='md:w-[338px] w-full border-1 border-gray-300 p-6 rounded-[8px] relative'>
            <Image src={img} alt='Image'></Image>
            <h2 className='text-second md:text-[26px] text-2xl mt-6 mb-2'>{proName}</h2>
            <p className='text-subText md:text-base text-sm'>{proDetails}</p>
            {/* ----Price  */}
            <div className='flex items-center justify-between mt-4'>
                <h2 className='text-second font-medium text-xl font-inter'>{proPrice}</h2>
                <div className='w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center hover:bg-second duration-300 justify-center cursor-pointer text-lg'>
                    <FaPlus />
                </div>
            </div>
            {/* -------Add To Cart  */}
            <div className='addToCart absolute md:top-[16px] top-[20px] md:right-[16px] right-[20px] w-[40px] h-[40px] flex items-center justify-center text-second text-2xl cursor-pointer hover:bg-subText hover:text-white rounded-full duration-300'>
                <MdAddShoppingCart />
                <span className="tooltip">Add To Cart</span>
            </div>
        </div>
    </>
  )
}

export default SingleSeller