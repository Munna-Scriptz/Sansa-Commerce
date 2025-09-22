import React from 'react'
import logo from '../../../public/logo.svg'
import { SlSocialFacebook } from 'react-icons/sl'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CiLinkedin } from 'react-icons/ci'
import Link from 'next/link'
import Image from 'next/image'

import pay1 from '../../../public/Visa.png'
import pay2 from '../../../public/PayPal.png'
import pay3 from '../../../public/GooglePay.png'
import pay4 from '../../../public/ApplePay.png'
import pay5 from '../../../public/Mastercard.png'
import pay6 from '../../../public/UnionPay.png'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { IoLanguage } from 'react-icons/io5'

const Footer = () => {
  return (
    <>
        <footer className='mt-[112px] bg-[#F3F3F3] pt-[60px]'>
            <div className="container">
                <div id="Footer-Row" className='flex flex-wrap md:gap-0 gap-15  items-start justify-between'>
                    {/* ---------------------First Row------------------------- */}
                    <div>
                        <Link href={'/'}><Image className='w-[200px]' src={logo} alt="Logo" /></Link>
                        <p className='font-dmSans text-subText lg:text-lg mt-6 lg:w-[357px] w-full'>We’re a team of strategic creator and digital innovator, united focus in our pursuit of mastery and joyful.</p>
                        <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px] mt-8'>
                            <legend className='text-subText text-base ml-6 px-2'>Language</legend>
                            <div className='flex items-center gap-3 h-full w-full px-3'>
                                <IoLanguage className='text-2xl text-subText' />
                                <select className='w-full text-subText font-medium outline-none h-full' name="Lang" id="Select">
                                    <option value="English">English</option>
                                    <option value="Bangla">Bangla</option>
                                    <option value="French">French</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Russian">Russian</option>
                                </select>
                            </div>
                        </fieldset>
                    </div>
                    {/* ---------------------Second Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-second'>Pages</h2>
                        <ul className='text-base flex flex-col text-subText gap-4 mt-6 opacity-[.8]'>
                            <li><Link id='HoverLinks' href={'/'}>Home</Link></li>
                            <li><Link id='HoverLinks' href={'/about'}>About</Link></li>
                            <li><Link id='HoverLinks' href={'/contact'}>Contact Us </Link></li>
                            <li><Link id='HoverLinks' href={'/'}>Products</Link></li>
                            <li><Link id='HoverLinks' href={'/'}>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Third Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-second'>Utility Pages </h2>
                        <ul className='text-subText text-base flex flex-col gap-4 mt-6 opacity-[.8]'>
                            <li><Link id='HoverLinks' href={'/'}>Style Guide </Link></li>
                            <li><Link id='HoverLinks' href={'/'}>Instruction</Link></li>
                            <li><Link id='HoverLinks' href={'/'}>License </Link></li>
                            <li><Link id='HoverLinks' href={'/'}>Changelog</Link></li>
                            <li><Link id='HoverLinks' href={'/'}>Error 40</Link></li>
                            <li><Link id='HoverLinks' href={'/'}>Password Protected  </Link></li>
                        </ul>
                    </div>
                    {/* ---------------------Fourth Row------------------------- */}
                    <div>
                        <h2 className='font-roboto font-semibold text-xl text-second'>Payment Methods </h2>
                        <div className='mt-6 flex items-center gap-1 flex-wrap'>
                            <Link href={'/'}>
                                <Image src={pay1} alt="Payments methods     "/>
                            </Link>
                            <Link href={'/'}>
                                <Image src={pay2} alt="Payments methods     "/>
                            </Link>
                            <Link href={'/'}>
                                <Image src={pay3} alt="Payments methods     "/>
                            </Link>
                            <Link href={'/'}>
                                <Image src={pay4} alt="Payments methods     "/>
                            </Link>
                            <Link href={'/'}>
                                <Image src={pay5} alt="Payments methods     "/>
                            </Link>
                            <Link href={'/'}>
                                <Image src={pay6} alt="Payments methods     "/>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* --------------------------Bottom Header------------------------ */}
                <div id='Footer-Second-row' className='border-t border-borderCol mt-[100px] pt-[30px] pb-[60px] flex flex-wrap md:gap-0 gap-10 items-center justify-between'>
                    <div>
                        <h2 className='font-roboto font-semibold md:text-xl text-second'>Copyright by</h2>
                        <div className='font-dmSans md:text-xl text-[#484A47] md:mt-[16px] mt-3'>Developed by <Link className='underline' href={'https://portfolio-munna.vercel.app/'}>Munna-Scriptz</Link></div>
                    </div>
                    <div>
                        <h2 className='font-roboto font-semibold md:text-xl text-second'>Contact Us</h2>
                        <p className='font-dmSans md:text-xl text-[#484A47] md:mt-[16px] mt-3'>munnascriptz@gmail.com</p>
                    </div>
                    <div>
                        <h2 className='font-roboto font-semibold md:text-xl text-second'>Address</h2>
                        <p className='font-dmSans md:text-xl text-[#484A47] md:mt-[16px] mt-3'>119 Tanglewood Lane Gulfport</p>
                    </div>

                    <div className='flex items-center gap-[15px]'>
                        <Link href={'/'} className='bg-borderCol text-second w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                            <SlSocialFacebook />
                        </Link>
                        <Link href={'/'} className='bg-borderCol text-second w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                            <AiOutlineInstagram />
                        </Link>
                        <Link href={'/'} className='bg-borderCol text-second w-[50px] h-[50px] rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-primary hover:text-borderCol duration-[.3s] border-borderCol hover:border-1'>
                            <CiLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer