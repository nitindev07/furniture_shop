import React from 'react'
import { features } from '../data'

const Features = () => {
  return (
    <section className='section bg-white px-4' id='features'>
      <div className='max-w-[1240px] mx-auto lg:my-12 '>
        <div className='flex lg:flex-row flex-col-reverse gap-y-2 gap-x-20 items-center'>
          <img src={features.image.type} alt="" />
          <div>
            <h2 className='title '>{features.title}</h2>
            <p className='subtitle text-grey'>{features.subtitle}</p>
            <div>
              {features.items.map((item, idx)=>{
                const{icon ,title, subtitle}= item
                return <div key={idx} className='max-w-[290px] lg:max-w-[500px]'>
                  <div className='flex items-start gap-2'>
                    <div className='lg:text-2xl text-xl lg:mt-0 mt-1 '>{icon}</div>
                    <div>
                    <h4 className='lg:text-xl text-lg font-semibold mb-4'>{title}</h4>
                    <p className='lg:text-lg text-md mb-4 text-grey '>{subtitle}</p>
                    </div>
                  </div>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
