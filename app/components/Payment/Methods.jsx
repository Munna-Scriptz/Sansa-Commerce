import React from 'react'
import { MdCreditCard } from 'react-icons/md'
import paypal from '../../../public/payment4.png'
import gPay from '../../../public/payment3.png'
import aPay from '../../../public/payment5.png'

import Image from 'next/image'

const Methods = () => {
    return (
        <>
        <section className='w-[775px] rounded-[24px] bg-[#FBFBFB] p-6'>
            <h2 className='text-[22px] text-second mb-8'>Payment Methods</h2>

            {/* --------------- Methods -------------------- */}
            <div className='flex items-center gap-4'>
                <label class="w-[167px] h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[12px] py-[12px] transition hover:bg-gray-50 flex items-center justify-between has-[:checked]:bg-brand">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-4">
                            <div class="text-subText text-base peer-checked:text-white flex items-center gap-2"><MdCreditCard className='text-xl' /> Card</div>
                        </div>
                    </div>
                    <input id="Option1" name='packaging' type="radio" class="peer sr-only" />
                    <div class="relative w-5 h-5 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                        <svg class="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </label>
                <label class="w-[174px] h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[12px] py-[12px] transition hover:bg-gray-50 flex items-center justify-between has-[:checked]:bg-brand">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-4">
                            <div class="text-subText text-base peer-checked:text-white flex items-center gap-2"><Image className='w-[50px]' src={paypal} alt='payment'/> Paypal</div>
                        </div>
                    </div>
                    <input id="Option1" name='packaging' type="radio" class="peer sr-only" />
                    <div class="relative w-5 h-5 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                        <svg class="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </label>
                <label class="w-[174px] h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[12px] py-[12px] transition hover:bg-gray-50 flex items-center justify-between has-[:checked]:bg-brand">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-4">
                            <div class="text-subText text-base peer-checked:text-white flex items-center gap-2"><Image className='w-[55px]' src={gPay} alt='payment'/> G-Pay</div>
                        </div>
                    </div>
                    <input id="Option1" name='packaging' type="radio" class="peer sr-only" />
                    <div class="relative w-5 h-5 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                        <svg class="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </label>
                <label class="w-[174px] h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[12px] py-[12px] transition hover:bg-gray-50 flex items-center justify-between has-[:checked]:bg-brand">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-4">
                            <div class="text-subText text-base peer-checked:text-white flex items-center gap-2"><Image className='w-[55px]' src={aPay} alt='payment'/> A-Pay</div>
                        </div>
                    </div>
                    <input id="Option1" name='packaging' type="radio" class="peer sr-only" />
                    <div class="relative w-5 h-5 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                        <svg class="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </label>
            </div>







            {/* ------------------First Row ----------------- */}
            {/* <div>
                        <div className='flex items-center flex-wrap gap-x-[32px] gap-y-[24px]'>
                            <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                                <legend className='text-subText text-sm ml-6 px-2'>Email</legend>
                                <div className='flex items-center h-full w-full px-3'>
                                    <MdOutlineAlternateEmail className='text-[22px] text-subText' />
                                    <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter Your Email' type="email" id="email" />
                                </div>
                            </fieldset>
                            <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                                <legend className='text-subText text-sm ml-6 px-2'>Phone Number</legend>
                                <div className='flex items-center h-full w-full px-3'>
                                    <IoPhonePortraitOutline className='text-[22px] text-subText' />
                                    <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter Phone Number' type="phone" id="phone" />
                                </div>
                            </fieldset>
                        </div>
            </div>
            <p className='text-second leading-[24px] mt-[137px]'>We'll contact you in case anything comes up with your order.</p> */}
        </section>
    </>
  )
}

export default Methods