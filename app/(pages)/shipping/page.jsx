import CartHead from '@/app/components/cart/CartHead'
import Summery from '@/app/components/cart/Summery'
import ShippingHead from '@/app/components/shipping/ShippingHead';
import React from 'react'

const page = () => {
  return (
    <>
      <ShippingHead />
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