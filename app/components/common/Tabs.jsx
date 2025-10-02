'use client'
import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { FiImage } from "react-icons/fi";

const Tabs = () => {
    const [tab , setTab] = useState(
        {
            searchContent: '',
            tabContent: 'clothes',
        }
    )
    const categories = [
        {
            title: 'clothes',
        },
        {
            title: 'Shoes',
        },
        {
            title: 'hats',
        },
        {
            title: 'skincare',
        },
        {
            title: 'electronics',
        },
        {
            title: 'arts',
        },
        {
            title: 'books',
        },
    ]
  return (
    <>
        <div className="container">
            <div className='mt-5'>
                <div className='flex md:flex-row flex-col items-center justify-between'>
                    <h2 className='text-second md:text-[28px] text-lg md:leading-[36px] md:mb-0 mb-4'>All Product Categories</h2>
                    <fieldset className='md:w-[370px] w-full h-[64px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-base ml-6 px-2'>Search</legend>
                        <div className='flex items-center justify-between h-full w-full px-3'>
                            <div className='flex items-center h-full w-full'>
                                <IoSearch className='text-2xl text-subText' />
                                <input className='h-full pl-3 text-second w-full outline-none' placeholder='Search All Assets' type="search" id="search" />
                            </div>
                            <div className='text-2xl cursor-pointer text-subText'>
                                <FiImage />
                            </div>
                        </div>
                    </fieldset>
                </div>
                {/* ------------------------------------Tabs------------------------------------ */}
                <div className="w-full md:h-[56px] h-auto mt-[31px] gap-y-3 rounded-[8px] border border-borderCol md:p-1.5 p-1 flex flex-wrap items-center justify-between">
                    {
                        categories.map((item , i)=>(
                            <div key={i} onClick={()=>setTab((prev)=>({...prev , tabContent: item.title}))} className={`${tab.tabContent === item.title? 'bg-primary text-white' : 'bg-transparent text-second'} duration-300 md:py-[10px] py-[8px] md:px-[24px] px-[16px] md:text-base text-sm rounded-[8px] cursor-pointer`}>
                                {item.title}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Tabs