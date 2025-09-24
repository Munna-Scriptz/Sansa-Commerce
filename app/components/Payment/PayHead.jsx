import Link from 'next/link'
import React from 'react'

const PayHead = () => {
  return (
    <>
        <main id='Shopping-Bag'>
            <section id='Cart-Header'>
              {/* -----------------Bread Crumb------------ */}
                <div className='container mt-[36px]'>
                  <div className='font-roboto leading-[24px] font-medium text-lg text-[#B3B7B1] flex items-center gap-1'>
                    <Link href={'/'}>Home /</Link>
                    <Link href={'/cart'}>Shopping bag /</Link>
                    <Link href={'/shipping'}>Shipping /</Link>
                    <p className='text-second'>Payment</p>
                  </div>
                </div>
                <h2 className='container text-second mt-6 text-[28px] leading-[36px]'>Payment</h2>
            </section>
            {/* --------------------------Buy Progress Bar----------------------------- */}
            <div className="container">
                      <div className="w-full mt-[36px] flex items-center justify-between relative">
                      {/* ---------Line--------- */}
                      <div className="absolute top-[22%] left-0 w-full h-[1px] bg-[#44483D] -z-10"></div>
        
                      {/* ------Step 1-------- */}
                      <div className="flex flex-col items-center w-1/3">
                        <div className="w-6 h-6 rounded-full bg-primary border border-[#44483D]"></div>
                        <span className="mt-2 text-base text-second">Card</span>
                      </div>
        
                      {/* --------Step 2-------- */}
                      <div className="flex flex-col items-center w-1/3">
                        <div className="w-6 h-6 rounded-full bg-primary border border-[#44483D]"></div>
                        <span className="mt-2 text-base text-second">Shipping</span>
                      </div>
        
                      {/* ------Step 3------ */}
                      <div className="flex flex-col items-center w-1/3">
                        <div className="w-6 h-6 rounded-full bg-primary border border-[#44483D]"></div>
                        <span className="mt-2 text-base text-second">Payment</span>
                      </div>
        
                      </div>
            </div>
        </main>
    </>
  )
}

export default PayHead