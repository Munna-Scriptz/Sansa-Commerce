import Link from 'next/link';
import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const SingleBrand = ({BrandHead , BrandP}) => {
  return (
    <section>
        <div className='border-[1px] border-[#E5E7EB] px-[24px] py-[22px] md:p-[28px] rounded-[16px] flex justify-between items-center w-full lg:w-[389px]'>
            <div>
                <h2 className='text-second text-base md:text-2xl font-medium mb-[3px]'>{BrandHead}</h2>
                <p className='text-Primary md:text-sm text-xs'>{BrandP}</p>
            </div>
            <div className='flex items-center gap-[6px] lg:gap-[12px]'>
                <span className='border-[#E5E7EB] border-[1px] h-[32px] w-[2px]'></span>
                <Link href={'/'} className='flex items-center gap-[8px] md:text-base text-sm text-Primary font-medium'>Shop Now <IoIosArrowRoundForward className='text-[26px]'/></Link>
            </div>
        </div>
    </section>
  )
}

export default SingleBrand