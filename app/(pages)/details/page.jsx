import BreadCrumb from '@/app/components/common/BreadCrumb';
import DetailsPreview from '@/app/components/details/DetailsPreview';
import DetailText from '@/app/components/details/DetailText';
import RecoProducts from '@/app/components/product/RecoProducts';
import Link from 'next/link';
import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6';


const page = () => {
  return (
    <main id='Product-Details-Page'>
        {/* ------------------------ BreadCrumb and back ---------------------------- */}
        <div>
            <BreadCrumb pageName={'Product Details'} />
            <div className="container">
                <Link href={'products'} className='flex items-center gap-4 text-[28px] text-second mt-6'>
                    <FaArrowLeftLong className='text-2xl' />
                    Back
                </Link>
            </div>
        </div>

        {/* ------------------------ Review product ---------------------------- */}
        <div className="container">
            <div className="flex gap-8 py-12">
                {/* ----------------------left Side---------------------- */}
                <DetailsPreview />

                {/* ----------------------Right Side---------------------- */}
                <DetailText />
            </div>
        </div>

        {/* ------------------------ Similar product slide ---------------------------- */}
        <RecoProducts />
    </main>
);

}

export default page