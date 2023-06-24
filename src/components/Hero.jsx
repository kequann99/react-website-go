import React, {useState} from 'react'
import HeroBg from '../assets/bg_desktop.png'
import HeroBg_Mobile from '../assets/bg_mobile.png'
import Splashscreen from '../assets/splashscreen.png'
import Splashscreen_Mobile from '../assets/splashscreen_mobile.png'
import Navbar from './Navbar'

const Hero = () => {

  const [splash, setSplash] = useState(false)
  
  const handleSplash = () => {
    setSplash(!splash)
  }

  return (
    // div for Hero section
    <div className='h-screen w-full'>
      <img src={Splashscreen} alt="Splashscreen" className={!splash ? 'top-0 h-full w-full object-fit z-50 absolute md:block hidden': 'top-0 h-full w-full object-fit z-50 absolute md:block hidden splashscreen'} onClick={handleSplash}/>
      <img src={Splashscreen_Mobile} alt="Splashscreen" className={!splash ? 'top-0 h-full w-full object-fit z-50 absolute md:hidden' : 'top-0 h-full w-full object-fit z-50 absolute md:hidden splashscreen'} onClick={handleSplash}/>
      <div className={!splash ? 'relative h-screen w-full mx-auto' : 'relative h-screen w-full mx-auto hero-anim'}>
          <Navbar />
          {/* background image for Hero section */}
          <img src={HeroBg} alt="background" className='top-[-2%] h-full w-full object-cover absolute z-[-1] md:block hidden'/>
          <img src={HeroBg_Mobile} alt="background" className='top-[-5%] h-full w-full object-cover absolute z-[-1] md:hidden'/>
          {/*  Hero section title, mobile responsive */}
          <div className='max-w-[1280px] mt-5 mx-auto h-screen w-[90%] text-[#f5f5f5] tracking-tighter uppercase flex flex-col'>
            <h1 className='pt-40 pb-4 pr-10 md:text-8xl sm:text-6xl text-5xl font-extrabold'>Your New-Breed,</h1>
            <h1 className='py-4 md:text-8xl sm:text-6xl text-5xl text-right font-extrabold'>End-To-End</h1>
            <h1 className='py-4 md:px-20 sm:px-12 px-6 md:text-8xl sm:text-6xl text-5xl font-extrabold'>Digital Ally</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero