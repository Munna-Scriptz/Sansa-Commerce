import React from 'react'
import CommonHead from '../common/CommonHead'

const Touch = () => {
  return (
    <>
        <section id='Touch' className='mt-[112px]'>
            <div className="container">
                <div id="Touch-Row">
                    {/* --------------------Head Text----------------------------- */}
                    <CommonHead text={'Stay In Touch'}/>
                    {/* --------------------Head Text----------------------------- */}
                    <div className='p-[36px] border-1 border-[#DADFD8] rounded-[24px] mt-[85px]'>
                        <div className='mb-[32px]'>
                            <h2 className='text-second text-[28px] font-medium text-center'>Sign up as our customer</h2>
                            <p className='mt-4 text-subText text-center'>Please enter your information</p>
                        </div>

                        {/* ---------------Inputs----------------- */}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Touch