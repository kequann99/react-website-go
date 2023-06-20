import React from 'react'
import {FiExternalLink} from 'react-icons/fi'
import FooterBg from '../assets/footer_bg.png'
import FooterBg_Mobile from '../assets/footer_bg_mobile.png'
import LinkedIn from '../assets/linkedin.png'
import Facebook from '../assets/facebook.png'
import Insta from '../assets/insta.png'
import Youtube from '../assets/youtube.png'


const Footer = () => {
  //div for Footer section
  return (
    <div className='flex flex-col h-max w-full mx-auto mt-20 text-[#f5f5f5]'>
       {/* background image for Footer section */}
      <img src={FooterBg} alt='footer background' className='md:block hidden'/>
      <img src={FooterBg_Mobile} alt='footer background' className='md:hidden'/>
       {/* Footer section links, mobile responsive */}
      <div className='h-max w-full max-w-[1280px] mx-auto my-10'>
        <ul className='flex gap-x-10 h-max w-max mx-auto font-medium'>
          <li>Services</li>
          <li>Works</li>
          <li>Insights</li>
          <li className='md:block hidden'>Careers</li>
          <li className='md:block hidden'>Contact Us</li>
        </ul>
        <ul className='md:hidden flex gap-x-10 h-max w-max mx-auto font-medium mt-6'>
          <li className=''>Careers</li>
          <li className=''>Contact Us</li>
        </ul>
      </div>
      {/* Footer section social icons, mobile responsive */}
      <div className='flex h-max w-max max-w-[1280px] mx-auto gap-x-10 my-4'>
        <img src={LinkedIn} alt='LinkedIn Logo'/>
        <img src={Facebook} alt='Facebook Logo'/>
        <img src={Insta} alt='Instagram Logo'/>
        <img src={Youtube} alt='Youtube Logo'/>
      </div>
      {/* Footer section bottom links, mobile responsive */}
      <div className='flex md:flex-row flex-col-reverse h-max w-full max-w-[1280px] mx-auto text-xs px-10 md:my-20 my-10'>
        <p className='text-[#6F7176] font-semibold uppercase md:text-left text-center h-max md:w-[70%] w-full md:block md:my-0 my-20'>© Copyright GrowthOps. All rights reserved.</p>
        <div className='flex md:flex-row flex-col h-max md:w-[40%] w-full font-medium md:text-left text-center'>
          <div className='flex h-max md:w-max w-full gap-2 md:my-0 my-4 md:mx-4'>
            <a href='#' className='ml-auto'><FiExternalLink size={15} /></a>
            <a href='#' className='mr-auto'>Go to global GrowthOps website</a>
          </div>
          <a href='#' className='mx-auto md:my-0 my-4'>Privacy Policy</a>
        </div>   
      </div>
    </div>
  )
}

export default Footer