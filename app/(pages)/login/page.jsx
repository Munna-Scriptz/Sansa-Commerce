import React from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineAlternateEmail, MdOutlineLockOpen } from 'react-icons/md'

const page = () => {
  return (
    <>
        <section id='Register' className='mt-6'>
            <div className="container">
                <div id="Register-Row">
                    {/* -------------------------- logo ------------------   */}
                    <div className='flex items-center justify-center'>
                        <Image className='w-[144px]' src={logo} alt='logo'/>
                    </div>
                    {/* -------------------------- logo ------------------   */}
                    <form className='w-[700px] mt-6 mx-auto border-1 border-[#DADFD8] rounded-[24px] p-[36px]'>
                        {/* -------------------Header text------------- */}
                        <div className='mb-8'>
                            <h2 className='text-second text-[28px] text-center leading-[36px] mb-4'>Login to your account</h2>
                            <p className='text-[#484A47] text-base text-center leading-[24px]'>Please enter your information</p>
                        </div>

                        {/* ---------------------- Inputs --------------------- */}
                        <div className='mt-[38px] '>
                            {/* --------------Email  */}
                            <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                                <legend className='text-subText text-base ml-6 px-2'>Email</legend>
                                <div className='flex items-center justify-between h-full w-full px-3'>
                                    <div className='flex items-center h-full w-full'>
                                        <MdOutlineAlternateEmail className='text-2xl text-subText' />
                                        <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter Email' type="email" id="email" />
                                    </div>
                                    <h2 className='text-subText text-end'>@gmail.com</h2>
                                </div>
                            </fieldset>
                            {/* --------------Password  */}
                            <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px] mt-6'>
                                <legend className='text-subText text-base ml-6 px-2'>Password</legend>
                                <div className='flex items-center h-full w-full px-3'>
                                    <MdOutlineLockOpen className='text-2xl text-subText' />
                                    <input className='h-full pl-3 text-second w-full outline-none' placeholder='Create Password' type="password" id="password" />
                                </div>
                            </fieldset>
                        </div>

                        {/* ------------------- Remember me ----------------- */}
                        <div className='mt-6'>
                            <label className="w-full h-[48px] rounded-[4px] cursor-pointer select-none transition flex items-center">
                                <input id="Option1" name='packaging' type="checkbox" className="peer sr-only" />
                                <span className="relative w-6 h-6 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-[4px] transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                                    <svg className="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <div className="flex items-center justify-between gap-2 w-full ml-4">
                                    <div className="flex items-center gap-4">
                                        <p className="text-subText text-base peer-checked:text-white">Remember me</p>
                                    </div>
                                </div>
                            </label>
                            <label className="w-full h-[48px] rounded-[4px] cursor-pointer select-none transition flex items-center">
                                <input id="Option1" name='packaging' type="checkbox" className="peer sr-only" />
                                <span className="relative w-6 h-6 flex justify-center items-center bg-gray-100 border-2 border-gray-400 rounded-[4px] transition-all duration-300 peer-checked:bg-primary peer-checked:border-primary">
                                    <svg className="hidden w-4 h-4 text-white peer-checked:block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <div className="flex items-center justify-between gap-2 w-full ml-4">
                                    <div className="flex items-center gap-4">
                                        <p className="text-subText text-base peer-checked:text-white">Agree with terms and conditions</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        
                        {/* ----------------------Submit Button--------------------- */}
                        <button type='submit' className={`relative flex items-center justify-center py-4 w-full mt-8 cursor-pointer overflow-hidden text-primary bg-primary group rounded-full`}>
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-full group-hover:h-120"></span>
                            <span className="relative text-[16px] font-roboto text-white font-medium">Login</span>
                        </button>
                    </form>

                    {/* ----------------------------- Login ------------------------------------ */}
                    <div className='flex items-center justify-center mt-6'>
                        <p className='text-[#0A1401] font-medium text-center'>Have not had account yet? <Link className='text-primary' href={'/login'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default page