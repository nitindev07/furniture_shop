import React from 'react'
import {  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram} from 'react-icons/io'
import { footer } from '../data'

const Footer = () => {
  return (
    <div className='bg-primary h-full px-4'>
      <div className='flex lg:flex-row flex-col  justify-between max-w-[1240px] mx-auto lg:items-center item-start py-16'>
      <div><a href="/" className='title text-white'>FurniShop</a></div>
      <div className='flex gap-3'>
      <IoLogoYoutube className='text-5xl bg-white/30 hover:bg-white/20 cursor-pointer rounded-full p-[10px] text-white'/>
      <IoLogoFacebook className='text-5xl bg-white/30 hover:bg-white/20 cursor-pointer rounded-full p-[10px] text-white'/>
      <IoLogoGithub className='text-5xl bg-white/30 hover:bg-white/20 cursor-pointer rounded-full p-[10px] text-white'/>
      <IoLogoInstagram className='text-5xl bg-white/30 hover:bg-white/20 cursor-pointer rounded-full p-[10px] text-white'/>
      </div>
      </div>
      <hr className='max-w-[1040px] mx-auto border-white/20' />
      <div className='text-center text-white py-20'>
        {footer.copyright}
      </div>
    </div>
  )
}

export default Footer
