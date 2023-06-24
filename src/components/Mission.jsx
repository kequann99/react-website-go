import React from 'react'
import MissionBg_left from '../assets/mission_bg_left.png'
import MissionBg_right from '../assets/mission_bg_right.png'

const Mission = () => {
  return (
    //div for Mission section
    <div className='h-max w-full'>
      {/* background image for Mission section */}
      <img src={MissionBg_left} alt="background design left" className='absolute left-0' />
      <img src={MissionBg_right} alt="background design right" className='absolute right-0' />
      {/* text design for Mission section */}
      <div className='my-40 h-full w-max mx-auto text-center text-[#f5f5f5] tracking-tight flex flex-col'>
          <p className='py-2 md:text-3xl sm:text-2xl text-xl font-medium'>With a focus in fusing <span className='text-[#33fff3]'>strategy</span>,</p>
          <p className='py-2 md:text-3xl sm:text-2xl text-xl font-medium'><span id='design' className='text-[#33fff3] p-1'>design</span> and <span className='font-source text-[#33fff3]'>{"<technology/>"}</span> to</p>
          <p className='py-2 md:text-3xl sm:text-2xl text-xl font-medium'>build and sustain market leaders</p>
          <p className='py-20 md:text-3xl sm:text-2xl text-xl'>this is</p>
          {/* animated text design for Mission section, animations in CSS file */}
          <h1 id='go_font' className='py-2 md:text-8xl sm:text-7xl text-[2.5rem] font-extrabold'>GrowthOps Asia</h1>
      </div>
    </div>
  )
}

export default Mission