import React from 'react'
import Banner from './components/home/Banner'
import { Brands } from './components/home/Brands'
import BestSeller from './components/home/BestSeller'

const page = () => {
  return (
    <>
      <Banner/>
      <Brands/>
      <BestSeller/>
    </>
  )
}

export default page