'use client'
import BreadCrumb from '@/app/components/common/BreadCrumb';
import DetailsPreview from '@/app/components/details/DetailsPreview';
import DetailText from '@/app/components/details/DetailText';
import RecoProducts from '@/app/components/product/RecoProducts';
import { CartReducer } from '@/app/redux/cartSlice';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { Bounce, toast, ToastContainer } from 'react-toastify';


const page = () => {

    const searchParams = useSearchParams();
    const getPro = searchParams.get("productId");


    // ---------------------- Api -------------------------
    const [product , setProduct] = useState([])

    const mappedProduct = product?.filter((item)=>{
      return getPro == item.id
    })
    console.log(mappedProduct)

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
  return (
    <main id='Product-Details-Page'>
        {/* ------------------------ BreadCrumb and back ---------------------------- */}
        <div>
            <BreadCrumb pageName={'Product Details'} />
            <div className="container">
                <Link href={'product'} className='flex items-center gap-4 text-[28px] text-second mt-6'>
                    <FaArrowLeftLong className='text-2xl' />
                    Back
                </Link>
            </div>
        </div>

        {/* ------------------------ Review product ---------------------------- */}
        <div className="container">
                {
                    mappedProduct.map((item , index)=>(
                        <div key={index} className="flex gap-8 py-12">
                            {/* ----------------------left Side---------------------- */}
                            <DetailsPreview mainImg={item.thumbnail} subImg1={item.images[1]} SubImg2={item.images[2]} />
                            {/* ----------------------Right Side---------------------- */}
                            <DetailText addCart={()=>handleCart(item.id)} title={item.title} description={item.description} rating={item.rating} price={item.price} totalReview={item.minimumOrderQuantity} code={item.sku} />
                        </div>
                    ))
                }
        </div>

        {/* ------------------------ Similar product slide ---------------------------- */}
        <RecoProducts />
    </main>
);

}

export default page