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