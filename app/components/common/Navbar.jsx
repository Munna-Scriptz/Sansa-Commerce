'use client'
import Link from 'next/link'
import React, { useState , startTransition, useEffect  } from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import LoginOrRegis from './LoginOrRegis'
import { useProgress } from "react-transition-progress";
import { useDispatch, useSelector } from 'react-redux'
import { CartReducer } from '@/app/redux/cartSlice'
import { FiImage } from 'react-icons/fi'
const Navbar = () => {
    const startProgress = useProgress();
    const handleDelay = async ()=>{
        startTransition(async () => {
            startProgress();
            await new Promise((resolve) => setTimeout(resolve, 2000)); 
        });
    }
    const [value , setValue] = useState(true)

    // ------------------ Initialized cart products 
    const dispatch = useDispatch()
    const productNum = useSelector((state)=>state.MyRedux.value)

    useEffect(() => {
    const data = localStorage.getItem("productId")
    if (data) {
      dispatch(CartReducer(JSON.parse(data)))
    }
  }, [dispatch])
  

    //   ------------------------ Handle search 
    const [search , setSearch] = useState(false)
    const handleSearch = ()=>{
        console.log('hellow orld')
    }
  return (
    <section>
        <nav className='py-3 bg-brand lg:block hidden'>
            <div className="container">
                <div id="Navbar-Row" className='flex items-center justify-between'>
                    {/* --------------------Logo  */}
                    <Link href={'/'} onClick={()=>handleDelay()}><Image src={logo} alt="Logo" /></Link>
                    {/* --------------------Nav Links  */}
                    <ul className='flex items-center gap-6 text-second font-normal text-base' onClick={()=>handleDelay()}>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Home</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/product'}>Products</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Blog</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/about'}>About Us</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/contact'}>Contact Us</Link></li>
                    </ul>
                    {/* --------------------Nav Icons  */}
                    <ul className='flex items-center text-[23px] text-second font-roboto'>
                        <li><button onClick={()=>setSearch(!search)} className='w-[48px] h-[48px] cursor-pointer flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300'><IoSearch /></button></li>
                        <li onClick={()=>handleDelay()}><Link className='w-[48px] h-[48px] relative flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' href={'/cart'}>
                            <MdOutlineShoppingCart />
                            <div className='w-[16px] h-[16px] absolute top-1.5 right-1.5 bg-[#BA1A1A] rounded-full flex items-center justify-center text-white font-medium text-[11px] leading-[16px]'>
                                <p>{productNum?.length}</p>
                            </div>
                        </Link></li>
                        <li onClick={()=>handleDelay()}><button onClick={()=>{setValue(!value)}} className='w-[48px] h-[48px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] cursor-pointer duration-300'><FaRegCircleUser /></button></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* -----Search----- */}
        <div className={`${search? 'top-20' : '-top-30 '} absolute duration-500 right-10 bg-brand px-[32px] pt-[20px] pb-[30px] z-10 rounded-[12px]`}>
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
        {/* -----Account----- */}
      <section className={`w-full h-full backdrop-blur-md bg-[#00000063] z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-[.3s] flex items-center justify-center gap-7 ${value? 'hidden opacity-0 duration-75' : 'block opacity-100'}`}>
        <LoginOrRegis HideByLink={()=>(setValue(!value))}/>
        <button onClick={()=>(setValue(!value))} className='HidePage'>
            <RxCross2 className='text-white text-[25px] ml-[10px]'/>
            <div className="text">Skip For Now</div>
        </button>
      </section>


    </section>
  )
}

export default Navbar