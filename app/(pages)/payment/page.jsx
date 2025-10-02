import Summery from '@/app/components/cart/Summery'
import Methods from '@/app/components/Payment/Methods'
import PayHead from '@/app/components/Payment/PayHead'
import React from 'react'

const page = () => {
  return (
    <>
        <PayHead />
        {/* ----------------------Product And The Summery----------------------- */}
        <main className='mt-[48px]'>
            <div className="container">
            <div id="Product-Row" className='flex lg:flex-row flex-col items-start justify-between gap-5'>
                {/* ---------------------- Product ------------------ */}
                <Methods />

                {/* ---------------------- Summery ------------------ */}
                <Summery path={'/payment'}/>

            </div>
            </div>
        </main>
    </>
  )
}

export default page