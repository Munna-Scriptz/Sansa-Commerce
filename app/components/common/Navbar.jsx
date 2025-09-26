'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import LoginOrRegis from './LoginOrRegis'

const Navbar = () => {
    const [value , setValue] = useState(false)
  return (
    <>
        <nav className='py-3 bg-brand'>
            <div className="container">
                <div id="Navbar-Row" className='flex items-center justify-between'>
                    {/* --------------------Logo  */}
                    <Link href={'/'}><Image src={logo} alt="Logo" /></Link>
                    {/* --------------------Nav Links  */}
                    <ul className='flex items-center gap-6 text-second font-normal text-base'>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Home</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/product'}>Products</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Blog</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>About Us</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Contact Us</Link></li>
                    </ul>
                    {/* --------------------Nav Icons  */}
                    <ul className='flex items-center text-[23px] text-second font-roboto'>
                        <li><Link className='w-[48px] h-[48px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' href={'/search'}><IoSearch /></Link></li>
                        <li><Link className='w-[48px] h-[48px] relative flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' href={'/cart'}>
                            <MdOutlineShoppingCart />
                            <div className='w-[16px] h-[16px] absolute top-1.5 right-1.5 bg-[#BA1A1A] rounded-full flex items-center justify-center text-white font-medium text-[11px] leading-[16px]'>
                                <p>3</p>
                            </div>
                        </Link></li>
                        <li><Link className='w-[48px] h-[48px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' href={'/'}><FaRegCircleUser /></Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* -----Account----- */}
      <section className={`w-full h-full backdrop-blur-md bg-[#00000063] z-50 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-[.3s] flex items-center justify-center gap-7 ${value? 'hidden opacity-0 duration-75' : 'block opacity-100'}`}>
        <LoginOrRegis HideByLink={()=>(setValue(!value))}/>
        <button onClick={()=>(setValue(!value))} className='HidePage'>
            <RxCross2 className='text-white text-[25px] ml-[10px]'/>
            <div className="text">Skip For Now</div>
        </button>
      </section>


    </>
  )
}

export default Navbar