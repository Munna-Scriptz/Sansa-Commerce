import React from 'react'

const Location = () => {
  return (
    <>
        <section id='Location' className='mt-[100px]'>
            <div className="container">
                <div id="Location-Row" className='rounded-[20px]'>
                  <div className="relative w-full h-[314px] rounded-[20px] overflow-hidden">
                    <iframe
                      className="w-full h-full outline-none"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5844997035992!2d90.3973168743956!3d23.868883784219154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c59ad99e526d%3A0x8301be280dfeb039!2sCreative%20IT%20Institute%2C%20Uttara%20Campus!5e0!3m2!1sen!2sbd!4v1758272357582!5m2!1sen!2sbd"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute inset-0 bg-[#0c0c0c2a] pointer-events-none"></div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Location