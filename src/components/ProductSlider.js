import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {HiPlus} from 'react-icons/hi'



import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../slider.css'

import { Pagination, Navigation} from 'swiper'

const ProductSlider = ({pages}) => {
  return (
    <Swiper modules={[Pagination, Navigation]} pagination={{clickable: true}} navigation={true} className='productSlider min-h-[1300px]' >
      {pages.map((page, idx)=>{
        return(
          <SwiperSlide key={idx} className=''>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  lg:gap-x-7 gap-x-5'>
            {page.productList.map((prodct , index)=>{
              const{name, image, price, oldPrice}=prodct
              return <div key={index} className='max-w-[290px] max-h-[400px]'>
              <div className='lg:mb-24 h-[310px]  '>
                  <div className='border-2 border-grey-2 w-full max-w-[285px] md:max-h-[292px] max-h-[200px] relative h-full flex items-center justify-center rounded-2xl mb-[10px] lg:mb-[15px] ' >
                    <img className='mx-auto h-[60%] py-4 lg:py-0 px-1 w-[full]' src={image.type} alt="" />
                    <div className='absolute right-5 bottom-5 bg-grey-2 rounded-full p-1 cursor-pointer'>
                      <HiPlus size={26} />
                    </div>
                  </div>
                  <div>
                    <h6 className='font-semibold text-[18px]'>{name}</h6>
                    <div className='flex items-center gap-2'>
                      <p className=' font-medium'>$ {price}</p>
                      <p className=' line-through text-grey font-medium'>$ {oldPrice}</p>
                    </div>
                  </div>
                  </div>
              </div>
            })}
          </div>
        </SwiperSlide> 
        )
      })}
    </Swiper>
  )
}

export default ProductSlider
