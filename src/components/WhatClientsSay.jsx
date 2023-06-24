import React, { useState } from 'react'
import ClientsBg from '../assets/clients_bg.png'

const WhatClientsSay = () => {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id){
        setToggle(id)
    }

  return (
    //div for Client Testimonial section
    <div className='relative h-max w-full max-w-[1280px] text-[#f5f5f5] mx-auto my-40'>
        {/* background image for Testimonial section */}
        <img src={ClientsBg} alt="background design right" className='absolute right-0 pointer-events-none' />
        <h1 className='mx-auto p-4 md:text-6xl sm:text-5xl text-4xl uppercase text-center font-extrabold my-20'>What Clients Say</h1>
        {/* Testimonial section navbar */}
        <div className='flex w-max h-max border-[1.5px] border-[#2B2B2B] rounded-[30px] mx-auto my-20'>
            <button className={toggle === 1 ? 'h-full w-max m-1 px-4 py-2 text-black font-bold bg-[#07DDDA] rounded-[30px] cursor-pointer' : 'h-full w-max m-1 px-4 py-2 cursor-pointer'} onClick={() => updateToggle(1)}>Telco</button>
            <button className={toggle === 2 ? 'h-full w-max m-1 px-4 py-2 text-black font-bold bg-[#07DDDA] rounded-[30px] cursor-pointer' : 'h-full w-max m-1 px-4 py-2 cursor-pointer'} onClick={() => updateToggle(2)}>Insurance</button>
            <button className={toggle === 3 ? 'h-full w-max m-1 px-4 py-2 text-black font-bold bg-[#07DDDA] rounded-[30px] cursor-pointer' : 'h-full w-max m-1 px-4 py-2 cursor-pointer'} onClick={() => updateToggle(3)}>Fintech</button>
            <button className={toggle === 4 ? 'h-full w-max m-1 px-4 py-2 text-black font-bold bg-[#07DDDA] rounded-[30px] cursor-pointer' : 'h-full w-max m-1 px-4 py-2 cursor-pointer'} onClick={() => updateToggle(4)}>IT</button>
        </div>
        {/* Testimonial section content */}
        <div className={toggle === 1 ? 'flex w-full h-max mx-auto my-20 md:px-28 px-10' : 'hidden w-full h-max mx-auto my-20 md:px-28 px-10'}>
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
        <div className={toggle === 2 ? 'flex w-full h-max mx-auto my-20 md:px-28 px-10' : 'hidden w-full h-max mx-auto my-20 md:px-28 px-10'}>
            <div className='w-[10%] h-full md:mx-10 mx-2'>
                <h1 className='my-2 text-[#07DDDA] md:text-5xl sm:text-4xl text-3xl font-extrabold'>"</h1>
            </div>
            <div className='w-[90%] h-full md:mx-10 mx-2'>
                <p className='my-2 md:text-2xl text-xl'>GrowthOps is one of AIA's service providers who delivered a lot of projects across APAC. They have broad business and 
                technical knowledge and a trustworthy partner that I would recommend to any company.</p>
                <p className='mb-2 mt-16 md:text-base font-bold'>Tommy Chen</p>
                <p className='text-[#B4B4B4] my-2 md:text-base'>[Position], [Company Name]</p>
            </div>
        </div>
        <div className={toggle === 3 ? 'flex w-full h-max mx-auto my-20 md:px-28 px-10' : 'hidden w-full h-max mx-auto my-20 md:px-28 px-10'}>
            <div className='w-[10%] h-full md:mx-10 mx-2'>
                <h1 className='my-2 text-[#07DDDA] md:text-5xl sm:text-4xl text-3xl font-extrabold'>"</h1>
            </div>
            <div className='w-[90%] h-full md:mx-10 mx-2'>
                <p className='my-2 md:text-2xl text-xl'>GrowthOps have helped us profitably acquire customers while providing deep technical solutions to our analytics 
                challenges. GrowthOps is a true partner when it comes to digital marketing and analytics, and they have truly impacted our business in a positive way. </p>
                <p className='mb-2 mt-16 md:text-base font-bold'>Doris Sim</p>
                <p className='text-[#B4B4B4] my-2 md:text-base'>[Position], [Company Name]</p>
            </div>
        </div>
        <div className={toggle === 4 ? 'flex w-full h-max mx-auto my-20 md:px-28 px-10' : 'hidden w-full h-max mx-auto my-20 md:px-28 px-10'}>
            <div className='w-[10%] h-full md:mx-10 mx-2'>
                <h1 className='my-2 text-[#07DDDA] md:text-5xl sm:text-4xl text-3xl font-extrabold'>"</h1>
            </div>
            <div className='w-[90%] h-full md:mx-10 mx-2'>
                <p className='my-2 md:text-2xl text-xl'>GrowthOps strategic approach and commitment to deliver business focused growth has turbo-charged our digital 
                marketing activity. We're excited about how, together, we can continue to delight our consumers and build our portfolio of brands online.</p>
                <p className='mb-2 mt-16 md:text-base font-bold'>Jason Lim</p>
                <p className='text-[#B4B4B4] my-2 md:text-base'>[Position], [Company Name]</p>
            </div>
        </div>
    </div>
  )
}

export default WhatClientsSay