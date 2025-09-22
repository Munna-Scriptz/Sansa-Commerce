import Link from 'next/link'
import React from 'react'

const BreadCrumb = ({pageName}) => {
  return (
    <>
        <div className='container mt-[36px]'>
            <div className='font-roboto leading-[24px] font-medium text-lg text-[#B3B7B1] flex items-center gap-1'>
                <Link href={'/'}>Home /</Link>
                <p className='text-second'>{pageName}</p>
            </div>
        </div>
    </>
  )
}

export default BreadCrumb