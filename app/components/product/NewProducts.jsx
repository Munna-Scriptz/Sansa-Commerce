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
import SingleSeller from '../common/SingleSeller'
import "slick-carousel/slick/slick.css";

const NewProducts = () => {
    const settings = {
        className: "center",
        arrows: false,
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerPadding: "0px",
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
        }
      }
      ]
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
        <section id='New-PRoducts' className='mt-[88px]'>
            <div className="container">
                <div id="New-PRoducts-Row">
                    {/* --------------------Header Text--------------------- */}
                    <div className='flex items-center justify-between'>
                        <CommonHead text={'New Products:'}/>
                        <Link className='text-primary md:text-xl text-sm flex items-center gap-2 font-bold' href={'/'}>See More <FaPlus /></Link>
                    </div>
                    {/* --------------------Product Slider--------------------- */}
                    <div className="slider-container mt-[77px]">
                        <Slider {...settings}>
                            {
                                myPro.map((item , i)=>(
                                    <SingleSeller img={item.img} key={i} proName={'Warning T-Shirt'} proDetails={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, enim?'} proPrice={'8.00 USD'}/>
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

export default NewProducts