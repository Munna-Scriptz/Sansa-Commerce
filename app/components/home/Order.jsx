import React from 'react'
import CommonHead from '../common/CommonHead'
import Image from 'next/image'
import pick from '../../../public/pick.jpg'
import location from '../../../public/location.jpg'
import receive from '../../../public/recieve.png'

const Order = () => {
    
  return (
    <>
        <section id='Order' className='mt-[112px]'>
            <div className="container">
                <div id="Order-Row">
                    {/* ----------------Head Text------------------ */}
                    <CommonHead text={'How To Order Our Products'}/>
                    {/* ----------------Process Text------------------ */}
                    <div className='mt-[72px] flex items-center justify-around'>
                        <div className='border-1 border-[#B3B7B1] rounded-[8px] p-6 w-[310px]'>
                            <Image src={pick}></Image>
                            <div className='mt-6'>
                                <h2 className='mb-3 text-second text-[32px] font-medium text-center'>Select Product </h2>
                                <p className='text-center text-subText leading-[24px]'>Choosing product you want to purchase and pay with payment method such as credit card or google pays</p>
                            </div>
                        </div>
                        <div className='border-1 border-[#B3B7B1] rounded-[8px] p-6 w-[310px]'>
                            <Image src={location}></Image>
                            <div className='mt-6'>
                                <h2 className='mb-3 text-second text-[32px] font-medium text-center'>Location </h2>
                                <p className='text-center text-subText leading-[24px]'>Please choose a location near your residence where you can pick up product easily and inquire about the product in more detail.</p>
                            </div>
                        </div>
                        <div className='border-1 border-[#B3B7B1] rounded-[8px] p-6 w-[310px]'>
                            <Image className='h-[284px]' src={receive}></Image>
                            <div className='mt-6'>
                                <h2 className='mb-3 text-second text-[32px] font-medium text-center'>Pick Up</h2>
                                <p className='text-center text-subText leading-[24px]'>Once the product has arrived at the location you selected, you can proceed to pick it up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Order