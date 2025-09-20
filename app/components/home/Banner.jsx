'use client'
import React from 'react'
import BannerImage1 from '../../../public/bannerSlide.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3500,
            responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
    };
  return (
    <>
    <section id='Banner' className='py-[60px]'>
        <div className="container">
            <div className="Banner-Row relative">
                {/* -------------Slider------------- */}
                <div className="slider-Banner-container">
                    <Slider {...settings}>
                        <div>
                            <div className='flex lg:flex-row flex-col-reverse items-center justify-between'>
                                <div id="bannerText" className='w-[609px]'>
                                    <h1 className='text-second font-roboto text-[32px] mb-4'>Product Collection</h1>
                                    <p className='text-subText font-roboto text-xl leading-[36px] mb-6'>Welcome to our online fashion haven, where we invite you to embark on a thrilling journey of discovery. We understand that fashion is an expression of your unique personality, and we've curated an extensive collection of dresses, shoes, and more to help you find your new favorites.</p>
                                    <div className='flex items-center gap-[16px]'>
                                        <Link href={''} className={`relative flex items-center justify-center py-[12px] px-[38px]  overflow-hidden text-white bg-primary group rounded-full w-fit`}>
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56"></span>
                                            <span className="relative font-roboto font-medium text-[16px]">Shop Now</span>
                                        </Link>
                                        <Link href={''} className={`relative flex items-center justify-center py-[12px] px-[38px] overflow-hidden text-primary bg-transparent border-1 border-subText group rounded-full w-fit`}>
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56"></span>
                                            <span className="relative text-[16px] font-roboto font-medium">Learn More</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='lg:mb-0 mb-[50px]'>
                                    <Image src={BannerImage1} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex lg:flex-row flex-col-reverse items-center justify-between'>
                                <div id="bannerText" className='w-[609px]'>
                                    <h1 className='text-second font-roboto text-[32px] mb-4'>Product Collection</h1>
                                    <p className='text-subText font-roboto text-xl leading-[36px] mb-6'>Welcome to our online fashion haven, where we invite you to embark on a thrilling journey of discovery. We understand that fashion is an expression of your unique personality, and we've curated an extensive collection of dresses, shoes, and more to help you find your new favorites.</p>
                                    <div className='flex items-center gap-[16px]'>
                                        <Link href={''} className={`relative flex items-center justify-center py-[12px] px-[38px]  overflow-hidden text-white bg-primary group rounded-full w-fit`}>
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56"></span>
                                            <span className="relative font-roboto font-medium text-[16px]">Shop Now</span>
                                        </Link>
                                        <Link href={''} className={`relative flex items-center justify-center py-[12px] px-[38px] overflow-hidden text-primary bg-transparent border-1 border-subText group rounded-full w-fit`}>
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56"></span>
                                            <span className="relative text-[16px] font-roboto font-medium">Learn More</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='lg:mb-0 mb-[50px]'>
                                    <Image src={BannerImage1} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex lg:flex-row flex-col-reverse items-center justify-between'>
                                <div id="bannerText" className='w-[609px]'>
                                    <h1 className='text-second font-roboto text-[32px] mb-4'>Product Collection</h1>
                                    <p className='text-subText font-roboto text-xl leading-[36px] mb-6'>Welcome to our online fashion haven, where we invite you to embark on a thrilling journey of discovery. We understand that fashion is an expression of your unique personality, and we've curated an extensive collection of dresses, shoes, and more to help you find your new favorites.</p>
                                    <div className='flex items-center gap-[16px]'>
                                        <Link href={''} className={`relative flex items-center justify-center py-[12px] px-[38px]  overflow-hidden text-white bg-primary group rounded-full w-fit`}>
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56"></span>
                                            <span className="relative font-roboto font-medium text-[16px]">Shop Now</span>
                                        </Link>
                                        <Link href={''} className={`relative flex items-center justify-center py-[12px] px-[38px] overflow-hidden text-primary bg-transparent border-1 border-subText group rounded-full w-fit`}>
                                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56"></span>
                                            <span className="relative text-[16px] font-roboto font-medium">Learn More</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='lg:mb-0 mb-[50px]'>
                                    <Image src={BannerImage1} alt="Banner Image" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner