'use client'
import React from 'react'
import CommonHead from '../common/CommonHead'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import Slider from 'react-slick'
import img1 from '../../../public/previewImg1.png'
import img2 from '../../../public/previewImg2.png'
import img3 from '../../../public/previewImg3.png'
import img4 from '../../../public/previewImg4.png'
import "slick-carousel/slick/slick.css";
import SingleDiscount from '../common/SingleDiscount'

const SpecialOffer = () => {
    const settings = {
        className: "center",
        arrows: false,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
    }
    
    const myPro = [
        {
            img: img1,
        },
        {
            img: img2,
        },
        {
            img: img3,
        },
        {
            img: img4,
        },
    ]
  return (
    <>
        <section id='Special-Offer' className='mt-[48px]'>
            <div className="container">
                <div id="Special-Offer-Row">
                    {/* --------------------Header Text--------------------- */}
                    <div className='flex items-center justify-between'>
                        <CommonHead text={'Special Offer:'}/>
                        <Link className='text-primary text-xl flex items-center gap-2 font-bold' href={'/'}>See More <FaPlus /></Link>
                    </div>
                    {/* --------------------Product Slider--------------------- */}
                    <div className="slider-container mt-[77px]">
                        <Slider {...settings}>
                            {
                                myPro.map((item , i)=>(
                                    <SingleDiscount img={item.img} key={i}/>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SpecialOffer