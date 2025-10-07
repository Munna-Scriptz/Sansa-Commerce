import React from 'react'
import Image from 'next/image'
import { FaPlus } from 'react-icons/fa6'
import { MdAddShoppingCart } from 'react-icons/md'
import proImg from '../../../public/previewImg1.png'
const SingleSeller = ({img , proName, proDetails, proPrice , cartAdd}) => {
  return (
    <>
        <div className='md:w-[338px] w-full border-1 border-gray-300 rounded-[8px] pb-6 relative'>
            <Image className='rounded-t-[8px]' width={338} height={338} src={img || proImg} alt='Image'></Image>
            <h2 className='text-second md:text-[24px] px-6 text-xl mt-6 mb-2 overflow-hidden text-ellipsis whitespace-nowrap w-[300px]'>{proName}</h2>
            <p className='text-subText md:text-base px-6 text-sm line-clamp-2'>{proDetails}</p>
            {/* ----Price  */}
            <div className='flex items-center justify-between mt-4 px-6'>
                <h2 className='text-second font-medium text-xl font-inter'>${proPrice}</h2>
                <div className='w-[40px] h-[40px] bg-primary text-white rounded-full flex items-center hover:bg-second duration-300 justify-center cursor-pointer text-lg'>
                    <FaPlus />
                </div>
            </div>
            {/* -------Add To Cart  */}
            <div onClick={cartAdd} className='addToCart absolute md:top-[16px] top-[20px] md:right-[16px] right-[20px] w-[40px] h-[40px] flex items-center justify-center text-second text-2xl cursor-pointer bg-[#f1fddf85] hover:bg-subText hover:text-white rounded-full duration-300'>
                <MdAddShoppingCart />
                <span className="tooltip">Add To Cart</span>
            </div>
        </div>
    </>
  )
}

export default SingleSeller