import React from 'react'

const NavMobile = () => {
  return (
    <div className='h-screen' >
      <ul className='flex flex-col items-center h-[90%] font-medium justify-center gap-8 text-lg'>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavMobile
