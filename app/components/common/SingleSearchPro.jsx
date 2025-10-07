import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { MdAddShoppingCart } from 'react-icons/md'

const SingleSearchPro = ({img , proName, proDetails, proPrice , cartAdd}) => {
  return (
    <>
        <div className='md:w-[308px] lg:w-[310px] border-1 border-gray-300 p-6 rounded-[8px] relative'>
            <Image width={338} height={338} src={img || proImg} alt='Image'></Image>
            <h2 className='text-second text-[24px] mt-6 mb-2 overflow-hidden text-ellipsis whitespace-nowrap w-[300px]'>{proName}</h2>
            <p className='text-subText text-sm line-clamp-2'>{proDetails}</p>
            {/* ----Price  */}
            <div className='flex items-center justify-between mt-4'>
                <h2 className='text-second font-medium text-xl font-inter'>{proPrice} USD</h2>
                <div className='w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center hover:bg-second duration-300 justify-center cursor-pointer text-lg'>
                    <FaPlus />
                </div>
            </div>
            {/* -------Add To Cart  */}
            <div onClick={cartAdd} className='addToCart absolute top-[16px] right-[16px] w-[40px] h-[40px] flex items-center justify-center text-second text-2xl cursor-pointer hover:bg-subText hover:text-white rounded-full duration-300'>
                <MdAddShoppingCart />
                <span className="tooltip">Add To Cart</span>
            </div>
        </div>
    </>
  )
}

export default SingleSearchPro