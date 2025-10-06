'use client'
import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import Slider from 'react-slick'
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
  
  // ------------------- APi product
  const [product , setProduct] = useState([])

  useEffect(()=>{

    const handleApi = async ()=>{
      const response = await fetch('https://api.escuelajs.co/api/v1/products')

      try{
        const result = await response.json()
        setProduct(result)
      } catch(err){
        console.log(err)
      }
    }
    handleApi()
  }, [])
  return (
    <>
        <section id='Special-Offer' className='mt-[48px]'>
            <div className="container">
                <div id="Special-Offer-Row">
                    {/* --------------------Header Text--------------------- */}
                    <div className='flex items-center justify-between'>
                        <CommonHead text={'Special Offer:'}/>
                        <Link className='text-primary md:text-xl text-sm flex items-center gap-2 font-bold' href={'/'}>See More <FaPlus /></Link>
                    </div>
                    {/* --------------------Product Slider--------------------- */}
                    <div className="slider-container mt-[77px]">
                        <Slider {...settings}>
                            {
                                product.slice(0,15).map((item , i)=>(
                                    <SingleDiscount img={item?.images[1]} proName={item.title} proDetails={item.description} proPrice={item.price} key={i}/>
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