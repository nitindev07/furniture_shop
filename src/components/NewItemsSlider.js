import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

const NewItemsSlider = ({products}) => {
  return (
    <Swiper
     breakpoints={{
      320:{
        slidesPerView:2,
        spaceBetween:13,
      },
      768:{
        slidesPerView:3,
        spaceBetween:18,
      },
      }}>
      {products.map((product, idx)=>{
        return (<SwiperSlide key={idx} className='max-w-[265px]'>
          <div className=''>
            <img className=' w-full h-full relative' src={product.image.type} alt="" />
            <p className='text-[18px] absolute bottom-4 text-center w-full lg:text-[20px] text-grey-2'>{product.name}</p>
          </div>
        </SwiperSlide>)
      })}
    </Swiper>
  )
}

export default NewItemsSlider
