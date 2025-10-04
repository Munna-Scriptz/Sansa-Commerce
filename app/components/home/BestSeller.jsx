'use client'
import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import SingleSeller from '../common/SingleSeller'
import Slider from 'react-slick'

const BestSeller = () => {
  const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        arrows: false,
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

  // ------------------ Switching Tabs -------------------
  const [showTab , setShowTab] = useState('tab1')

  // ---------------------- Api -------------------------
  const [product , setProduct] = useState([])
  
  useEffect(()=>{

    const handleApi = async ()=>{

      const response = await fetch('https://api.escuelajs.co/api/v1/products')

      try{
        const result = await response.json()
        setProduct(result)
      }catch(err){
        console.log(err)
      }
      
    }

    handleApi()
  }, [])
  return (
    <>
        <section id='Best-Seller' className='md:mt-[112px] mt-[82px]'>
            <div className="container">
                <div id="Best-Seller-Row">
                    {/* ------------------------------------ Head Text & Tabs ----------------------------- */}
                    <CommonHead text={'Best Seller Products'}/>
                    <div className='mt-[48px] flex items-center justify-between'>
                        <div className='bg-primary rounded-[8px] h-[4px] max-w-[100%] md:w-[38%] w-[30%]'></div>

                        <div className="w-[223px] h-[56px] rounded-[8px] border border-borderCol p-1.5 flex items-center justify-between">
                            <input type="radio" name="category" id="clothing" className="hidden peer/clothing" defaultChecked />
                            <label onClick={()=>setShowTab('tab1')} htmlFor="clothing" className="peer-checked/clothing:bg-primary peer-checked/clothing:text-white bg-transparent text-second font-roboto cursor-pointer rounded-[8px] py-2.5 px-5 transition-colors duration-200">Clothing</label>
                            
                            <input onClick={()=>setShowTab('tab2')} type="radio" name="category" id="shoes" className="hidden peer/shoes" />
                            <label htmlFor="shoes" className="peer-checked/shoes:bg-primary peer-checked/shoes:text-white bg-transparent text-second font-roboto cursor-pointer rounded-[8px] py-2.5 px-6.5 transition-colors duration-200">Shoes</label>
                        </div>

                        <div className='bg-primary rounded-[8px] h-[4px] max-w-[100%] md:w-[38%] w-[30%]'></div>
                    </div>

                    {/* ---------------------------------- Seller Slider ----------------------------------- */}
                    {
                        showTab === 'tab1'?
                            <div className="slider-container md:mt-[77px] mt-[40px]">
                                <Slider {...settings}>
                                    {
                                        product.map((item , i)=>(
                                          <SingleSeller img={item?.images[1]} proName={item.title} proDetails={item.description} proPrice={item.price} key={i}/>
                                        ))
                                    }
                                </Slider>
                            </div>
                            :
                            <div className="slider-container md:mt-[77px] mt-[40px]">
                                <Slider {...settings}>
                                  {
                                        product.slice(0, 20).map((item , i)=>(
                                          <SingleSeller img={item.images[1]} proName={item.title} proDetails={item.description} proPrice={item.price} key={i}/>
                                        ))
                                    }
                                </Slider>
                            </div>
                    }

                </div>
            </div>
        </section>
    </>
  )
}

export default BestSeller