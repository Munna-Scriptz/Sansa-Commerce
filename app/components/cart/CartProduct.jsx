import React from 'react'
import proImg from '../../../public/previewImg1.png'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { MdDeleteOutline } from 'react-icons/md'

const CartProduct = () => {
  return (
    <>
        <div className='w-full rounded-[24px] bg-[#FBFBFB] border-1 border-[#E1E4D5] flex items-center gap-3 relative'>
                {/* ----------------------Image */}
                <div>
                  <Image className='w-[140px]' src={proImg} alt='img'></Image>
                </div>
                {/* ----------------------Text Details */}
                <div>
                  <div className='flex items-center gap-8'>
                    <h2 className='text-second font-medium text-xl'>White shirt</h2>
                    <p className='text-second text-[20px]'>9.50 USD</p>
                  </div>
                  <p className='text-subText mt-2'>Lorem ipsum dolor sit amet.</p>
                  {/* ---------------Size, qty, color  */}
                  <div className='flex items-center gap-[40px]'>
                    {/* -------------Size  */}
                    <div className='mt-6 flex items-center gap-1'>
                      <p className='text-sm text-[#484A47]'>Size</p>
                      <div className='flex items-center gap-3 h-full w-full px-3'>
                        <select className='w-[61px] px-2 text-subText bg-[#E5E5E5] py-2 cursor-pointer rounded-[4px] font-medium outline-none h-full' name="Lang" id="Select">
                          <option value="L">L</option>
                          <option value="M">M</option>
                          <option value="S">S</option>
                          <option value="XL">XL</option>
                        </select>
                      </div>
                    </div>
                    {/* -------------Quantity  */}
                    <div className='flex items-center gap-4 mt-[20px]'>
                      <button className='w-[24px] h-[24px] bg-[#E5E5E5] rounded-full text-[14px] text-center text-second flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white duration-[.3s] select-none'><FaMinus /></button>
                      <p className='text-base text-Primary font-medium'>1</p>
                      <button className='w-[24px] h-[24px] bg-[#E5E5E5] rounded-full text-[14px] text-center text-second flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white duration-[.3s] select-none'><FaPlus /></button>
                    </div>
                  </div>
                </div>
                {/* -----------Delete  */}
                <div className='cursor-pointer flex items-center gap-2 absolute top-6 right-6'>
                  <h2 className='text-sm text-[#BA1A1A] underline'>Remove</h2>
                  <MdDeleteOutline className='text-[#BA1A1A] text-xl' />
                </div>
        </div>
    </>
  )
}

export default CartProduct