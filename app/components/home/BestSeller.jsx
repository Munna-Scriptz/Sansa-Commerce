import React from 'react'
import CommonHead from '../common/CommonHead'
import SingleSeller from '../common/SingleSeller'

const BestSeller = () => {
  return (
    <>
        <section id='Best-Seller' className='mt-[112px]'>
            <div className="container">
                <div id="Best-Seller-Row">
                    {/* ----------------------Head Text & Tabs-------------------- */}
                    <CommonHead text={'Best Seller Products'}/>
                    <div className='mt-[48px] flex items-center justify-between'>
                        <div className='bg-primary rounded-[8px] h-[4px] max-w-[100%] w-[38%]'></div>

                        <div className="w-[223px] h-[56px] rounded-[8px] border border-borderCol p-1.5 flex items-center justify-between">
                            <input type="radio" name="category" id="clothing" className="hidden peer/clothing" defaultChecked />
                            <label htmlFor="clothing" className="peer-checked/clothing:bg-primary peer-checked/clothing:text-white bg-transparent text-second font-roboto cursor-pointer rounded-[8px] py-2.5 px-5 transition-colors duration-200">Clothing</label>
                            
                            <input type="radio" name="category" id="shoes" className="hidden peer/shoes" />
                            <label htmlFor="shoes" className="peer-checked/shoes:bg-primary peer-checked/shoes:text-white bg-transparent text-second font-roboto cursor-pointer rounded-[8px] py-2.5 px-6.5 transition-colors duration-200">Shoes</label>
                        </div>


                        <div className='bg-primary rounded-[8px] h-[4px] max-w-[100%] w-[38%]'></div>
                    </div>
                    {/* ----------------------Seller Slider-------------------- */}
                    <div className='mt-[77px]'>
                        <SingleSeller/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BestSeller