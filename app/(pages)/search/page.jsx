import BreadCrumb from '@/app/components/common/BreadCrumb'
import FilterProducts from '@/app/components/search/FilterProducts'
import SearchProducts from '@/app/components/search/SearchProducts'
import React from 'react'

const page = () => {
  return (
    <>
        <section id='Search-Page' className='flex items-start gap-[36px]'>
            <FilterProducts />
            {/* -------------Contains Breadcrumb , search text, searchbox, Tabs----------------- */}
            <div className='w-full'>
                <BreadCrumb pageName={'Search'}/>
                <SearchProducts />
            </div>
        </section>
    </>
  )
}

export default page