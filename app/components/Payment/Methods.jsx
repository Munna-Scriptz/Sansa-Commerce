import React from 'react'
import { MdCreditCard, MdOutlinePassword } from 'react-icons/md'
import paypal from '../../../public/payment4.png'
import gPay from '../../../public/payment3.png'
import aPay from '../../../public/payment5.png'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { LuCalendar1 } from 'react-icons/lu'
import Link from 'next/link'

const Methods = () => {
    return (
        <>
        <section className='lg:w-[775px] w-full rounded-[24px] bg-[#FBFBFB] lg:p-6'>
            <h2 className='md:text-[22px] text-xl text-second mb-8'>Payment Methods</h2>

            {/* --------------- Methods -------------------- */}
            <div className='flex flex-wrap lg:flex-nowrap items-center md:gap-4 gap-1.5'>
                <label className="md:w-[167px] w-[120px] h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[12px] md:py-[12px] py-[9px] transition hover:bg-gray-50 flex items-center justify-between has-[:checked]:bg-brand">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-4">
                            <div className="text-subText md:text-base text-xs peer-checked:text-white flex items-center gap-2"><MdCreditCard className='md:text-xl text-lg' /> Card</div>
                        </div>
                    </div>
                    <input id="Option1" name='packaging' type="radio" className="peer sr-only" />
                    <div className="relative md:w-5 w-4 md:h-5 h-4 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                        <svg className="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </label>
                <label className="md:w-[174px] w-[140px] h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[12px] md:py-[12px] py-[9px] transition hover:bg-gray-50 flex items-center justify-between has-[:checked]:bg-brand">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-4">
                            <div className="text-subText md:text-base text-xs peer-checked:text-white flex items-center gap-2"><Image className='md:w-[50px] w-[40px]' src={paypal} alt='payment'/> Paypal</div>
                        </div>
                    </div>
                    <input id="Option1" name='packaging' type="radio" className="peer sr-only" />
                    <div className="relative md:w-5 w-4 md:h-5 h-4 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                        <svg className="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </label>
                <label className="md:w-[174px] w-[140px] h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[12px] md:py-[12px] py-[9px] transition hover:bg-gray-50 flex items-center justify-between has-[:checked]:bg-brand">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-4">
                            <div className="text-subText md:text-base text-xs peer-checked:text-white flex items-center gap-2"><Image className='md:w-[55px] w-[40px]' src={gPay} alt='payment'/> G-Pay</div>
                        </div>
                    </div>
                    <input id="Option1" name='packaging' type="radio" className="peer sr-only" />
                    <div className="relative md:w-5 w-4 md:h-5 h-4 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                        <svg className="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </label>
                <label className="md:w-[174px] w-[140px] h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[12px] md:py-[12px] py-[9px] transition hover:bg-gray-50 flex items-center justify-between has-[:checked]:bg-brand">
                    <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-4">
                            <div className="text-subText md:text-base text-xs peer-checked:text-white flex items-center gap-2"><Image className='md:w-[55px] w-[40px]' src={aPay} alt='payment'/> A-Pay</div>
                        </div>
                    </div>
                    <input id="Option1" name='packaging' type="radio" className="peer sr-only" />
                    <div className="relative md:w-5 w-4 md:h-5 h-4 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                        <svg className="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </label>
            </div>

            {/* --------------- Methods Data -------------------- */}
            <div className='flex flex-wrap items-center md:gap-8 gap-4 mt-[68px]'>
                <fieldset className='w-[470px] h-[66px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                    <legend className='text-subText text-sm ml-6 px-2'>Name on the card</legend>
                    <div className='flex items-center h-full w-full px-3'>
                        <FaRegUserCircle className='text-[22px] text-subText' />
                        <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter name on card' type="name" id="name" />
                    </div>
                </fieldset>

                <fieldset className='md:w-[224px] w-full h-[66px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                    <legend className='text-subText text-sm ml-6 px-2'>Expired date</legend>
                    <div className='flex items-center h-full w-full px-3'>
                        <LuCalendar1 className='text-[22px] text-subText' />
                        <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter expired date' type="date" id="date" />
                    </div>
                </fieldset>
            </div>
            <div className='flex flex-wrap items-center md:gap-8 gap-4 md:mt-[40px] mt-5'>
                <fieldset className='md:w-[470px] w-full h-[66px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                    <legend className='text-subText text-sm ml-6 px-2'>Card number</legend>
                    <div className='flex items-center h-full w-full px-3'>
                        <MdCreditCard className='text-[22px] text-subText' />
                        <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter card number' type="number" id="number" />
                    </div>
                </fieldset>

                <fieldset className='md:w-[224px] w-full h-[66px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                    <legend className='text-subText text-sm ml-6 px-2'>CVV</legend>
                    <div className='flex items-center h-full w-full px-3'>
                        <MdOutlinePassword className='text-[22px] text-subText' />
                        <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter CVV' type="cvv" id="cvv" />
                    </div>
                </fieldset>
            </div>

            {/* ---------------Where are they  */}
            <div className='flex items-center flex-wrap lg:justify-end gap-2 mt-11'>
                <Link className='text-[#44483D] md:text-sm text-xs underline underline-offset-2' href={'/'}>Where is Card number?</Link>
                <Link className='text-[#44483D] md:text-sm text-xs underline underline-offset-2' href={'/'}>Where is Expired date?</Link>
                <Link className='text-[#44483D] md:text-sm text-xs underline underline-offset-2' href={'/'}>Where is my CVV?</Link>
            </div>
        </section>
    </>
  )
}

export default Methods