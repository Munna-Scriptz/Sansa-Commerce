import React from 'react'
import CommonHead from '../common/CommonHead'
import { MdOutlineAlternateEmail, MdOutlineLockOpen } from 'react-icons/md'
import { FaRegUserCircle } from "react-icons/fa";

const Touch = () => {
  return (
    <>
        <section id='Touch' className='md:mt-[112px] mt-[72px]'>
            <div className="container">
                <div id="Touch-Row">
                    {/* --------------------Head Text----------------------------- */}
                    <CommonHead text={'Stay In Touch'}/>
                    {/* --------------------Head Text----------------------------- */}
                    <div className='md:p-[36px] p-[16px] border-1 border-[#DADFD8] rounded-[24px] md:mt-[85px] mt-[42px] lg:w-[900px] w-full mx-auto'>
                        <div>
                            <h2 className='text-second md:text-[28px] text-xl font-medium text-center'>Sign up as our customer</h2>
                            <p className='md:mt-4 mt-2.5 text-subText text-center'>Please enter your information</p>
                        </div>
                        {/* ----------------------Inputs--------------------- */}
                        <div className='mt-[38px] '>
                            {/* --------------Email  */}
                            <fieldset className='w-full md:h-[70px] h-[60px] md:pb-3 pb-2.5 border-1 border-[#8D918C] rounded-[8px]'>
                                <legend className='text-subText md:text-base text-xs ml-6 px-2'>Email</legend>
                                <div className='flex items-center justify-between h-full w-full px-3'>
                                    <div className='flex items-center h-full w-full'>
                                        <MdOutlineAlternateEmail className='md:text-2xl text-xl text-subText' />
                                        <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter Email' type="email" id="email" />
                                    </div>
                                    <h2 className='text-subText md:text-base text-sm text-end'>@gmail.com</h2>
                                </div>
                            </fieldset>
                            {/* --------------Username  */}
                            <fieldset className='w-full md:h-[70px] h-[60px] md:pb-3 pb-2.5 border-1 border-[#8D918C] rounded-[8px] md:mt-6 mt-5'>
                                <legend className='text-subText md:text-base text-xs ml-6 px-2'>Name</legend>
                                <div className='flex items-center h-full w-full px-3'>
                                    <FaRegUserCircle className='md:text-[22px] text-xl text-subText' />
                                    <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter Your Name' type="username" id="username" />
                                </div>
                            </fieldset>
                            {/* --------------Password  */}
                            <fieldset className='w-full md:h-[70px] h-[60px] md:pb-3 pb-2.5 border-1 border-[#8D918C] rounded-[8px] md:mt-6 mt-5'>
                                <legend className='text-subText md:text-base text-xs ml-6 px-2'>Password</legend>
                                <div className='flex items-center h-full w-full px-3'>
                                    <MdOutlineLockOpen className='md:text-2xl text-xl text-subText' />
                                    <input className='h-full pl-3 text-second w-full outline-none' placeholder='Create Password' type="password" id="password" />
                                </div>
                            </fieldset>
                            {/* --------------Confirm Password  */}
                            <fieldset className='w-full md:h-[70px] h-[60px] md:pb-3 pb-2.5 border-1 border-[#8D918C] rounded-[8px] md:mt-6 mt-5'>
                                <legend className='text-subText md:text-base text-xs ml-6 px-2'>Confirm Password</legend>
                                <div className='flex items-center h-full w-full px-3'>
                                    <MdOutlineLockOpen className='md:text-2xl text-xl text-subText' />
                                    <input className='h-full pl-3 text-second w-full outline-none' placeholder='Create Password' type="password" id="password" />
                                </div>
                            </fieldset>
                        </div>
                        {/* ----------------------Submit Button--------------------- */}
                        <button className={`relative flex items-center justify-center md:py-4 py-3 w-full mt-8 cursor-pointer overflow-hidden text-primary bg-primary group rounded-full`}>
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-86 group-hover:h-56"></span>
                            <span className="relative text-[16px] font-roboto text-white font-medium">Sign Up</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Touch