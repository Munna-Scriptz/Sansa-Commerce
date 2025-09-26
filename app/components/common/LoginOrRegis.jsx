'use client'
import Link from 'next/link';
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginOrRegis = ({HideByLink}) => {
  return (
    <section className='flex items-center justify-center'>
        <div className='w-[600px] h-[500px] bg-[#f2f2f2] overflow-hidden relative z-[999] p-5 rounded-[7px] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
            <div className=' bg-second w-[315px] h-[800px] rotate-[38deg] absolute top-[-183px] left-[-136px] z-[-1]'></div>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-white font-medium text-[32px] mb-5'>Welcome!</h2>
                    <p className='text-white text-[17px] mb-7 w-[260px]'>Create your account For Free. if you are new!</p>
                    <Link onClick={HideByLink} className='LoginWithButton2 text-white py-[6px] px-[24px] lg:py-[6px] lg:px-[36px] border-[2px] rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] cursor-pointer' href={'/Register'}>Sign Up</Link>
                </div>

                <div className='flex items-end flex-col'>
                    <h2 className='text-second font-medium text-[32px] mb-4 text-end'>Welcome <br /> Back!</h2>
                    <p className=' text-Primary text-[17px] mb-6 w-[290px] text-end'>Login if you already have account. And Unlock New Journey</p>
                    <Link onClick={HideByLink} className='LoginWithButton text-second py-[6px] px-[24px] lg:py-[6px] lg:px-[36px] border-[2px] rounded-full flex items-center w-fit gap-2.5 duration-[.3s] hover:scale-[1.06] cursor-pointer' href={'/Login'}>login</Link>
                    {/* --------Or Start------- */}
                    <div className='w-full flex items-center justify-between gap-2 mt-5 mb-5'><span className='h-[2px] bg-Primary w-full'></span><p className='text-center text-second font-medium'>OR</p><span className='h-[2px] bg-Primary w-full'></span></div>
                    {/* --------Or End------- */}
                    <div className='flex items-center flex-wrap gap-3'>
                        <Link className='LoginWithButton text-second py-[6px] px-[16px] border-[2px] rounded-full flex items-center w-full gap-5 duration-[.3s] hover:scale-[1.06] cursor-pointer' href={'/'}><FaGoogle /> Login With Google</Link>
                        <Link className='LoginWithButton text-second py-[6px] px-[16px] border-[2px] rounded-full flex items-center w-full gap-5 duration-[.3s] hover:scale-[1.06] cursor-pointer' href={'/'}><FaFacebookF /> Login With Facebook</Link>
                        <Link className='LoginWithButton text-second py-[6px] px-[16px] border-[2px] rounded-full flex items-center w-full gap-5 duration-[.3s] hover:scale-[1.06] cursor-pointer' href={'/'}><FaGithub /> Login With Github</Link>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default LoginOrRegis