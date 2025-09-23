import React from 'react'
import pay1 from '../../../public/payment1.png'
import pay2 from '../../../public/payment2.png'
import pay3 from '../../../public/payment3.png'
import pay4 from '../../../public/payment4.png'
import pay5 from '../../../public/payment5.png'
import pay6 from '../../../public/payment6.png'
import Image from 'next/image'

const Summery = () => {
  return (
    <div className='flex flex-col gap-[40px]'>
        <div className='w-[490px] rounded-[24px] px-[32px] pt-[32px] pb-[118px] bg-[#FBFBFB]'>
            <div>
                <h2 className='text-2xl mb-[32px]'>Summary ( 2 items )</h2>
                <div className='flex items-center justify-between'>
                    <p className='text-[#44483D]'>Subtotal</p>
                    <p className='text-second font-medium font-roboto'>16.25 USD</p>
                </div>
                <div className='flex items-center justify-between mt-2'>
                    <p className='text-[#44483D]'>Shipping</p>
                    <p className='text-second font-medium'>FREE</p>
                </div>
                <div className='flex items-center justify-between my-10'>
                    <p className='text-[#44483D] text-[22px]'>Total</p>
                    <p className='text-second text-2xl font-semibold'>16.25 USD</p>
                </div>
                <button className={`relative flex items-center justify-center py-[12px] px-[38px] overflow-hidden text-white bg-primary group rounded-full w-full cursor-pointer`}>
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-86 group-hover:h-56"></span>
                    <span className="relative text-[16px] font-roboto font-medium">Continue</span>
                </button>
            </div>
        </div>
        {/* ------------------------Payment Accept----------------- */}
        <div className='bg-[#FBFBFB] rounded-[24px] w-[490px] py-[38px] pb-[45px] p-[36px]'>
            <div className='flex items-center gap-5'>
                <p className='text-subText '>Payment accepted:</p>
                <div className='flex items-center gap-1.5'>
                    <Image className='w-[38px]' src={pay1} alt='payment'/>
                    <Image className='w-[38px]' src={pay2} alt='payment'/>
                    <Image className='w-[38px]' src={pay3} alt='payment'/>
                    <Image className='w-[38px]' src={pay4} alt='payment'/>
                    <Image className='w-[38px]' src={pay5} alt='payment'/>
                    <Image className='w-[38px]' src={pay6} alt='payment'/>
                </div>
            </div>
            <div className='flex items-center gap-5 mt-6'>
                <p className='text-subText '>Payment accepted:</p>
                <p className='text-second font-medium'>24/7 +855 (240) 389 328</p>
            </div>
        </div>
    </div>
  )
}

export default Summery