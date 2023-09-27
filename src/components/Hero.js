import React from 'react'
import { hero } from '../data'
import Stats from './Stats'

const Hero = () => {
  return (
    <div className='bg-hero bg-no-repeat bg-right bg-cover w-full h-[117vh] text-white relative px-4'>
        <div className='flex flex-col items-center text-center justify-center lg:h-full h-[90%]'>
          <div className='lg:text-[55px] text-[27px] max-w-[790px] leading-tight font-semibold mb-8 '>{hero.title}</div>
          <div className='subtitle max-w-[640px]'>{hero.subtitle}</div>
          <button className='lg:px-20 px-10 lg:py-4 py-2 lg:mt-7 mt-3 text-white bg-white/60 hover:bg-white/40  rounded-[5px]'>Shop Now</button>
        </div>
       <Stats/>
    </div>
  )
}

export default Hero
