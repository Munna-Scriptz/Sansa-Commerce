'use client'
import React, { useEffect, useState } from 'react'
import CommonHead from '../common/CommonHead'
import SingleSeller from '../common/SingleSeller'
import Slider from 'react-slick'
import { useDispatch } from 'react-redux'
import { CartReducer } from '@/app/redux/cartSlice'
import { Bounce, toast } from 'react-toastify'
import Loading from '@/app/loading'
import { useRouter } from 'next/navigation'

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

      const response = await fetch('https://dummyjson.com/products')

      try{
        const result = await response.json()
        setProduct(result.products)
      }catch(err){
        console.log(err)
      }
      
    }

    handleApi()
  }, [])

  // --------------------- Handle cart 
  const dispatch = useDispatch()
  
  const handleCart = (id)=>{
    const myArr = JSON.parse(localStorage.getItem('productId')) || []
    myArr.push(id)
    localStorage.setItem('productId' , JSON.stringify(myArr) )
    dispatch(CartReducer(JSON.parse(localStorage.getItem('productId'))))

    // ----------------------------- Toaster 
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
  
  // ------------------------------ Handle Navigation
    const router = useRouter()
    const [loader , setLoader] = useState(false)

    const handleNav = (e)=>{
      console.log('hello world')
        setLoader(true)
        setTimeout(() => {
          router.push(`/details?category=${e.url}`)
          setLoader(false)
        }, 1500);
    }

  return (
    <>
    {
      loader && <Loading />
    }
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
                                        product.slice(0,20).map((item , i)=>(
                                          <SingleSeller cartAdd={()=>handleCart(item.id)} navigate={()=>handleNav(item)} img={item.thumbnail} proName={item.title} proDetails={item.description} proPrice={item.price} key={i}/>
                                        ))
                                    }
                                </Slider>
                            </div>
                            :
                            <div className="slider-container md:mt-[77px] mt-[40px]">
                                <Slider {...settings}>
                                  {
                                        product.slice(20, 30).map((item , i)=>(
                                          <SingleSeller cartAdd={()=>handleCart(item.id)} navigate={()=>handleNav(item)} img={item.thumbnail} proName={item.title} proDetails={item.description} proPrice={item.price} key={i}/>
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