import React, {useState} from 'react'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import NavMenu from './NavMenu'
import Logo from '../assets/logo.png'

// states for Navbar Section, for opening and closing nav menu
const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    // div for Navbar Section
    <div className='flex justify-between items-center h-16 mx-6 mt-4 px-4 text-[#f5f5f5] bg-[#010101] border border-gray-800 rounded-full'>
        <img src={Logo} alt="GrowthOps logo" className='flex z-50'/>
        
        {/* onClick function for navbar Menu button, for opening and closing nav menu */}
        <div className='flex justify-between' onClick={handleNav}>
          {/* onClick function for navbar Menu button, for changing between Menu & Close button */}
          {!nav ? <h2 className='font-bold mx-2 z-50'>Close</h2> : <h2 className='font-bold mx-2 z-50'>Menu</h2>}
          {!nav ? <AiOutlineClose size ={25} className='flex font-extrabold text-[#f5f5f5] z-50'/> : <HiMenuAlt3 size ={25} className='text-[#f5f5f5] rotate-180 z-50'/>} 
          {/* onClick function for navbar Menu button, for activating blurred bg when Nav Menu is open */}
          {!nav ? <div className='fixed left-0 top-0 w-full h-full bg-gradient-to-b from-[#040506] opacity-64 backdrop-blur-sm z-10'></div>: null}
        </div>
        {!nav ? <NavMenu /> : null}
    </div>
  )
}

export default Navbar