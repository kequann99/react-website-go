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
      <div className='my-40 mx-auto h-full w-full text-[#f5f5f5] tracking-tight flex flex-col'>
          <p className='mx-auto py-2 md:text-3xl sm:text-2xl text-xl font-[500]'>With a focus in fusing <span className='text-[#33fff3]'>strategy</span>,</p>
          <p className='mx-auto py-2 md:text-3xl sm:text-2xl text-xl font-[500]'><span id='design' className='text-[#33fff3] p-1'>design</span> and <span className='font-source text-[#33fff3]'>{"<technology/>"}</span> to</p>
          <p className='mx-auto py-2 md:text-3xl sm:text-2xl text-xl font-[500]'>build and sustain market leaders</p>
          <p className='mx-auto py-20 md:text-3xl sm:text-2xl text-xl'>this is</p>
          {/* animated text design for Mission section, animations in CSS file */}
          <h1 id='go_font' className='mx-auto py-2 md:text-8xl sm:text-7xl text-6xl font-[1000]'>GrowthOps Asia</h1>
      </div>
    </div>
  )
}

export default Mission