import React from 'react'
import ClientsBg from '../assets/clients_bg.png'

const WhatClientsSay = () => {
  return (
    //div for Client Testimonial section
    <div className='h-max w-full max-w-[1280px] text-[#f5f5f5] mx-auto my-40'>
        {/* background image for Testimonial section */}
        <img src={ClientsBg} alt="background design right" className='absolute right-0' />
        <h1 className='mx-auto p-4 md:text-6xl sm:text-5xl text-4xl uppercase text-center font-extrabold my-20'>What Clients Say</h1>
        {/* Testimonial section navbar */}
        <div className='flex w-max h-max border-[1.5px] border-[#2B2B2B] rounded-[30px] mx-auto my-20'>
            <button className='h-full w-[25%] m-1 px-4 py-2 text-black font-bold bg-[#07DDDA] rounded-[30px]'>Telco</button>
            <button className='h-full w-[25%] m-1 px-4 py-2'>Insurance</button>
            <button className='h-full w-[25%] m-1 px-4 py-2'>Fintech</button>
            <button className='h-full w-[25%] m-1 px-4 py-2'>IT</button>
        </div>
        {/* Testimonial section content */}
        <div className='flex w-full h-max mx-auto my-20 px-28'>
            <div className='w-[10%] h-full md:mx-10 mx-2'>
                <h1 className='my-2 text-[#07DDDA] md:text-5xl sm:text-4xl text-3xl font-extrabold'>"</h1>
            </div>
            <div className='w-[90%] h-full md:mx-10 mx-2'>
                <p className='my-2 md:text-2xl text-xl'>Through this initiative, GrowthOps have shown to have the right 
                    capabilities to take our platform to the next level. We believe the refreshed 
                    U.COM.MY will equip us with more insights, enabling us to make more 
                    data-led decisions that will results in new digital experiences that will truly 
                    benefit our customers</p>
                <p className='mb-2 mt-16 md:text-base font-bold'>Jasmine Lee</p>
                <p className='text-[#B4B4B4] my-2 md:text-base'>[Position], [Company Name]</p>
            </div>
        </div>
    </div>
  )
}

export default WhatClientsSay