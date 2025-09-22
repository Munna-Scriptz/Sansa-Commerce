import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa6'
import { MdAddShoppingCart } from 'react-icons/md'

const SingleSeller = ({img}) => {
  return (
    <>
        <div className='w-[338px] border-1 border-gray-300 p-6 rounded-[8px] relative'>
            <Image src={img} alt='Image'></Image>
            <h2 className='text-second text-[26px] mt-6 mb-2'>Warning t-shirt</h2>
            <p className='text-subText text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, enim?</p>
            {/* ----Price  */}
            <div className='flex items-center justify-between mt-4'>
                <h2 className='text-second font-medium text-xl font-inter'>8.00 USD</h2>
                <div className='w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center hover:bg-second duration-300 justify-center cursor-pointer text-lg'>
                    <FaPlus />
                </div>
            </div>
            {/* -------Add To Cart  */}
            <div className='absolute top-[16px] right-[16px] w-[40px] h-[40px] flex items-center justify-center text-second text-2xl cursor-pointer hover:bg-subText hover:text-white rounded-full duration-300'>
                <MdAddShoppingCart />
            </div>
        </div>
    </>
  )
}

export default SingleSeller