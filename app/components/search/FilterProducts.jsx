import React from 'react'
import { IoIosArrowDown, IoMdResize } from 'react-icons/io'
import { MdCheckBoxOutlineBlank, MdKeyboardDoubleArrowLeft } from 'react-icons/md'

const FilterProducts = () => {
  return (
    <>
        <section id='Filter-Products' className='py-6 mt-6  w-[300px]'>
            <fieldset className='border-r-1 border-[#B3B7B1] h-[600px] relative px-3'>
                <legend className='text-primary text-3xl absolute top-[50px] right-[-15px] bg-white'><MdKeyboardDoubleArrowLeft /></legend>
                {/* --------------Head Text--------------- */}
                <h2 className='text-primary text-[36px] text-center'>Filters</h2>
                <div className='w-full h-[1px] bg-[#B3B7B1] mt-2.5'></div> 

                {/* -----------------------------Size ------------------------- */}
                <section id='Size-Filter' className='mt-3'>
                    <div className='p-3 flex items-center justify-between cursor-pointer hover:bg-brand rounded-[8px] duration-300'>
                        <div className='flex items-center gap-3 text-[#44483D]'>
                            <IoMdResize className='text-xl'/>
                            <p className='font-medium'>Size</p>
                        </div>
                        <div>
                            <IoIosArrowDown className='text-subText'/>
                        </div>
                    </div>
                    {/* ---------------------Click Down------------------ */}
                </section>






            </fieldset>
        </section>
    </>
  )
}

export default FilterProducts