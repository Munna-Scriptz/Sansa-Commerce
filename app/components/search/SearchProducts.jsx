'use client'
import React, { useEffect, useState } from 'react'
import Tabs from '../common/Tabs'
import CommonHead from '../common/CommonHead'
import SingleSearchPro from '../common/SingleSearchPro'
import { IoFilter } from 'react-icons/io5'
import FilterProducts from './FilterProducts'
import { useDispatch } from 'react-redux'
import { CartReducer } from '@/app/redux/cartSlice'
import { Bounce, toast } from 'react-toastify'
import { useRouter, useSearchParams } from 'next/navigation'
import Loading from '@/app/loading'


const SearchProducts = () => {
  // ------------------------ Filter 
  const [filter , showFilter] = useState(true)
  
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  // ---------------------- Api -------------------------
    const [product , setProduct] = useState([])
    
    useEffect(()=>{
  
      const handleApi = async ()=>{
  
        const response = await fetch(`${category}`)
  
        try{
          const result = await response.json()
          setProduct(result.products)
        }catch(err){
          console.log(err)
        }
        
      }
  
      handleApi()
    }, [searchParams])
  
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
    setLoader(true)
    setTimeout(() => {
      router.push(`/details?productId=${e.id}`)
      setLoader(false)
    }, 1500);
  }
  return (
    <>
      {
        loader && <Loading />
      }
      <Tabs/>
      <div className='container'>
        {/* ---------------------Result Text And Sort-------------------- */}
        <div className='mt-[48px] flex lg:flex-row flex-col lg:items-center items-start justify-between'>
          <CommonHead text={'Show results for shirts'}/>  

          <div className='items-center justify-between lg:flex hidden'>
            <fieldset className='w-[188px] h-[64px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
              <legend className='text-subText text-base ml-6 px-2'>Sort</legend>
              <div className='flex items-center gap-3 h-full w-full px-3'>
                <select className='w-full text-subText font-medium outline-none h-full' name="Lang" id="Select">
                  <option value="Most relevant">Most relevant</option>
                  <option value="New Products">New Products</option>
                  <option value="Low to high">Low to high</option>
                  <option value="High to low rating">High to low rating</option>
                  <option value="Top Products">Top Products</option>
                </select>
              </div>
            </fieldset>
          </div>

          {/* --------------- Filter for small devices  */}
          <div onClick={()=>showFilter(!filter)} className='flex items-center justify-center gap-3 mt-5 cursor-pointer lg:hidden'>
            <p className='text-subText text-xl'>Filter</p>
            <IoFilter className='text-subText text-xl'/>
          </div>
        </div>
        {/* ------Button Menu------ */}
        <div className={`fixed top-0 left-0 w-full h-screen duration-[.3s] lg:hidden  ${filter? 'z-[-10]' : 'z-[40]'}`}>
            <div onClick={()=>showFilter(!filter)} className={`w-full h-screen duration-[.3s] absolute top-0 left-0 bg-[#00000070] ${filter? 'hidden' : 'visible'}`}></div>
            <div className={`h-screen overflow-y-scroll w-[80%] absolute top-0 bg-white lg:p-5 p-2 duration-[.8s] shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50 ${filter? ' translate-x-[-520px] md:translate-x-[-740px] ' : ' translate-x-[-0px]'}`}>
                <FilterProducts />
            </div>
        </div>
        {/* ---------------------Result Products-------------------- */}
        <div className='mt-[48px] flex items-center flex-wrap justify-between gap-y-[48px]'>
          {
            product.map((item , i)=>(
              <SingleSearchPro cartAdd={()=>handleCart(item.id)} navigate={()=>handleNav(item)} img={item.thumbnail} proName={item.title} proDetails={item.description} proPrice={item.price} key={i}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SearchProducts