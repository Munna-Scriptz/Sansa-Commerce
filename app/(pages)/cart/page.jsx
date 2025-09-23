import CartHead from '@/app/components/cart/CartHead'
import CartProduct from '@/app/components/cart/CartProduct'
import Summery from '@/app/components/cart/Summery'
import React from 'react'
import { LuTags } from "react-icons/lu";

const page = () => {
  return (
    <>
      <CartHead />
      {/* ----------------------Product And The Summery----------------------- */}
      <main className='mt-[48px]'>
        <div className="container">
          <div id="Product-Row" className='flex items-start justify-between gap-5'>
            {/* ---------------------- Product ------------------ */}
            <section className='w-[775px] rounded-[24px] bg-[#FBFBFB] p-6'>
              <CartProduct />

              {/* --------------Promo Code  */}
              <div className='w-full h-[1px] bg-[#E1E4D5] mt-[68px]'></div>
              <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px] mt-8'>
                <legend className='text-subText text-base ml-6 px-2'>Code</legend>
                <div className='flex items-center gap-3 h-full w-full px-3'>
                    <LuTags className='text-2xl text-subText' />
                    <input className='w-full text-subText font-medium outline-none h-full' type="user" id="user" placeholder='Enter promotion code to get discount'/>
                </div>
              </fieldset>
            </section>

            {/* ---------------------- Summery ------------------ */}
            <Summery />

          </div>
        </div>
      </main>
    </>
  )
}

export default page