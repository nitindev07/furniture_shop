import React from 'react'
import { products } from '../data'
import ProductSlider from './ProductSlider'

const Products = () => {
  const{title, subtitle, pages}= products
  return (
    <section className='section py-12 bg-white px-4'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center max-w-[800px] mx-auto lg:mb-20 mb-9'>
          <h2 className='title'>{title}</h2>
          <p className='text-[17px] lg:text-[20px] text-grey'>{subtitle}</p>
        </div>
        <div className='mb-20'>
          <ProductSlider pages={pages}/>
        </div>
      </div>
    </section>
  )
}

export default Products
