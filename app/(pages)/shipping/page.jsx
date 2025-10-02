import Summery from '@/app/components/cart/Summery'
import ShipDetails from '@/app/components/shipping/ShipDetails';
import ShippingHead from '@/app/components/shipping/ShippingHead';
import React from 'react'

const page = () => {
  return (
    <>
      <ShippingHead />
      {/* ----------------------Product And The Summery----------------------- */}
      <main className='mt-[48px]'>
        <div className="container">
          <div id="Product-Row" className='flex lg:flex-row flex-col items-start justify-between gap-5'>
            {/* ---------------------- Product ------------------ */}
            <ShipDetails />

            {/* ---------------------- Summery ------------------ */}
            <Summery path={'/payment'}/>

          </div>
        </div>
      </main>
    </>
  )
}

export default page