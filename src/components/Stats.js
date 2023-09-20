import React from 'react'
import { stats } from '../data'

const Stats = () => {
  return (
    <div className='bg-accent rounded-xl absolute bottom-0 left-[7%] right-[7%]'>
    <div className='p-8 max-w-[1140px] h-full mx-auto'>
      <div className='grid lg:grid-cols-4 grid-cols-2 h-full text-center gap-y-8'>
        {stats.map((val, idx)=>{
          return <div key={idx} className='odd:border-r-2 lg:even:border-r-2 lg:last:even:border-none px-4' >
            <div className='min-h-[70px] py-0 lg:py-3 max-w-[120px] mx-auto'>
            <h2 className='text-2xl lg:text-[40px] leading-tight font-semibold'>{val.value}</h2>
            <p className='text-[18px] lg:text-[20px] leading-relaxed'>{val.text}</p>
            </div>
          </div>
        })}
      </div>
    </div>
</div>
  )
}

export default Stats
