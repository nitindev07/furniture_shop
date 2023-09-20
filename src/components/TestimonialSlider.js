import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import '../slider.css'

import { Navigation} from 'swiper'

const TestimonialSlider = ({persons}) => {
  return (
    <Swiper modules={[Navigation]} navigation={true} className='testimonialSlider lg:max-w-[650px] max-w-[330px] lg:min-h-[260px] min-h-[225px] '>
      {persons.map((avt, index)=>{
        const{avatar, name, occupation, message}=avt
        return(
          <SwiperSlide className='' key={index}>
            <div className='lg:max-w-[550px] max-w-[340px] '>
              <div className='flex items-center gap-5 mb-8'>
                <div><img src={avatar.type} alt="" /></div>
                <div>
                  <h4 className='font-semibold text-[19px]'>{name}</h4>
                  <p className='text-grey text-[16px]'>{occupation}</p>
                </div>
              </div>
              <p className='text-[18px] lg:text-[20px]'>{message}</p>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider
