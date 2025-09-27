'use client'
import React, { useState } from 'react'
import logo from '../../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineLockOpen } from 'react-icons/md'
import { FaRegEye, FaRegEyeSlash, FaRegUserCircle } from 'react-icons/fa'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
    // ----------------------- Hooks 
    const [pass, showPass] = useState(false)
    const [loader, setLoader] = useState(false)
    const [formData, setFormData] = useState(
        {
            username: '',
            usernameErr: 'Username',
            usernameErrCol: 'text-subText',

            password: '',
            passError: 'Password',
            passErrCol: 'text-subText',

        }
    )
    // ---------------------- API Fetch 
    const url = 'https://api.freeapi.app/api/v1/users/login';
    const options = {
        method: 'POST',
        headers: { accept: 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify({ username: formData.username, password: formData.password })
    }

    // ------------------ Login Handler 
    const handleLogin = async (e) => {
        e.preventDefault()

        // --------------------------- Validation Conditions 
        if (!formData.username) return setFormData((prev) => ({ ...prev, usernameErr: 'Please enter your email', usernameErrCol: 'text-red-500' }))
        if (!formData.password) return setFormData((prev) => ({ ...prev, passError: 'Please enter your password', passErrCol: 'text-red-500' }))

        // --------------------API 
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            // ------------------------Toast Conditions 
            if (data.message == 'User does not exist') {
                toast.error('User does not exist !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                })
            }
            if (data.message == 'Invalid user credentials') {
                toast.warning('Incorrect Password', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                })
            }
            if (data.message == 'User logged in successfully') {
                toast.success('Logged into your account', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                })
            }
            setLoader(true)
        }
        catch (error) {
            console.error(error);
        }
        setTimeout(() => {
            router.push('/');
            setLoader(false)
        }, 6000);
    }
    return (
        <>
            <ToastContainer />
            <div className={`${loader ? '' : 'hidden'} LoaderDiv z-1 fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-[#0000007a]`}><div className="loader"></div></div>
            <section id='Register' className='mt-6'>
                <div className="container">
                    <div id="Register-Row">
                        {/* -------------------------- logo ------------------   */}
                        <div className='flex items-center justify-center'>
                            <Image className='w-[144px]' property='false' src={logo} alt='logo' />
                        </div>
                        {/* -------------------------- logo ------------------   */}
                        <form onSubmit={handleLogin} className='w-[700px] mt-6 mx-auto border-1 border-[#DADFD8] rounded-[24px] p-[36px]'>
                            {/* -------------------Header text------------- */}
                            <div className='mb-8'>
                                <h2 className='text-second text-[28px] text-center leading-[36px] mb-4'>Login to your account</h2>
                                <p className='text-[#484A47] text-base text-center leading-[24px]'>Please enter your information</p>
                            </div>

                            {/* ---------------------- Inputs --------------------- */}
                            <div className='mt-[38px] '>
                                {/* --------------Username  */}
                                <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                                    <legend className={`${formData.usernameErrCol} text-base ml-6 px-2`}>{formData.usernameErr}</legend>
                                    <div className='flex items-center h-full w-full px-3'>
                                        <FaRegUserCircle className='text-[22px] text-subText' />
                                        <input onChange={(e) => { setFormData((prev) => ({ ...prev, username: e.target.value, usernameErr: 'Username', usernameErrCol: 'text-subtext' })) }} className='h-full pl-3 text-second w-full outline-none' placeholder='Enter Your Name' type="username" id="username" autoComplete='username' />
                                    </div>
                                </fieldset>
                                {/* --------------Password  */}
                                <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px] mt-6'>
                                    <legend className={`${formData.passErrCol} text-base ml-6 px-2`}>{formData.passError}</legend>
                                    <div className='flex items-center justify-between h-full px-3'>
                                        <div className='flex items-center w-full'>
                                            <MdOutlineLockOpen className='text-2xl text-subText' />
                                            <input onChange={(e) => { setFormData((prev) => ({ ...prev, password: e.target.value, passError: 'Password', passErrCol: 'text-subtext' })) }} className='h-full pl-3 text-second w-full outline-none' placeholder='Enter password' type={`${pass ? 'text' : 'password'}`} id="password" autoComplete='new-password' />
                                        </div>
                                        {
                                            pass ?
                                                <FaRegEye onClick={() => showPass(!pass)} className='text-xl text-subText cursor-pointer' />
                                                :
                                                <FaRegEyeSlash onClick={() => showPass(!pass)} className='text-xl text-subText cursor-pointer' />
                                        }
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
                                    <input id="Option2" name='packaging' type="checkbox" className="peer sr-only" />
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
                            <p className='text-[#0A1401] font-medium text-center'>Have not had account yet? <Link className='text-primary' href={'/register'}>Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page