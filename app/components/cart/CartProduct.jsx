import React from 'react'
import proImg from '../../../public/previewImg1.png'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { MdDeleteOutline } from 'react-icons/md'

const CartProduct = ({image , proName , proDetails , proPrice  , handleDlt}) => {
  return (
    <>
        <div className='w-full rounded-[24px] bg-[#FBFBFB] border-1 border-[#E1E4D5] flex items-center gap-3 relative lg:py-4 py-2.5'>
                {/* ----------------------Image */}
                <div>
                  <Image width={110} height={60} src={image} alt='img'></Image>
                </div>
                {/* ----------------------Text Details */}
                <div>
                  <div className='flex lg:flex-row flex-col lg:items-center lg:gap-8 gap-2'>
                    <h2 className='text-second font-medium md:text-xl text-base w-[250px] overflow-hidden text-ellipsis whitespace-nowrap'>{proName}</h2>
                    <p className='text-second md:text-[20px] text-sm'>{proPrice} USD</p>
                  </div>
                  <p className='text-subText md:text-base text-xs mt-2 w-[300px] overflow-hidden text-ellipsis whitespace-nowrap'>{proDetails}</p>
                  {/* ---------------Size, qty, color  */}
                  <div className='flex lg:flex-row flex-col lg:items-center lg:gap-[40px] gap-2'>
                    {/* -------------Size  */}
                    <div className='md:mt-6 mt-2 flex items-center gap-1'>
                      <p className='md:text-sm text-xs text-[#484A47]'>Size</p>
                      <div className='flex items-center gap-3 h-full w-full px-3'>
                        <select className='w-[61px] px-2 text-subText bg-[#E5E5E5] md:py-2 py-[2px] cursor-pointer rounded-[4px] font-medium outline-none h-full' name="Lang" id="Select">
                          <option value="L">L</option>
                          <option value="M">M</option>
                          <option value="S">S</option>
                          <option value="XL">XL</option>
                        </select>
                      </div>
                    </div>
                    {/* -------------Quantity  */}
                    <div className='flex items-center md:gap-4 gap-3 md:mt-[20px] mt-2'>
                      <button className='md:w-[24px] w-[20px] md:h-[24px] h-[20px] bg-[#E5E5E5] rounded-full md:text-[14px] text-xs text-center text-second flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white duration-[.3s] select-none'><FaMinus /></button>
                      <p className='text-base text-Primary font-medium'>1</p>
                      <button className='md:w-[24px] w-[20px] md:h-[24px] h-[20px] bg-[#E5E5E5] rounded-full md:text-[14px] text-xs text-center text-second flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white duration-[.3s] select-none'><FaPlus /></button>
                    </div>
                  </div>
                </div>
                {/* -----------Delete  */}
                <div onClick={handleDlt} className='cursor-pointer flex items-center md:gap-2 gap-1 absolute md:top-6 md:right-6 md:bottom-auto bottom-3 right-3.5'>
                  <h2 className='md:text-sm text-xs text-[#BA1A1A] underline'>Remove</h2>
                  <MdDeleteOutline className='text-[#BA1A1A] md:text-xl text-base' />
                </div>
        </div>
    </>
  )
}

export default CartProduct