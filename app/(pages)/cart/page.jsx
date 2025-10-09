'use client'
import CartHead from '@/app/components/cart/CartHead'
import CartProduct from '@/app/components/cart/CartProduct'
import Summery from '@/app/components/cart/Summery'
import { CartReducer } from '@/app/redux/cartSlice'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { LuTags } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { Bounce, toast } from 'react-toastify'
import noProducts from '../../../public/noProduct.svg'

const page = () => {
  const productId = useSelector(state => state.MyRedux.value)
  const dispatch = useDispatch()
  // ---------------------- Api -------------------------
    const [product , setProduct] = useState([])

    const mappedProduct = product?.filter((item)=>{
      return productId?.includes(item.id)
    })
    console.log(product)
    useEffect(()=>{
  
      const handleApi = async ()=>{
  
        const response = await fetch(`https://dummyjson.com/products?limit=0`)
  
        try{
          const result = await response.json()
          setProduct(result.products)
        }catch(err){
          console.log(err)
        }
        
      }
  
      handleApi()
    }, [])




  // ------------------ Handle delete 
  const handleDlt = (id)=>{
    const updatedPro = productId.filter(item => item !== id)
    localStorage.setItem('productId' , JSON.stringify(updatedPro))
    dispatch(CartReducer(updatedPro))

    // -------------------------- Toaster 
    toast.success('Product deleted successfully', {
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
      <CartHead />
      {/* ----------------------Product And The Summery----------------------- */}
      <main className='mt-[48px]'>
        <div className="container">
          {
            mappedProduct.length == 0?
            <div className='flex flex-col items-center justify-center'>
              <Image className='w-[200px]' src={noProducts} alt='No Products yet...'/>
              <p className='text-lg text-second'>You don't have any products at cart yet...</p>
            </div>
            :
            <div id="Product-Row" className='flex lg:flex-row flex-col items-start justify-between gap-5'>
              {/* ---------------------- Product ------------------ */}
              <section className='lg:w-[775px] w-full rounded-[24px] bg-[#FBFBFB] lg:p-6'>
                <div className='flex flex-col gap-6'>
                  {
                    mappedProduct.map((item , i)=>(
                      <CartProduct key={i} image={item.thumbnail} proName={item.title} proDetails={item.description} proPrice={item.price} handleDlt={()=>handleDlt(item.id)} />
                    ))
                  }
                </div>

                {/* --------------Promo Code  */}
                <div className='w-full h-[1px] bg-[#E1E4D5] mt-[68px]'></div>
                <fieldset className='w-full h-[70px] pb-3 border-1 border-[#8D918C] rounded-[8px] mt-8'>
                  <legend className='text-subText text-base ml-6 px-2'>Code</legend>
                  <div className='flex items-center gap-3 h-full w-full px-3'>
                    <LuTags className='text-2xl text-subText' />
                    <input className='w-full text-subText lg:text-base text-sm font-medium outline-none h-full' type="user" id="user" placeholder='Enter promotion code to get discount'/>
                  </div>
                </fieldset>
              </section>

              {/* ---------------------- Summery ------------------ */}
              <Summery path={'/shipping'} />

            </div>
          }
        </div>
      </main>
    </>
  )
}

export default page