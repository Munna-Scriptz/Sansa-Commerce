import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const SingleBannerSlider = ({image , headerText , subtext}) => {
  return (
    <>
        <div>
            <div className='flex lg:flex-row flex-col-reverse items-center justify-between'>
                {/* ---------------Banner Text-------------- */}
                <div id="bannerText" className='md:w-[609px] w-full'>
                    <h1 className='text-second font-roboto md:text-[32px] text-[26px] md:mb-4 mb-3'>{headerText}</h1>
                    <p className='text-subText font-roboto md:text-xl text-sm md:leading-[36px] leading-[25px] mb-6'>{subtext}</p>
                    <div className='flex items-center gap-[16px]'>
                        <Link href={'/search'} className={`relative flex items-center justify-center py-[12px] md:px-[38px] px-[32px] overflow-hidden text-white bg-primary group rounded-full w-fit`}>
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative font-roboto font-medium md:text-[16px] text-sm">Shop Now</span>
                        </Link>
                        <Link href={'/contact'} className={`relative flex items-center justify-center py-[12px] md:px-[38px] px-[32px] overflow-hidden text-primary bg-transparent border-1 border-subText group rounded-full w-fit`}>
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-second rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative md:text-[16px] text-sm font-roboto font-medium">Learn More</span>
                        </Link>
                    </div>
                </div>
                {/* --------------Banner Image--------------- */}
                <div className='md:mb-0 mb-[30px]'>
                    <Image src={image} alt="Banner Image" />
                </div>
            </div>
        </div>
    </>
  )
}

export default SingleBannerSlider