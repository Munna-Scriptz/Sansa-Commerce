import React from 'react'
import Banner from './components/home/Banner'
import { Brands } from './components/home/Brands'
import BestSeller from './components/home/BestSeller'
import Discount from './components/home/Discount'
import Counter from './components/home/Counter'
import Order from './components/home/Order'

const page = () => {
  return (
    <>
      <Banner/>
      <Brands/>
      <BestSeller/>
      <Counter/>
      <Discount/>
      <Order/>
    </>
  )
}

export default page