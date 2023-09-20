import React from 'react'
import TestimonialSlider from './TestimonialSlider'
import { testimonial } from '../data'

const Testimonial = () => {
  const{title, image, persons}= testimonial
  return (
    <section className='section lg:py-12 py-0 bg-white px-4 lg:pb-24 pb-16' id='about'>
    <div className='max-w-[1240px] mx-auto'>
        <div className='flex lg:flex-row flex-col gap-x-14 gap-y-0 items-center'>
          <div className='flex flex-col items-start lg:max-w-[620px] w-full '>
            <h1 className='title mb-7'>{title}</h1>
            <div>
              <TestimonialSlider persons={persons}/>
            </div>
          </div>
          <div className='my-8 lg:my-0'>
            <img src={image.type} alt="" />
          </div>
        </div>
    </div>
    </section>
  )
}

export default Testimonial
