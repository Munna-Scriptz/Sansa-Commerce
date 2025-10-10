'use client'
import React, { useState } from 'react'
import proImg from '../../../public/previewImg1.png'
import noImg from '../../../public/imgNotFound.svg'
import Image from 'next/image'

const DetailsPreview = ({mainImg , subImg1 , SubImg2}) => {
    const [selectedImg, setSelectedImg] = useState(0);
    // ---------Images---------
    const images = [
        mainImg || noImg,
        subImg1 || noImg,
        SubImg2 || noImg,
    ];

  return (
    <>
        <div className="flex lg:flex-row-reverse flex-col gap-4 lg:w-[775px] w-full lg:h-[678px] h-[470px]">
            {/* -------Big Image------  */}
            <div className="w-full bg-white rounded-lg overflow-hidden flex items-center justify-center">
                <Image width={200} height={200} src={images[selectedImg]} alt={`Main ${selectedImg}`} className="w-full h-full object-contain transition-all duration-300 rounded-m" />
            </div>

            {/* -------SMall Image------ */}
            <div className="flex lg:flex-col flex-row gap-4">
                {images.map((src, index) => (
                <button
                    key={index}
                    onClick={() => setSelectedImg(index)}
                    className={`border-2 ${selectedImg === index ? "border-blue-600" : "border-transparent"} rounded-md overflow-hidden lg:w-[140px] w-[100px] lg:h-[148px]`}
                >
                    <Image width={200} height={200} src={src} alt={`Thumb ${index}`} className="w-full cursor-pointer h-full object-cover" />
                </button>
                ))}
            </div>
        </div>
    </>
  )
}

export default DetailsPreview