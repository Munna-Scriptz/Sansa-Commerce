import BreadCrumb from '@/app/components/common/BreadCrumb'
import Tabs from '@/app/components/common/Tabs'
import React from 'react'

const page = () => {
  return (
    <>
      <BreadCrumb pageName={'Product'}/>
      {/* ------------Includes search text, searchbox, product tabs------------- */}
      <Tabs/>
    </>
  )
}

export default page