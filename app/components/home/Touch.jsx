import React from 'react'
import CommonHead from '../common/CommonHead'
import { MdOutlineAlternateEmail, MdOutlineLockOpen } from 'react-icons/md'
import { FaRegUserCircle } from "react-icons/fa";

const Touch = () => {
  return (
    <>
        <section id='Touch' className='mt-[112px]'>
            <div className="container">
                <div id="Touch-Row">
                    {/* --------------------Head Text----------------------------- */}
                    <CommonHead text={'Stay In Touch'}/>
                    {/* --------------------Head Text----------------------------- */}
                    <div className='p-[36px] border-1 border-[#DADFD8] rounded-[24px] mt-[85px] w-[900px] mx-auto'>
                        <div>
                            <h2 className='text-second text-[28px] font-medium text-center'>Sign up as our customer</h2>
                            <p className='mt-4 text-subText text-center'>Please enter your information</p>
                        </div>
                        {/* ----------------------Inputs--------------------- */}
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
                            {/* --------------Username  */}
                            <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px] mt-6'>
                                <legend className='text-subText text-base ml-6 px-2'>Name</legend>
                                <div className='flex items-center h-full w-full px-3'>
                                    <FaRegUserCircle className='text-[22px] text-subText' />
                                    <input className='h-full pl-3 text-second w-full outline-none' placeholder='Enter Your Name' type="username" id="username" />
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
                            {/* --------------Confirm Password  */}
                            <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px] mt-6'>
                                <legend className='text-subText text-base ml-6 px-2'>Confirm Password</legend>
                                <div className='flex items-center h-full w-full px-3'>
                                    <MdOutlineLockOpen className='text-2xl text-subText' />
                                    <input className='h-full pl-3 text-second w-full outline-none' placeholder='Create Password' type="password" id="password" />
                                </div>
                            </fieldset>
                        </div>
                        {/* ----------------------Submit Button--------------------- */}
                        <button className='text-white bg-primary font-roboto w-full rounded-full mt-8 py-4 cursor-pointer font-medium hover:bg-subText duration-300'>Sign Up</button>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Touch