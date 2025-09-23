import CartHead from '@/app/components/cart/CartHead'
import CartProduct from '@/app/components/cart/CartProduct'
import Summery from '@/app/components/cart/Summery'
import React from 'react'

const page = () => {
  return (
    <>
      <CartHead />
      {/* ----------------------Product And The Summery----------------------- */}
      <main className='mt-[48px]'>
        <div className="container">
          <div id="Product-Row" className='flex items-start justify-between gap-5'>
            {/* ---------------------- Product ------------------ */}
            <section className='w-[775px]'>
              <CartProduct />
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