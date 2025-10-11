'use client'
import React, { useState , startTransition, useEffect } from 'react'
import Logo from '../../../public/logo.svg'
import { FaBarsStaggered } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
import { useProgress } from "react-transition-progress";
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoSearch } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { CartReducer } from '@/app/redux/cartSlice';
import SearchFilter from './SearchFilter';

const ResNavbar = () => {
    const [Value , SetValue] = useState(true)
    const startProgress = useProgress();
        const handleDelay = async ()=>{
            startTransition(async () => {
                startProgress();
                await new Promise((resolve) => setTimeout(resolve, 2000)); 
            });
    }
    // ------------------------- Initialized cart products 
    const dispatch = useDispatch()
    useEffect(() => {
        const data = localStorage.getItem("productId")
        if (data) {
          dispatch(CartReducer(JSON.parse(data)))
        }
    }, [dispatch])

    //   ------------------------ Handle search 
    const [search , setSearch] = useState(false)
  return (
    <>
    <nav className='lg:hidden block z-50 py-[16px]'>
        <div className="container">
            <div id="NavBar_Row" className='flex items-center justify-between' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='w-[70px]'>
                    <Link href={'/'}><Image src={Logo} alt="Logo" /></Link>
                </div>
                {/* -----------Search--------  */}
                <div className='flex items-center gap-4'>
                    <ul className='flex items-center text-[23px] text-second font-roboto'>
                            <li><button onClick={()=>setSearch(!search)} className='w-[40px] cursor-pointer h-[40px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300'><IoSearch /></button></li>
                            <li onClick={()=>handleDelay()}><Link className='w-[40px] h-[40px] relative flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' href={'/cart'}>
                                <MdOutlineShoppingCart />
                                <div className='w-[16px] h-[16px] absolute top-1.5 right-1.5 bg-[#BA1A1A] rounded-full flex items-center justify-center text-white font-medium text-[11px] leading-[16px]'>
                                    <p>3</p>
                                </div>
                            </Link></li>
                        </ul>
                    {/* -----------Nav button--------  */}
                    <div className='flex items-center gap-5 text-2xl text-black'>
                        <FaBarsStaggered onClick={()=>SetValue(!Value)} className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
        {/* -----Search----- */}
            <SearchFilter searchHook={search} searchSetHook={()=>setSearch(!search)} />
        
        {/* ------Button Menu------ */}
        <div className={`absolute top-0 left-0 w-full h-screen duration-[.3s]  ${Value? 'z-[-10]' : 'z-[40]'}`}>
            <div onClick={()=>SetValue(!Value)} className={`w-full h-screen duration-[.3s] absolute top-0 left-0 bg-[#00000070] ${Value? 'hidden' : 'visible'}`}></div>
            <div className={`h-screen w-[60%] absolute top-0 bg-white p-5 duration-[.8s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50 ${Value? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-0px]'}`}>
                <div className='flex items-center justify-between absolute top-0 right-0 w-full px-4 mt-[25px]'>
                    <Link href={'/'} className='w-[100px]'><Image src={Logo} alt="Logo" /></Link>
                    <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                        <span className={`w-[20px] h-[2px] bg-second absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                        <span className={`w-[20px] h-[2px] bg-second absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                        <span className={`w-[20px] h-[2px] bg-second absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                    </button>
                </div>

                <ul className='flex flex-col items-start gap-5 text-xl mt-25'>
                    <li onClick={()=>handleDelay()} className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' href={'/'}>Home</Link></li>
                    <li onClick={()=>handleDelay()} className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' href={'/product'}>Shop</Link></li>
                    <li onClick={()=>handleDelay()} className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' href={'/search?category=https://dummyjson.com/products/category/mens-watches'}>Search</Link></li>
                    <li onClick={()=>handleDelay()} className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' href={'/cart'}>Cart</Link></li>
                    <li onClick={()=>handleDelay()} className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' href={'/blog'}>Blog</Link></li>
                    <li onClick={()=>handleDelay()} className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' href={'/about'}>About</Link></li>
                    <li onClick={()=>handleDelay()} className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-second font-josefin flex items-center gap-2' href={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default ResNavbar