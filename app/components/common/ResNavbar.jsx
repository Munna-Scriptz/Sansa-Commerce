'use client'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/logo.svg'
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoSearchOutline } from 'react-icons/io5';
import axios from 'axios';
import searchEmpty from '../../../public/location.jpg'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ResNavbar = () => {
    const [Value , SetValue] = useState(true)
    const [search , setSearch] = useState('')

    // ---------------Api--------------
    const [product , setProduct] = useState([])
    const [filProduct , setFilProduct] = useState([])
    // ------Axios 
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
        .then((res)=>(setProduct(res.data.products)))
        .catch((err)=>(console.log(err)))
    }, [])

    // --------------- Handle Search 
    const handleSearch = ()=>{
       const filteredPro = product.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
       setFilProduct(filteredPro)
    }

    // ------------ Navigate to product 
    // ---------------------Redirect To Details 
    const router = useRouter()

    const handleNav = (idNo)=>{
      router.push(`/details/${idNo}`)
      setSearch('')
    }
  return (
    <>
    <nav className='lg:hidden block z-50 py-[16px]'>
        <div className="container">
            <div id="NavBar_Row" className='flex items-center justify-between' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='w-[70px]'>
                    <Link href={'/'}><img src={Logo} alt="Logo" /></Link>
                </div>
                {/* -----------Search--------  */}
                <div className='w-[160px] h-[38px] relative'>
                    <input onChange={(e)=>{setSearch(e.target.value), handleSearch()}} type="text" className='border-1 border-borderCol h-full outline-none rounded-[4px] pl-4 w-full' placeholder='Search...' value={search}/>
                    <div className='text-subText text-lg font-bold cursor-pointer absolute top-[10px] right-2.5'>
                        <IoSearchOutline />
                    </div>
                </div>
                {/* -----------Nav button--------  */}
                <div className='flex items-center gap-5 text-2xl text-black'>
                    <FaBarsStaggered onClick={()=>SetValue(!Value)} className='cursor-pointer'/>
                </div>
            </div>
        </div>
        {/* ------Button Menu------ */}
        <div className={`absolute top-0 left-0 w-full h-screen duration-[.3s]  ${Value? 'z-[-10]' : 'z-[40]'}`}>
            <div onClick={()=>SetValue(!Value)} className={`w-full h-screen duration-[.3s] absolute top-0 left-0 bg-[#00000070] ${Value? 'hidden' : 'visible'}`}></div>
            <div className={`h-screen w-[60%] absolute top-0 bg-white p-5 duration-[.8s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden z-50 ${Value? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-0px]'}`}>
                <div className='flex items-center justify-between absolute top-0 right-0 w-full px-4 mt-[25px]'>
                    <Link href={'/'} className='w-[100px]'><img src={Logo} alt="Logo" /></Link>
                    <button className='relative w-[32px] h-[28px] cursor-pointer right-0' onClick={()=>SetValue(!Value)}>
                        <span className={`w-[20px] h-[2px] bg-BlueText absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[5px]' : 'rotate-[45deg] top-[7px]'}`} ></span>
                        <span className={`w-[20px] h-[2px] bg-BlueText absolute top-[10px] right-[10px] duration-[.3s] ${Value? 'opacity-100' : 'opacity-0'}`}></span>
                        <span className={`w-[20px] h-[2px] bg-BlueText absolute right-[10px] duration-[.3s] ${Value? 'rotate-[0deg] top-[15px]' : 'rotate-[-45deg] top-[7px]' }`}></span>
                    </button>
                </div>

                <ul className='flex flex-col items-start gap-5 text-xl mt-25'>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' href={'/'}>Home</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' href={'/shop'}>Shop</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' href={'/details/2'}>products</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' href={'/blog'}>Blog</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' href={'/about'}>About</Link></li>
                    <li className='border-b-1 border-gray-400 w-full pb-3'><Link onClick={()=>SetValue(!Value)} className='text-brand font-josefin flex items-center gap-2' href={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
        </div>
        {/* ---------Search items--------- */}
                    <div className={`${search == ''? 'hidden' : ''} bg-[#F6F5FF] absolute top-30 right-[0px] w-full h-auto max-h-[600px] px-[12px] py-[32px] z-10 rounded-md overflow-y-scroll shadow-[0_3px_10px_rgb(0,0,0,0.2)]`}>
                      {/* ------------SearchError---------- */}
                        <div className={`${filProduct == 0? '' : 'hidden'} flex flex-col gap-6 items-center justify-center`}>
                          <img className='w-[350px]' src={searchEmpty} alt="Sorry no Product Founded :(" />
                          <p className='text-xl text-BlueText font-josefin'>Sorry No products founded :(</p>
                        </div>
                        {
                            filProduct.map((item , i)=>(
                                <div onClick={()=>{handleNav(item.id), setSearch('')}} key={i} className='flex items-center gap-5 border-b-1 border-subText py-3 duration-[.2s] hover:bg-[#cacccf] cursor-pointer'>
                                    <img className='w-[60px]' src={item.thumbnail} alt="ProductImg" />
                                    <div>
                                    <h2 className='text-BlueText font-medium font-josefin text-base'>{item.title}</h2>
                                    <p className='text-subText font-normal font-josefin text-sm mt-1 mb-1'>{item.category}</p>
                                    <p className='text-brand font-medium font-josefin text-[14px]'>${item.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
    </nav>
    </>
  )
}

export default ResNavbar