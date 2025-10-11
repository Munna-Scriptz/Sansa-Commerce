'use client'
import React, { useEffect, useState } from 'react'
import { IoArrowRedoOutline, IoSearch } from 'react-icons/io5'
import { CgArrowTopLeft } from "react-icons/cg";
import { useRouter } from 'next/navigation';
import noPro from '../../../public/searchNotFound.svg'
import Image from 'next/image';

const SearchFilter = ({searchHook , searchSetHook}) => {
    // ---------------------- Catch the input data 
    const [value , setValue] = useState('')
    const [loader , setLoader] = useState(false)
    const [product , setProduct] = useState([])
    const [searchPro , setSearchPro] = useState([]) 
    // ---------------------- Api -------------------------
    
    useEffect(()=>{

      const handleApi = async ()=>{

        const response = await fetch('https://dummyjson.com/products/categories')

        try{
          const result = await response.json()
          setProduct(result)
        }catch(err){
          console.log(err)
        }
        
      }
      
      handleApi()
    }, [])
    

    // --------------------------- FIltering category by search 

    const handleSearch = ()=>{
        const categoryList = product.filter((items)=> items.name.toLowerCase().includes(value.toLocaleLowerCase()))
        setSearchPro(categoryList)
    }

    // ------------------------------ Handle Navigation
    const router = useRouter()

    const handleNav = (e)=>{
        setLoader(true)
        setTimeout(() => {
            router.push(`/search?category=${e.url}`)
            setLoader(false)
        }, 1500);
    }
  return (
    <>
        {/* -------------------------- Loader  */}
        <div className={`${loader ? '' : 'hidden'} LoaderDiv z-50 fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-[#0000007a]`}><div className="loader"></div></div>
        <section className={`${searchHook? 'top-20' : '-top-160 '} absolute lg:w-auto w-full duration-900 md:right-10 bg-brand pt-[20px] pb-[30px] z-10 rounded-[12px]`}>
            <form className='px-[32px]'>
                <fieldset className='md:w-[370px] w-full h-[64px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
                    <legend className='text-subText text-base ml-6 px-2'>Search</legend>
                    <div className='flex items-center justify-between h-full w-full px-3'>
                        <div className='flex items-center h-full w-full'>
                            <IoSearch className='text-2xl text-subText' />
                            <input onChange={(e)=>{setValue(e.target.value) , handleSearch()}} value={value} className='h-full pl-3 text-second w-full outline-none' placeholder='Search All Assets' type="search" id="search" />
                        </div>
                        <button type='submit' className='text-2xl cursor-pointer text-subText'>
                            <IoArrowRedoOutline />
                        </button>
                    </div>
                </fieldset>
            </form>

            {/* -------------- APi categories  */}
            {
                value == ''?
                ''
                :
                <div>
                    {
                        searchPro.length == 0?
                        <div className='flex flex-col gap-6 items-center justify-center pt-[50px] pb-[20px]'>
                            <Image src={noPro} alt='No product Found'/>
                            <h2 className='text-center text-2xl text-second'>Product not found...</h2>
                        </div>
                        :
                        <div className={`${searchPro.length == 0? 'max-h-auto' : 'max-h-[480px]'} mt-6 overflow-scroll overflow-x-hidden`}>
                            {
                                searchPro.map((item , i)=>(
                                    <div key={i} onClick={()=>{handleNav(item) , searchSetHook() , setValue('')}} className='px-[24px] py-[12px] border-b-1 cursor-pointer border-gray-300 flex items-center justify-between bg-[#e1ffb3] hover:bg-[#caff7a] duration-300 '>
                                        <h2 className='text-second text-lg font-medium'>{item.name}</h2>
                                        <CgArrowTopLeft className='text-2xl'/>
                                    </div>
                                ))
                            }

                        </div>
                    }
                </div>
            }
        </section>
    </>
  )
}

export default SearchFilter