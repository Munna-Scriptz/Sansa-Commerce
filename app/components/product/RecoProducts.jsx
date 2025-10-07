'use client'
import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import Link from 'next/link'
import { FaPlus } from 'react-icons/fa6'
import Slider from 'react-slick'
import SingleSeller from '../common/SingleSeller'
import "slick-carousel/slick/slick.css";
import { useDispatch } from 'react-redux'
import { CartReducer } from '@/app/redux/cartSlice'
import { Bounce, toast } from 'react-toastify'

const RecoProducts = () => {
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
      const response = await fetch('https://dummyjson.com/products')

      try{
        const result = await response.json()
        setProduct(result.products)
      } catch(err){
        console.log(err)
      }
    }
    handleApi()
  }, [])

  // ---------------------------------- Handle cart 
  const dispatch = useDispatch()

  const handleCart = (id)=>{
    const myArr = JSON.parse(localStorage.getItem('productId')) || []
    myArr.push(id)
    localStorage.setItem('productId' , JSON.stringify(myArr) )
    dispatch(CartReducer(JSON.parse(localStorage.getItem('productId'))))

    // ------------------------------- Toaster 
    toast.success('Product added to your cart!', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }

  return (
    <>
        <section id='Recommended-Products' className='mt-[88px]'>
            <div className="container">
                <div id="Recommended-Products-Row">
                    {/* --------------------Header Text--------------------- */}
                    <div className='flex items-center justify-between'>
                        <CommonHead text={'Recommended Products:'}/>
                        <Link className='text-primary md:text-xl text-sm flex items-center gap-2 font-bold' href={'/'}>See More <FaPlus /></Link>
                    </div>
                    {/* --------------------Product Slider--------------------- */}
                    <div className="slider-container mt-[77px]">
                        <Slider {...settings}>
                            {
                                product.slice(20,30).map((item , i)=>(
                                    <SingleSeller cartAdd={()=>handleCart(item.id)} img={item.thumbnail} proName={item.title} proDetails={item.description} proPrice={item.price} key={i}/>
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

export default RecoProducts