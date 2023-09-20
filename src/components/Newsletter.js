import React from 'react'
import { newsletter } from '../data'

const Newsletter = () => {
  const{title ,subtitle ,placeholder ,buttonText}=newsletter
  return (
    <section className='section bg-newsletter bg-no-repeat bg-left bg-cover w-full h-[490px] bg-white text-white' id='contact'>
      <div className='flex justify-between max-w-[1240px] h-full mx-auto'>
        <div className='hidden md:block'></div>
        
          <div className='max-w-[590px] w-full text-center mx-auto lg:mx-0 h-full flex flex-col justify-center md:text-start'>
            <h1 className='text-3xl md:max-w-[400px] mx-auto md:mx-0 max-w-[280px] md:text-[40px] leading-tight font-semibold mb-4 '>{title}</h1>
            <p className='subtitle'>{subtitle}</p>
            <div className='flex md:flex-row flex-col items-center gap-6 px-5 md:px-0'>
            <input type="email" name="" id="" className='py-4 rounded-lg px-5 max-w-[410px] w-full' placeholder={placeholder}/>
            <button className='bg-gray-900 rounded-lg px-8 py-4 w-full  sm:max-w-[150px]'>{buttonText}</button>
            </div>
          </div>
         
      </div>
      
    </section>
  )
}

export default Newsletter
