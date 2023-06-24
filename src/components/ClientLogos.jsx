import React from 'react'

import UOB from '../assets/clients_logo_row1/image 29.png'
import Toyota from '../assets/clients_logo_row1/image 35.png'
import POSB from '../assets/clients_logo_row1/image 53.png'
import Singlife from '../assets/clients_logo_row1/image 52.png'
import Amway from '../assets/clients_logo_row1/image 47.png'
import Fitness from '../assets/clients_logo_row1/image 55.png'
import Sony from '../assets/clients_logo_row1/image 42.png'
import XR from '../assets/clients_logo_row1/image 57.png'
import Crown from '../assets/clients_logo_row1/image 50.png'
import AIA from '../assets/clients_logo_row1/image 60.png'
import WWF from '../assets/clients_logo_row1/image 62.png'

import MAS from '../assets/clients_logo_row2/image 33.png'
import Maxis from '../assets/clients_logo_row2/image 34.png'
import Grab from '../assets/clients_logo_row2/image 32.png'
import DBS from '../assets/clients_logo_row2/image 30.png'
import Treasure from '../assets/clients_logo_row2/image 36.png'
import Microsoft from '../assets/clients_logo_row2/image 59.png'
import Logi from '../assets/clients_logo_row2/image 43.png'
import Dreamscape from '../assets/clients_logo_row2/image 45.png'
import StdChart from '../assets/clients_logo_row2/image 51.png'
import Sitebeat from '../assets/clients_logo_row2/image 61.png'
import Mizuho from '../assets/clients_logo_row2/image 64.png'

import CIMB from '../assets/clients_logo_row3/image 54.png'
import RHB from '../assets/clients_logo_row3/image 31.png'
import Nikko from '../assets/clients_logo_row3/image 37.png'
import MnH from '../assets/clients_logo_row3/image 39.png'
import Chubb from '../assets/clients_logo_row3/image 44.png'
import Ntuc from '../assets/clients_logo_row3/image 38.png'
import Taylors from '../assets/clients_logo_row3/image 46.png'
import Esplanade from '../assets/clients_logo_row3/image 58.png'
import Proton from '../assets/clients_logo_row3/image 48.png'
import Triumph from '../assets/clients_logo_row3/image 56.png'
import Proton_2 from '../assets/clients_logo_row3/image 63.png'

const ClientLogos = () => {
  return (
    //div for Client Logos section
    <div className='h-max w-full max-w-[1280px] text-[#f5f5f5] mt-40 mx-auto'>
      {/* Title design for Client Logos section */}
      <div className='flex h-max w-max mx-auto'>
          <div id='super' className='w-max mt-2'>
              <h1 className='w-max md:px-4 px-2 py-4 md:text-7xl sm:text-6xl text-4xl text-center uppercase font-extrabold border border-[#9747FF] rounded-[50%]'>Super</h1>
          </div>
          <h1 className='mx-auto mt-2 py-4 w-max md:text-7xl sm:text-6xl text-4xl text-center uppercase font-extrabold'>Proud To</h1>
      </div>
      <h1 className='mx-auto w-max md:text-7xl sm:text-6xl text-4xl text-center uppercase font-extrabold'>Work With</h1>
      {/* Client Logos animated section, animations in CSS file */}
      <div className='h-full w-full my-10 relative overflow-hidden'>
        <div id='left-shadow' className='h-full w-[30%] absolute left-0 z-10'></div>
        <div id='right-shadow' className='h-full w-[30%] absolute right-0 z-10'></div>
          <div className='flex gap-x-8 h-max w-full my-10 move-left'>
            <img src={UOB} alt='UOB logo' />
            <img src={Toyota} alt='Toyota logo' />
            <img src={POSB} alt='POSB logo' />
            <img src={Singlife} alt='Singlife logo' />
            <img src={Amway} alt='Amway logo' />
            <img src={Fitness} alt='Fitness First logo' />
            <img src={Sony} alt='Sony logo' />
            <img src={XR} alt='XR Vision logo' />
            <img src={Crown} alt='Crown logo' />
            <img src={AIA} alt='AIA logo' />
            <img src={WWF} alt='WWF logo' />
          </div>
          <div className='flex gap-x-8 h-max w-full my-4 move-right'>
            <img src={MAS} alt='MAS logo' />
            <img src={Maxis} alt='Maxis logo' />
            <img src={Grab} alt='Grab logo' />
            <img src={DBS} alt='DBS logo' />
            <img src={Treasure} alt='treasure logo' />
            <img src={Microsoft} alt='Microsoft logo' />
            <img src={Logi} alt='Logitech logo' />
            <img src={Dreamscape} alt='Dreamscape logo' />
            <img src={StdChart} alt='Standard Chart logo' />
            <img src={Sitebeat} alt='sitebeat logo' />
            <img src={Mizuho} alt='Mizuho logo' />
          </div>
          <div className='flex gap-x-8 h-max w-full my-10 move-left'>
            <img src={CIMB} alt='CIMB logo' />
            <img src={RHB} alt='RHB logo' />
            <img src={Nikko} alt='nikko am logo' />
            <img src={MnH} alt='Mann + Hummel logo' />
            <img src={Chubb} alt='Chubb logo' />
            <img src={Ntuc} alt='ntuc logo' />
            <img src={Taylors} alt='Taylors logo' />
            <img src={Esplanade} alt='esplanade logo' />
            <img src={Proton} alt='Proton logo' />
            <img src={Triumph} alt='Triumph logo' />
            <img src={Proton_2} alt='Proton logo' />
          </div>     
      </div>
      
    </div>
  )
}

export default ClientLogos