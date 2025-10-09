'use client'
import React from 'react'
import BreadCrumb from '@/app/components/common/BreadCrumb'
import FilterProducts from '@/app/components/search/FilterProducts'
import SearchProducts from '@/app/components/search/SearchProducts'

const page = () => {

  return (
    <>
      <section id='Search-Page' className='flex items-start gap-[36px]'>
        {/* -------------Contains Filter Functions----------------- */}
        <div className='lg:block hidden'>
          <FilterProducts />
        </div>

        {/* -------------Contains Breadcrumb , search text, searchbox, Tabs, filter for small devices----------------- */}
        <div className='flex-1'>
          <BreadCrumb pageName={'Search'}/>
          <SearchProducts />
        </div>

      </section>
    </>
  )
}

export default page