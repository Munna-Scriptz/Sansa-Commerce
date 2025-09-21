'use client'
import React from 'react'
import CommonHead from '../common/CommonHead'

import img1 from '../../../public/previewImg1.png'
import img2 from '../../../public/previewImg2.png'
import img3 from '../../../public/previewImg3.png'
import img4 from '../../../public/previewImg4.png'
import Slider from 'react-slick'
import SingleDiscount from '../common/SingleDiscount'
const Discount = () => {
    const settings = {
            className: "center",
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
        <section id='Discount' className='mt-[112px]'>
            <div className="container">
                <div id="Discount-Row">
                    {/* -----------------Header----------------- */}
                    <CommonHead text={'Discount Products    '}/>
                    {/* -----------------Discount Slider----------------- */}
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

export default Discount