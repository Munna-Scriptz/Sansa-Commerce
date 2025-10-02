'use client'
import React from "react";
import SingleBrand from '../common/SingleBrand'
import Slider from "react-slick";

export const Brands = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
  }

  return (
    <>

    <section id='Brands_Slider' className='mt-[72px] mb-6 md:mt-[88px] md:mb-[40px] pb-20 md:px-0'>
      <div className="container">
        {/* --------Common Head-------- */}
        <div className='mb-[40px]'></div>

        {/* --------Slider-------- */}
          <div>
            <div className="slider-Brand-container">
              <Slider {...settings}>
                <SingleBrand BrandHead={`Top Sells`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`Best Quality`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`Accessories`} BrandP={`Explore accessories`}/>
                <SingleBrand BrandHead={`Baggy Clothes`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`New Arrival`} BrandP={`Starting at $19`}/>
                <SingleBrand BrandHead={`Trending`} BrandP={`Starting at $24`}/>
                <SingleBrand BrandHead={`Most Viewed`} BrandP={`Explore accessories`}/>
              </Slider>
            </div>
          </div>
      </div>
        
    </section>

    </>
  )
}
