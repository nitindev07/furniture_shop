import React, { useEffect, useState } from 'react';
import {CgMenuRight} from 'react-icons/cg'
import {AiOutlineClose} from 'react-icons/ai'
import NavMobile from './NavMobile';

const Header = () => {
  const[bg, setBg]=useState(false)
  const[navMob, setNavMob]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{window.scrollY > 80 ? setBg(true): setBg(false);})
  })
  return (
  <header className={`${bg ? 'bg-primary py-6 shadow-md':'bg-none py-6'} fixed w-full right-0 left-0 z-10 transition-all duration-300 px-5 lg:px-0`}>
    <div className='max-w-[1240px] mx-auto '>
      <div className='flex items-center justify-between text-white '>
        <h1 className='title mb-0'>FurniShop</h1>
        <ul className='hidden lg:flex gap-8 text-lg'>
          <li><a className='hover:text-white/70' href="/">Home</a></li>
          <li><a className='hover:text-white/70' href="#about">About</a></li>
          <li><a className='hover:text-white/70' href="#features">Features</a></li>
          <li><a className='hover:text-white/70' href="#contact">Contact</a></li>
        </ul>
        <div className='lg:hidden'>
          {navMob ? <AiOutlineClose onClick={()=>setNavMob(!navMob)} className='text-2xl'/> : <CgMenuRight className='text-2xl' onClick={()=>setNavMob(!navMob)}/>}
        </div>
      </div>
      <div onClick={()=>setNavMob(!navMob)} className={`lg:hidden bg-white absolute ${navMob ? 'left-0':'left-[-100%]'} top-0 h-screen transition-all max-w-[300px] w-full duration-300`}>
        <NavMobile/>
      </div>
    </div>
  </header>
  );
};

export default Header;
