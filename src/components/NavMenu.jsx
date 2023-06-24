import React from 'react'


const NavMenu = () => {
  
  return (
    // div for Nav menu Section
    <div className='fixed left-0 top-40 w-full h-full z-20'>     
        {/* Nav Menu items */}
        <ul className='flex flex-col pt-18 px-4 uppercase md:text-7xl sm:text-6xl text-5xl font-extrabold items-end'>
            <li className='p-5'>Services</li>
            <li className='p-5'>Work</li>
            <li className='p-5'>Insights</li>
            <li className='p-5'>Careers</li>
            <li className='p-5'>Contact</li>
        </ul>
    </div>
  )
}

export default NavMenu