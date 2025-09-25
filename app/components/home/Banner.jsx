'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SingleBannerSlider from './SingleBannerSlider';

import BannerImage1 from '../../../public/bannerSlide.png'
import BannerImage2 from '../../../public/bannerImg2.png'
import BannerImage3 from '../../../public/bannerImg3.png'

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
                        <SingleBannerSlider image={BannerImage1} headerText={`Product Collection`} subtext={`Welcome to our online fashion haven, where we invite you to embark on a thrilling journey of discovery. We understand that fashion is an expression of your unique personality, and we've curated an extensive collection of dresses, shoes, and more to help you find your new favorites.`}/>
                        <SingleBannerSlider image={BannerImage2} headerText={`Best Quality Over Quantity`} subtext={`Welcome to our online fashion haven, where we invite you to embark on a thrilling journey of discovery. We understand that fashion is an expression of your unique personality, and we've curated an extensive collection of dresses, shoes, and more to help you find your new favorites.`} />
                        <SingleBannerSlider image={BannerImage3} headerText={`Find Clothes That Matches Your Vibe`} subtext={`Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.`} />
                    </Slider>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner