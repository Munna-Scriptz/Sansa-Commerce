import React from 'react'
import Image from 'next/image';
import img1 from '../../../public/whoAreWe.jpg'
import img2 from '../../../public/ourVision.jpg'
import Link from 'next/link';
const page = () => {
  return (
    <main id='About-Us-Page'>
        <div className="container">
            <div className="min-h-screen flex flex-col">
            {/* Hero */}
            <section className="text-center my-12 bg-gray-50">
                <h2 className="text-3xl md:text-4xl font-bold text-second mb-4">About Us</h2>
                <p className="text-gray-600 max-w-3xl text-lg mx-auto">
                Welcome to <span className="text-primary font-semibold">Sansa</span>, 
                your go-to destination for quality products and excellent service. 
                We bring innovation, trust, and customer satisfaction together to 
                create the best shopping experience for you.
                </p>
            </section>

            {/* Content Section */}
            <section className="grid md:grid-cols-2 gap-8 py-12 items-center">
                <div>
                <Image
                    src={img1}
                    alt="Our Team"
                    className="rounded-2xl shadow-lg w-full object-cover"
                />
                </div>
                <div className="space-y-4 text-gray-700">
                <h3 className="text-3xl font-semibold text-second">Who We Are</h3>
                <p className='text-lg'>
                    At <span className="text-primary font-semibold">Sansa</span>, 
                    we’re more than just a brand. We’re a team of passionate individuals 
                    committed to delivering top-quality products with unmatched customer care.
                </p>
                <p className='text-lg'>
                    Our mission is simple: to empower people with products they can trust 
                    and love. We constantly innovate to meet the evolving needs of our community.
                </p>
                </div>
            </section>

            {/* Second Section */}
            <section className="grid md:grid-cols-2 gap-8 py-12 items-center">
                <div className="order-2 md:order-1 space-y-4 text-gray-700">
                <h3 className="text-3xl font-semibold text-second">Our Vision</h3>
                <p className='text-lg'>
                    We aim to be a global leader in providing quality, sustainable, and 
                    affordable products while making every shopping experience smooth and joyful.
                </p>
                <p className='text-lg'>
                    With <span className="text-primary font-semibold">Sansa</span>, 
                    you are not just buying products — you’re joining a community built on trust.
                </p>
                </div>
                <div className="order-1 md:order-2">
                <Image
                    src={img2}
                    alt="Our Vision"
                    className="rounded-2xl shadow-lg w-full object-cover"
                />
                </div>
            </section>

            {/* Bottom Details */}
            </div>
        </div>
            <section className="bg-gray-100 py-12">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <h4 className="text-3xl font-bold text-primary">10+</h4>
                        <p className="text-gray-600 mt-2">Years of Excellence</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-primary">50K+</h4>
                        <p className="text-gray-600 mt-2">Happy Customers</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-primary">100%</h4>
                        <p className="text-gray-600 mt-2">Trusted Quality</p>
                    </div>
                    </div>

                    <div className="max-w-3xl mx-auto text-center mt-12">
                    <h3 className="text-2xl font-semibold text-second mb-4">Join Our Journey</h3>
                    <p className="text-gray-600 mb-6">
                        Be part of the <span className="text-primary font-semibold">Sansa</span> 
                        community and experience shopping like never before. Together, 
                        let’s build a future of innovation, sustainability, and trust.
                    </p>
                    <Link href={'/contact'} className="py-3 rounded-xl bg-primary px-6 cursor-pointer text-white font-semibold hover:opacity-90 transition">
                        Get Started
                    </Link>
                    </div>
                </div>
            </section>
    </main>

);

}

export default page