import BreadCrumb from '@/app/components/common/BreadCrumb'
import Tabs from '@/app/components/common/Tabs'
import BestSelling from '@/app/components/product/BestSelling'
import NewProducts from '@/app/components/product/NewProducts'
import RecoProducts from '@/app/components/product/RecoProducts'
import SpecialOffer from '@/app/components/product/SpecialOffer'
import React from 'react'

const page = () => {
  return (
    <>
      <BreadCrumb pageName={'Product'}/>
      {/* ------------Contains search text, searchbox, product tabs------------- */}
      <Tabs/>
      {/* ------------Best Selling Products------------- */}
      <BestSelling />
      {/* ------------New Products------------- */}
      <NewProducts />
      {/* ------------Recommended Products------------- */}
      <RecoProducts />
      {/* ------------Special Offer Products------------- */}
      <SpecialOffer />
    </>
  )
}

export default page