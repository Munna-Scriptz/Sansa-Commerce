import React from 'react'
import { CiMail } from 'react-icons/ci'
import { PiInstagramLogoLight, PiInstagramLogoThin, PiLinkedinLogoLight, PiMapPinThin, PiPhoneCallLight } from 'react-icons/pi'
import { SlSocialFacebook } from 'react-icons/sl'

const LetsTalk = () => {
  return (
    <>
        <section id='Lets-Talk' className='mt-[85px]'>
            <div className="container">
                <div id="Lets-Talk-Row" className='flex lg:flex-row flex-col items-center justify-between'>
                    {/* ---------------------------Left Side------------------------------ */}
                    <div className='lg:w-[401px]'>
                        <h2 className='lg:text-[64px] text-[36px] text-primary font-roboto font-semibold'>Let’s talk</h2>
                        <p className='text-[#0C0C0CE5] text-lg font-dmSans lg:mt-[32px] mt-[24px]'>We collaborate with thousands of creators, entrepreneurs and complete legends.</p>
                        {/* ------Border */}
                        <div className='w-full h-[1px] bg-[#DFDFDF] my-7.5'></div>
                        {/* ------Border */}
                        <div className='flex items-center md:gap-[26px] gap-[16px]'>
                            <div className='md:w-[50px] w-[40px] md:h-[50px] h-[40px] bg-primary text-white md:text-3xl text-2xl rounded-full flex items-center justify-center'>
                                <CiMail />
                            </div>
                            <div>
                                <h2 className='text-primary text-xl font-roboto font-semibold mb-1'>Our email</h2>
                                <p className='text-base text-[#0C0C0CE5] font-dmSans'>munnascriptz@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex items-center md:gap-[26px] gap-[16px] mt-5'>
                            <div className='md:w-[50px] w-[40px] md:h-[50px] h-[40px] bg-primary text-white md:text-3xl text-2xl rounded-full flex items-center justify-center'>
                                <PiPhoneCallLight />
                            </div>
                            <div>
                                <h2 className='text-primary text-xl font-roboto font-semibold mb-1'>Call us</h2>
                                <p className='text-base text-[#0C0C0CE5] font-dmSans'>+1234567892</p>
                            </div>
                        </div>
                        <div className='flex items-center md:gap-[26px] gap-[16px] mt-5'>
                            <div className='md:w-[50px] w-[40px] md:h-[50px] h-[40px] bg-primary text-white md:text-3xl text-2xl rounded-full flex items-center justify-center'>
                                <PiMapPinThin />
                            </div>
                            <div>
                                <h2 className='text-primary text-xl font-roboto font-semibold mb-1'>Find us</h2>
                                <p className='text-base text-[#0C0C0CE5] font-dmSans'>Open Google Maps</p>
                            </div>
                        </div>
                        {/* ------Border */}
                        <div className='w-full h-[1px] bg-[#DFDFDF] my-7.5'></div>
                        {/* ------Border */}
                        <div className='flex items-center gap-3'>
                            <div className='w-[50px] h-[50px] rounded-full text-2xl cursor-pointer hover:bg-primary duration-300 flex items-center justify-center hover:text-white'>
                                <SlSocialFacebook />
                            </div>
                            <div className='w-[50px] h-[50px] rounded-full text-2xl cursor-pointer hover:bg-primary duration-300 flex items-center justify-center hover:text-white'>
                                <PiInstagramLogoLight />
                            </div>
                            <div className='w-[50px] h-[50px] rounded-full text-2xl cursor-pointer hover:bg-primary duration-300 flex items-center justify-center hover:text-white'>
                                <PiLinkedinLogoLight />
                            </div>
                        </div>
                    </div>
                    {/* ---------------------------Right Side------------------------------ */}
                    <div className='lg:w-[795px] bg-[#F4F4F4] rounded-[20px] lg:p-[45px] p-[22px] lg:mt-0 mt-10'>
                        {/* -------------------------First Row */}
                        <div className='flex lg:flex-nowrap flex-wrap items-center justify-between'>
                            <div className='lg:w-[326px] w-full flex flex-col'>
                                <label className='text-primary text-lg font-dmSans' htmlFor="name">First name</label>
                                <input className='border-b-1 border-[#DFDFDF] pt-2 outline-none' id="name" />
                            </div>
                            <div className='lg:w-[326px] w-full flex flex-col lg:mt-0 mt-6'>
                                <label className='text-primary text-lg font-dmSans' htmlFor="LastName">Last name</label>
                                <input className='border-b-1 border-[#DFDFDF] pt-2 outline-none' id="LastName" />
                            </div>
                        </div>
                        {/* -------------------------Second Row */}
                        <div className='flex lg:flex-nowrap flex-wrap items-center justify-between lg:mt-[52px] mt-6'>
                            <div className='lg:w-[326px] w-full flex flex-col'>
                                <label className='text-primary text-lg font-dmSans' htmlFor="email">Email</label>
                                <input type='email' className='border-b-1 border-[#DFDFDF] pt-2 outline-none' id="email" />
                            </div>
                            <div className='lg:w-[326px] w-full flex flex-col lg:mt-0 mt-6'>
                                <label className='text-primary text-lg font-dmSans' htmlFor="phone">Phone</label>
                                <input type='number' className='border-b-1 border-[#DFDFDF] pt-2 outline-none' id="phone" />
                            </div>
                        </div>
                        {/* -------------------------Third Row */}
                        <div className='flex lg:flex-nowrap flex-wrap items-center justify-between lg:mt-[52px] mt-6'>
                            <div className='w-full flex flex-col'>
                                <label className='text-primary text-lg font-dmSans' htmlFor="text">Message</label>
                                <input type='text' className='border-b-1 border-[#DFDFDF] pt-5 outline-none' id="text" />
                            </div>
                        </div>
                        {/* -----------------------Send Button  */}
                        <div className='mt-[52px]'>
                            <button className='bg-second text-borderCol font-dmSans text-lg py-[10px] px-[15px] rounded-full cursor-pointer ContactButtonBlack'>Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default LetsTalk