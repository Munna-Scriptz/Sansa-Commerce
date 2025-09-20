import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.svg'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
        <nav className='py-3 bg-brand'>
            <div className="container">
                <div id="Navbar-Row" className='flex items-center justify-between'>
                    {/* --------------------Logo  */}
                    <Link href={'/'}> <Image src={logo} alt="Logo" /></Link>
                    {/* --------------------Nav Links  */}
                    <ul className='flex items-center gap-6 text-second font-medium text-base font-roboto'>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Home</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Products</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Blog</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>About Us</Link></li>
                        <li><Link className='hover:text-[#8AC732] duration-300' href={'/'}>Contact Us</Link></li>
                    </ul>
                    {/* --------------------Nav Icons  */}
                    <ul className='flex items-center text-[23px] text-second font-roboto'>
                        <li><Link className='w-[48px] h-[48px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' href={'/'}><IoSearch /></Link></li>
                        <li><Link className='w-[48px] h-[48px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' href={'/'}><MdOutlineShoppingCart /></Link></li>
                        <li><Link className='w-[48px] h-[48px] flex items-center justify-center hover:bg-primary hover:text-white rounded-[4px] duration-300' href={'/'}><FaRegCircleUser /></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar