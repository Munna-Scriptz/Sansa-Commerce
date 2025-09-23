import React from 'react'
import Tabs from '../common/Tabs'
import CommonHead from '../common/CommonHead'
import img1 from '../../../public/previewImg1.png'
import img2 from '../../../public/previewImg2.png'
import img3 from '../../../public/previewImg3.png'
import img4 from '../../../public/previewImg4.png'
import SingleSearchPro from '../common/SingleSearchPro'


const SearchProducts = () => {
  const myPro = [
          {
              img: img1,
          },
          {
              img: img2,
          },
          {
              img: img3,
          },
          {
              img: img4,
          },
          {
              img: img1,
          },
          {
              img: img2,
          },
          {
              img: img3,
          },
          {
              img: img4,
          },
          {
              img: img1,
          },
          {
              img: img2,
          },
          {
              img: img3,
          },
          {
              img: img4,
          },
  ]
  return (
    <>
      <Tabs/>
      <div className='container'>
        {/* ---------------------Result Text And Sort-------------------- */}
        <div className='mt-[48px] flex items-center justify-between'>
          <CommonHead text={'Show results for shirts'}/>  
          <div className='flex items-center justify-between'>
            <fieldset className='w-[188px] h-[64px] pb-3 border-1 border-[#8D918C] rounded-[8px]'>
              <legend className='text-subText text-base ml-6 px-2'>Sort</legend>
              <div className='flex items-center gap-3 h-full w-full px-3'>
                <select className='w-full text-subText font-medium outline-none h-full' name="Lang" id="Select">
                  <option value="Most relevant">Most relevant</option>
                  <option value="New Products">New Products</option>
                  <option value="Low to high">Low to high</option>
                  <option value="High to low rating">High to low rating</option>
                  <option value="Top Products">Top Products</option>
                </select>
              </div>
            </fieldset>
          </div>
        </div>

        {/* ---------------------Result Products-------------------- */}
        <div className='mt-[48px] flex items-center flex-wrap justify-between gap-y-[48px]'>
          {
            myPro.map((item , i)=>(
              <SingleSearchPro img={item.img} key={i}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default SearchProducts