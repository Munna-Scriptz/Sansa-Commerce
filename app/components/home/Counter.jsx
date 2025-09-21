'use client'
import React from 'react'
import CommonHead from '../common/CommonHead'
import CountUp from 'react-countup';
const Counter = () => {
  return (
    <>
        <section id='Counter' className='bg-[#F3F3F3] py-15 mt-[112px]'>
            <div className="container">
                <div id="Counter-Row">
                    {/* -------------------Head Text------------------------- */}
                    <CommonHead text={'Why You Picking Us'}/>
                    {/* -------------------Counter------------------------- */}
                    <div className='mt-[68px] flex items-center justify-between'>
                        <div className='p-6 border-1 border-[#C5C8B9] rounded-[12px] w-[280px]'>
                            <h2 className='text-primary font-bold text-[56px] font-roboto'>
                                <CountUp start={0} end={1000} useEasing={true} redraw={true}/>+
                            </h2>
                            <p className='text-subText font-roboto text-lg'>Brands</p>
                        </div>
                        <div className='p-6 border-1 border-[#C5C8B9] rounded-[12px] w-[280px]'>
                            <h2 className='text-primary font-bold text-[56px] font-roboto'>
                                <CountUp start={0} end={3500} useEasing={true} redraw={true}/>+
                            </h2>
                            <p className='text-subText font-roboto text-lg'>Customers</p>
                        </div>
                        <div className='p-6 border-1 border-[#C5C8B9] rounded-[12px] w-[280px]'>
                            <h2 className='text-primary font-bold text-[56px] font-roboto'>
                                <CountUp start={0} end={350} useEasing={true} redraw={true}/>+
                            </h2>
                            <p className='text-subText font-roboto text-lg'>Partners</p>
                        </div>
                        <div className='p-6 border-1 border-[#C5C8B9] rounded-[12px] w-[280px]'>
                            <h2 className='text-primary font-bold text-[56px] font-roboto'>
                                <CountUp start={0} end={50} useEasing={true} redraw={true}/>+
                            </h2>
                            <p className='text-subText font-roboto text-lg'>Employees</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Counter