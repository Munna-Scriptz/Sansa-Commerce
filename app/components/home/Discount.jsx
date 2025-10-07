'use client'
import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'

import img1 from '../../../public/previewImg1.png'
import img2 from '../../../public/previewImg2.png'
import img3 from '../../../public/previewImg3.png'
import img4 from '../../../public/previewImg4.png'
import Slider from 'react-slick'
import SingleDiscount from '../common/SingleDiscount'
import { useDispatch } from 'react-redux'
import { CartReducer } from '@/app/redux/cartSlice'
import { Bounce, toast } from 'react-toastify'
const Discount = () => {
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
          slidesToShow:1,
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

  const [product , setProduct] = useState([])
  
  useEffect(()=>{
    const fetchPro = async ()=>{
      const response = await fetch('https://dummyjson.com/products')
      try{
        const result = await response.json()
        setProduct(result.products)
      } catch(err){
        console.log(err)
      }
    }
    
    fetchPro()
  } , [])
  
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
        <section id='Discount' className='mt-[112px]'>
            <div className="container">
                <div id="Discount-Row">
                    {/* ----------------- Header Text ----------------- */}
                    <CommonHead text={'Discount Products'}/>

                    {/* ----------------- Discount Slider ----------------- */}
                    <div className="slider-container md:mt-[77px] mt-10">
                        <Slider {...settings}>
                            {
                                product.slice(20,40).map((item , i)=>(
                                    <SingleDiscount cartAdd={()=>handleCart(item.id)} key={i} img={item.thumbnail} proName={item.title} ProDetails={item.description} proPrice={item.price}/>
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