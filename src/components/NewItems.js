import React from 'react'
import NewItemsSlider from './NewItemsSlider'
import { newInStore } from '../data'

const NewItems = () => {
  const{title, subtitle, link, icon, products}= newInStore
  return (
    <section className='section bg-white px-4'>
      <div className='lg:ml-[100px] ml-0 flex flex-col lg:flex-row items-center relative'>
        <div>
          <div className='flex flex-row md:flex-col gap-x-8 lg:max-w-[350px] w-full mb-10 lg:mb-0 '>
            <h2 className='title lg:text-5xl mb-0 lg:mb-16 '>{title}</h2>
            <p className='subtitle font-semibold text-grey mb-0 lg:mb-16'>{subtitle}</p>
            <div className='lg:flex gap-2 items-center cursor-pointer hidden'>
              <a href="/" className='text-lg'>{link}</a>
              <div className='text-3xl'>{icon}</div>
            </div>
          </div>
        </div>
        <div className='md:max-w-[800px] xl:max-w-[900px] w-full overflow-hidden lg:absolute -right-4 '>
          <NewItemsSlider products={products}/>
        </div>
      </div>
    </section>
  )
}

export default NewItems
