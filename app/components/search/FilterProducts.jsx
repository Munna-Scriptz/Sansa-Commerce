'use client'
import React, { useState } from 'react'
import { IoIosArrowDown, IoMdResize } from 'react-icons/io'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'

const FilterProducts = () => {
    // ---------Size----------
    const [showSize , SetShowSize] = useState(false)
    const [size , setSize] = useState('M')
    const sizes = ['M' , 'L' , 'X' , 'Xl' ]
  return (
    <>
        <section id='Filter-Products' className='py-6 mt-6 select-none w-[300px]'>
            <fieldset className='border-r-1 border-[#B3B7B1] h-[600px] relative px-3'>
                <legend className='text-primary text-3xl absolute top-[50px] right-[-15px] bg-white'><MdKeyboardDoubleArrowLeft /></legend>
                {/* --------------Head Text--------------- */}
                <h2 className='text-primary text-[36px] text-center'>Filters</h2>
                <div className='w-full h-[1px] bg-[#B3B7B1] mt-2.5'></div> 

                {/* -----------------------------Size ------------------------- */}
                <section id='Size-Filter' className={`mt-3`}>
                    <div onClick={()=>SetShowSize(!showSize)} className='p-3 mb-3 flex items-center justify-between cursor-pointer hover:bg-brand rounded-[8px] duration-300'>
                        <div className='flex items-center gap-3 text-[#44483D]'>
                            <IoMdResize className='text-xl'/>
                            <p className='font-medium'>Size</p>
                        </div>
                        <div>
                            <IoIosArrowDown className={`${showSize? 'rotate-0' : 'rotate-180'} text-subText duration-400`}/>
                        </div>
                    </div>
                    {/* ---------------------Click Down------------------ */}
                    <div className={`${showSize? 'h-0' : 'h-[50px]'} flex items-center justify-between overflow-hidden duration-300`}>
                        {
                            sizes.map((item , i)=>(
                                <button onClick={()=>setSize(item)} key={i} className={`${size === item? 'bg-primary text-white border-none scale-[1.1] duration-300' : 'bg-transparent text-second duration-300'} duration-300 px-4 py-1.5 border-2 border-[#75796C] rounded-[8px] cursor-pointer`}>{item}</button>
                            ))
                        }
                    </div>
                </section>






            </fieldset>
        </section>
    </>
  )
}

export default FilterProducts