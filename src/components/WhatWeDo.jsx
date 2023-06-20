import React from 'react'
import Mockup from '../assets/mockup.png'

const WhatWeDo = () => {
  return (
    //div for What We Do section
    <div className='h-max w-full max-w-[1280px] text-[#f5f5f5] mx-auto'>
        {/* Title for What We Do section */}
        <h1 className='mx-auto p-4 md:text-6xl sm:text-5xl text-4xl uppercase text-center font-extrabold'>What We Do</h1>
        {/* Content for What We Do section, mobile responsive using flex-row & flex-col */}
        <div className='mt-10 flex flex-col h-max w-full px-16 justify-between'>
            <div className='flex md:flex-row flex-col-reverse h-max w-full my-6 mx-auto'>
                <div className='flex flex-col md:w-[40%] w-full my-6 md:pr-4 sm:pr-3 pr-2 justify-center'>
                    <div className='md:w-[48px] md:h-[48px] sm:w-[42px] sm:h-[42px] w-[36px] h-[36px] border-solid border-2 border-[#f5f5f5] rounded-full '>
                        <p className='h-full w-full flex items-center justify-center md:text-xl sm:text-lg text-sm font-semibold'>01</p>
                    </div>
                    <h1 className='h-max w-full md:text-4xl sm:text-3xl text-2xl font-extrabold md:mt-8 sm:mt-6 mt-4'>Performance Marketing & Analytics</h1>
                    <div className='h-max w-full text-sm mt-4'>
                        <p className='my-2'>Performace Media</p>
                        <p className='my-2'>Search Engine Optimisation</p>
                        <p className='my-2'>Web & App Analytics</p>
                        <p className='my-2'>Conversion Rate Optimisation Through Personalisation</p>
                    </div>
                    <button className='max-w-[120px] h-max w-full md:mt-6 mt-4 p-2 border border-box border-solid border-[#f5f5f5] rounded-3xl font-black text-xs'>See more</button>
                </div>
                <img src={Mockup} alt='Device Mockups' className='md:w-[60%] w-full rounded-2xl object-cover'/>
            </div>
            <div className='flex md:flex-row-reverse flex-col-reverse h-max w-full my-6 mx-auto'>
                <div className='flex flex-col md:w-[40%] w-full my-6 md:pl-6 justify-center'>
                    <div className='md:w-[48px] md:h-[48px] sm:w-[42px] sm:h-[42px] w-[36px] h-[36px] border-solid border-2 border-[#f5f5f5] rounded-full'>
                        <p className='h-full w-full flex items-center justify-center md:text-xl sm:text-lg text-sm font-semibold'>02</p>
                    </div>
                    <h1 className='h-max w-full md:text-4xl sm:text-3xl text-2xl font-extrabold md:mt-8 sm:mt-6 mt-4'>Digital-First Creative</h1>
                    <div className='h-max w-full text-sm mt-4'>
                        <p className='my-2'>Brand & Marketing Strategy</p>
                        <p className='my-2'>Content Hubs</p>
                        <p className='my-2'>Creative Services</p>
                    </div>
                    <button className='max-w-[120px] h-max w-full md:mt-6 mt-4 p-2 border border-box border-solid border-[#f5f5f5] rounded-3xl font-black text-xs'>See more</button>
                </div>
                <img src={Mockup} alt='Device Mockups' className='md:w-[60%] w-full rounded-2xl object-cover'/>
            </div>
            <div className='flex md:flex-row flex-col-reverse h-max w-full my-6 mx-auto'>
                <div className='flex flex-col md:w-[40%] w-full my-6 md:pr-4 sm:pr-3 pr-2 justify-center'>
                    <div className='md:w-[48px] md:h-[48px] sm:w-[42px] sm:h-[42px] w-[36px] h-[36px] border-solid border-2 border-[#f5f5f5] rounded-full '>
                        <p className='h-full w-full flex items-center justify-center md:text-xl sm:text-lg text-sm font-semibold'>03</p>
                    </div>
                    <h1 className='h-max w-full md:text-4xl sm:text-3xl text-2xl font-extrabold md:mt-8 sm:mt-6 mt-4'>Marketing Technology</h1>
                    <div className='h-max w-full text-sm mt-4'>
                        <p className='my-2'>Technology Consulting</p>
                        <p className='my-2'>MarTech Deployment & Partnerships</p>
                        <p className='my-2'>Cloud Readiness & Migration</p>
                        <p className='my-2'>Mobile Development</p>
                        <p className='my-2'>Custom Web Development</p>
                        <p className='my-2'>Solution Architecture</p>
                    </div>
                    <button className='max-w-[120px] h-max w-full md:mt-6 mt-4 p-2 border border-box border-solid border-[#f5f5f5] rounded-3xl font-black text-xs'>See more</button>
                </div>
                <img src={Mockup} alt='Device Mockups' className='md:w-[60%] w-full rounded-2xl object-cover'/>
            </div>
            <div className='flex md:flex-row-reverse flex-col-reverse h-max w-full my-6 mx-auto'>
                <div className='flex flex-col md:w-[40%] w-full my-6 md:pl-6 justify-center'>
                    <div className='md:w-[48px] md:h-[48px] sm:w-[42px] sm:h-[42px] w-[36px] h-[36px] border-solid border-2 border-[#f5f5f5] rounded-full'>
                        <p className='h-full w-full flex items-center justify-center md:text-xl sm:text-lg text-sm font-semibold'>04</p>
                    </div>
                    <h1 className='h-max w-full md:text-4xl sm:text-3xl text-2xl font-extrabold md:mt-8 sm:mt-6 mt-4'>Experience Design & Strategy</h1>
                    <div className='h-max w-full text-sm mt-4'>
                        <p className='my-2'>Digital Transformation & Change Management</p>
                        <p className='my-2'>User Experience Strategy and Design</p>
                    </div>
                    <button className='max-w-[120px] h-max w-full md:mt-6 mt-4 p-2 border border-box border-solid border-[#f5f5f5] rounded-3xl font-black text-xs'>See more</button>
                </div>
                <img src={Mockup} alt='Device Mockups' className='md:w-[60%] w-full rounded-2xl object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo