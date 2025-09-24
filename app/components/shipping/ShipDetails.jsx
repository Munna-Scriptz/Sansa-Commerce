import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { FaRegFlag } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { IoLocationOutline, IoPhonePortraitOutline } from 'react-icons/io5'
import { MdLocationCity, MdOutlineAlternateEmail, MdOutlineFolderZip, MdOutlineOtherHouses } from 'react-icons/md'

const ShipDetails = () => {
  return (
    <>
        <section className='w-[775px] rounded-[24px] bg-[#FBFBFB] p-6'>
            {/* ------------------First Row ----------------- */}
            <div>
                <h2 className='text-[22px] text-second mb-8'>Enter your details</h2>
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
                    <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-sm ml-6 px-2'>First Name</legend>
                        <div className='flex items-center h-full w-full px-3'>
                            <FaRegUserCircle className='text-[22px] text-subText' />
                            <input className='h-full pl-3 text-second w-full outline-none' placeholder='Your First Name' type="username" id="username" />
                        </div>
                    </fieldset>
                    <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-sm ml-6 px-2'>Last Name</legend>
                        <div className='flex items-center h-full w-full px-3'>
                            <FaRegUserCircle className='text-[22px] text-subText' />
                            <input className='h-full pl-3 text-second w-full outline-none' placeholder='Your Last Name' type="username" id="username" />
                        </div>
                    </fieldset>
                </div>
            </div>

            {/* ------------------Second Row ----------------- */}
            <div className='mt-12'>
                <h2 className='text-[22px] text-second mb-8'>Shipping Address</h2>
                <div className='flex items-center flex-wrap gap-x-[32px] gap-y-[24px]'>
                    <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-sm ml-6 px-2'>Address</legend>
                        <div className='flex items-center h-full w-full px-3'>
                            <IoLocationOutline className='text-[22px] text-subText' />
                            <input className='h-full pl-3 text-second w-full outline-none' placeholder='Address' type="address" id="address" />
                        </div>
                    </fieldset>
                    <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-sm ml-6 px-2'>City</legend>
                        <div className='flex items-center h-full w-full px-3'>
                            <MdLocationCity className='text-[22px] text-subText' />
                            <input className='h-full pl-3 text-second w-full outline-none' placeholder='City' type="city" id="city" />
                        </div>
                    </fieldset>
                    <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-sm ml-6 px-2'>State/province</legend>
                        <div className='flex items-center h-full w-full px-3'>
                            <MdOutlineOtherHouses className='text-[22px] text-subText' />
                            <input className='h-full pl-3 text-second w-full outline-none' placeholder='Province/state' type="state" id="state" />
                        </div>
                    </fieldset>
                    <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-sm ml-6 px-2'>Country</legend>
                        <div className='flex items-center h-full w-full px-3'>
                            <FaRegFlag className='text-[22px] text-subText' />
                            <input className='h-full pl-3 text-second w-full outline-none' placeholder='Country' type="country" id="country" />
                        </div>
                    </fieldset>
                    <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-sm ml-6 px-2'>Zip code</legend>
                        <div className='flex items-center h-full w-full px-3'>
                            <MdOutlineFolderZip className='text-[22px] text-subText' />
                            <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter zip code' type="code" id="code" />
                        </div>
                    </fieldset>
                    <fieldset className='w-[328px] h-[62px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                        <legend className='text-subText text-sm ml-6 px-2'>Prefix</legend>
                        <div className='flex items-center h-full w-full px-3'>
                            <FiUsers className='text-[22px] text-subText'/>
                            <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter Prefix' type="prefix" id="prefix" />
                        </div>
                    </fieldset>
                </div>
            </div>

            {/* ------------------Third Row ----------------- */}
            <div className='mt-12'>
                <h2 className='text-[22px] text-second mb-8'>Delivery options</h2>
                <div className='flex items-center flex-col gap-y-[16px]'>
                    <label class="w-full h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[20px] py-[12px] transition hover:bg-gray-50 flex items-center has-[:checked]:bg-brand">
                        <input id="Option1" name='delivery' type="radio" class="peer sr-only" />
                        <span class="relative w-6 h-6 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                            <svg class="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <div class="flex items-center justify-between gap-2 w-full ml-4">
                            <div class="flex items-center gap-4">
                            <p class="text-subText text-base peer-checked:text-white">Option 1</p>
                            </div>
                            <div class="text-subText peer-checked:text-white">
                            <p>Free</p>
                            </div>
                        </div>
                    </label>

                    <label class="w-full h-[48px] rounded-[4px] cursor-pointer border border-[#8D918C] select-none px-[20px] py-[12px] transition hover:bg-gray-50 flex items-center has-[:checked]:bg-brand">
                        <input id="Option2" name='delivery' type="radio" class="peer sr-only" />
                        <span class="relative w-6 h-6 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-full transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                            <svg class="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                        <div class="flex items-center justify-between gap-2 w-full ml-4">
                            <div class="flex items-center gap-4">
                            <p class="text-subText text-base peer-checked:text-white">Option 2</p>
                            </div>
                            <div class="text-subText peer-checked:text-white">
                            <p>20 USD</p>
                            </div>
                        </div>
                    </label>
                </div>
            </div>

        </section>
    </>
  )
}

export default ShipDetails