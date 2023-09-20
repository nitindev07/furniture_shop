import React from 'react'
import { features } from '../data'


const FeaturesSecond = () => {
  const{feature2}=features
  return (
    <section className='section bg-white px-4'>
       <div className='max-w-[1240px] mx-auto lg:my-12 '>
        <div className='flex lg:flex-row-reverse flex-col-reverse gap-y-2 justify-between items-center '>
          <img src={feature2.image.type} alt="" />
          <div className='max-w-[550px] '>
            <h2 className='title '>{feature2.title}</h2>
            <p className='subtitle text-grey'>{feature2.subtitle}</p>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSecond
