'use client'
import React from 'react'
import img from '../../../public/completeImg.png'
import Clock from '../../../public/clockDec.png'
import checklist from '../../../public/checklistDec.png'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <>
        {/* ----------------- breadcrumb  */}
        <section id='Cart-Header'>
            {/* -----------------Bread Crumb------------ */}
            <div className='container mt-[36px]'>
              <div className='font-roboto leading-[24px] font-medium md:text-lg text-sm text-[#B3B7B1] flex items-center gap-1'>
                <Link href={'/cart'}>Shopping bag /</Link>
                <Link href={'/shipping'}>Shipping /</Link>
                <Link href={'/payment'}>Payment /</Link>
                <p className='text-second'>Complete</p>
              </div>
            </div>
            <h2 className='container text-second mt-6 text-[28px] leading-[36px]'>Order Complete</h2>
        </section>
        <section id='Complete' className='relative mt-[80px]'>
            <div className="container">
                <div id="Complete-Row" className='lg:w-[625px] w-full mx-auto flex flex-col items-center justify-center'>
                    <Image src={img} alt="Checkbox" />
                    <h2 className='text-second font-bold lg:text-[36px] text-2xl mb-6 mt-7'>Your Order Is Completed! </h2>
                    <p className='text-subText leading-[30px] text-center mb-10'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.</p>
                    <Link className='bg-primary text-white inline-block py-[12px] px-[32px] rounded-[4px] font-josefin hover:bg-subText duration-300' href={'/search'}>Back to Shop</Link>
                </div>
            </div>
            {/* ----------------------------Decs  */}
            <Image className='absolute lg:block hidden top-0 left-[200px]' src={Clock} alt="Decoration Image" />
            <Image className='absolute lg:block hidden bottom-[150px] right-[200px]' src={checklist} alt="Decoration Image" />
        </section>
    </>
  )
}

export default page