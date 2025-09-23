'use client'
import React, { useState } from 'react'
import { FaDollarSign } from 'react-icons/fa6'
import { IoIosArrowDown, IoMdResize } from 'react-icons/io'
import { IoColorPaletteOutline, IoSettingsOutline } from 'react-icons/io5'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'

const FilterProducts = () => {
    // ---------Size----------
    const [showSize , SetShowSize] = useState(false)
    const [size , setSize] = useState('M')
    const sizes = ['M' , 'L' , 'X' , 'Xl' ]

    // ---------Color----------
    const [color , setColor] = useState({colActive: false, colContent: ''})
    const colors = ['F9A000' , '8AC732' , '0A65C0' , 'EA4335' , 'B2B2B2' , '000000' ]

    // ---------Price Range----------
    const [price , setPrice] = useState({priceActive: false , priceMin: '' , PriceMax: ''})

    // ---------Material ----------
    const [material , setMaterial] = useState({mateActive: false, mateContent: 'cotton'})
    const materials = ['cotton' , 'silk' , 'polyester' ,'silicon' , 'wool']

  return (
    <>
        <section id='Filter-Products' className='py-6 mt-6 select-none w-[300px]'>
            <fieldset className='border-r-1 border-[#B3B7B1] h-[600px] relative px-3'>
                <legend className='text-primary text-3xl absolute top-[50px] right-[-15px] bg-white'><MdKeyboardDoubleArrowLeft /></legend>
                {/* --------------Head Text--------------- */}
                <div>
                    <h2 className='text-primary text-[36px] text-center'>Filters</h2>
                    <div className='w-full h-[1px] bg-[#B3B7B1] mt-2.5'></div> 
                </div>

                {/* -----------------------------Size ------------------------- */}
                <section id='Size-Filter' className={`mt-6`}>
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

                {/* -----------------------------Color ------------------------- */}
                <section id='Color-Filter' className={`mt-2`}>
                    <div onClick={()=>setColor((prev)=>({...prev , colActive: !prev.colActive}))} className='p-3 mb-3 flex items-center justify-between cursor-pointer hover:bg-brand rounded-[8px] duration-300'>
                        <div className='flex items-center gap-3 text-[#44483D]'>
                            <IoColorPaletteOutline className='text-2xl'/>
                            <p className='font-medium'>Color</p>
                        </div>
                        <div>
                            <IoIosArrowDown className={`${color.colActive? 'rotate-0' : 'rotate-180'} text-subText duration-400`}/>
                        </div>
                    </div>
                    {/* ---------------------Click Down------------------ */}
                    <div className={`${color.colActive? 'h-0' : 'h-[40px]'} flex items-center justify-around overflow-hidden duration-300`}>
                        {
                            colors.map((item , i)=>(
                                <button key={i} onClick={()=>setColor((prev)=>({...prev , colContent: item}))} className={`${color.colContent === item? 'bg-[#B3B7B1] text-white border-none duration-300' : 'bg-transparent text-second duration-300'} duration-300 rounded-full p-[2px] flex items-center gap-2 cursor-pointer`}>
                                    <div className={`w-[24px] h-[24px] bg-[#${item}] rounded-full`}></div>
                                </button>
                            ))
                        }
                    </div>
                </section>

                {/* -----------------------------Price ------------------------- */}
                <section id='Price-Filter' className={`mt-2`}>
                    <div onClick={()=>setPrice((prev)=>({...prev , priceActive: !prev.priceActive}))} className='p-3 mb-3 flex items-center justify-between cursor-pointer hover:bg-brand rounded-[8px] duration-300'>
                        <div className='flex items-center gap-3 text-[#44483D]'>
                            <FaDollarSign className='text-2xl'/>
                            <p className='font-medium'>Price Range</p>
                        </div>
                        <div>
                            <IoIosArrowDown className={`${price.priceActive? 'rotate-0' : 'rotate-180'} text-subText duration-400`}/>
                        </div>
                    </div>
                    {/* ---------------------Click Down------------------ */}
                    <div className={`${price.priceActive? 'h-0' : 'h-[150px]'} px-3 justify-around overflow-hidden duration-300`}>
                        <div className='flex items-center gap-2'>
                            <p className='text-subText'>Min</p>
                            <input className='w-[80px] outline-none border-1 border-[#8D918C] rounded-[4px] pl-2 placeholder:text-subText py-0.5' placeholder='5' type="number" id='number'/>
                            <p className='text-[#0A1401]'>USD</p>
                        </div>

                        {/* --------Divider-------- */}
                        <div className='my-2'>
                            <div className='flex flex-col items-center w-3'>
                                <div className='bg-primary rounded-full w-3 h-3'></div>
                                <div className='bg-primary rounded-full w-[2px] h-[42px]'></div>
                                <div className='bg-primary rounded-full w-3 h-3'></div>
                            </div>
                        </div>
                        {/* --------Divider-------- */}

                         <div className='flex items-center gap-2'>
                            <p className='text-subText'>Max</p>
                            <input className='w-[80px] outline-none border-1 border-[#8D918C] rounded-[4px] pl-2 placeholder:text-subText py-0.5' placeholder='100' type="number" id='number'/>
                            <p className='text-[#0A1401]'>USD</p>
                        </div>
                    </div>
                </section>

                {/* -----------------------------Material ------------------------- */}
                <section id='Material-Filter' className={`mt-2`}>
                    <div onClick={()=>setMaterial((prev)=>({...prev , mateActive : !prev.mateActive}))} className='p-3 mb-3 flex items-center justify-between cursor-pointer hover:bg-brand rounded-[8px] duration-300'>
                        <div className='flex items-center gap-3 text-[#44483D]'>
                            <IoSettingsOutline className='text-xl'/>
                            <p className='font-medium'>Materials</p>
                        </div>
                        <div>
                            <IoIosArrowDown className={`${material.mateActive? 'rotate-0' : 'rotate-180'} text-subText duration-400`}/>
                        </div>
                    </div>
                    {/* ---------------------Click Down------------------ */}
                    <div className={`${material.mateActive? 'h-0' : 'h-[90px]'} flex flex-wrap items-center justify-center gap-2 overflow-hidden duration-300`}>
                        {
                            materials.map((item , i)=>(
                                <button onClick={()=>setMaterial((prev)=>({...prev , mateContent: item}))} key={i} className={`${material.mateContent === item? 'bg-primary text-white border-none scale-[1.08] duration-300' : 'bg-transparent text-subText duration-300'} duration-300 px-4 py-1.5 border-2 border-[#75796C] rounded-[8px] cursor-pointer`}>{item}</button>
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