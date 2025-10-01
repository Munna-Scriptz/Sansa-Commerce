import React from 'react'

const CommonHead = ({text}) => {
  return (
    <>
        <div className='flex items-center justify-center'>
            <h2 className='text-second font-roboto md:text-[24px] text-[22px] leading-[28px] relative after:w-full after:h-[2px] after:bg-primary after:absolute after:-bottom-2 after:left-0'>{text}</h2>
        </div>
    </>
  )
}

export default CommonHead