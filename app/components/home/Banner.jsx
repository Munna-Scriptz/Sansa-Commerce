'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SingleBannerSlider from './SingleBannerSlider';

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
                        <SingleBannerSlider />
                        <SingleBannerSlider />
                        <SingleBannerSlider />
                    </Slider>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner