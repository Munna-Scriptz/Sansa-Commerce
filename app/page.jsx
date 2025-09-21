import React from 'react'
import Banner from './components/home/Banner'
import { Brands } from './components/home/Brands'
import BestSeller from './components/home/BestSeller'
import Discount from './components/home/Discount'

const page = () => {
  return (
    <>
      <Banner/>
      <Brands/>
      <BestSeller/>
      <Discount/>
    </>
  )
}

export default page