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
            <div className='mt-4'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-second text-[28px] leading-[36px]'>All Product Categories</h2>
                    <fieldset className='w-[370px] h-[64px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
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
                <div className="w-full h-[56px] mt-[31px] rounded-[8px] border border-borderCol p-1.5 flex items-center justify-between">
                    {
                        categories.map((item , i)=>(
                            <div key={i} onClick={()=>setTab((prev)=>({...prev , tabContent: item.title}))} className={`${tab.tabContent === item.title? 'bg-primary text-white' : 'bg-transparent text-second'} duration-300 py-[10px] px-[24px] rounded-[8px] cursor-pointer`}>
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