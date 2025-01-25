import React from 'react'
import infoimage from "../assets/information.png"

const VedioTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video bg-gradient-to-r from-black pt-60 px-10 absolute text-white'>
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='w-2/4 py-6 font-semibold'>{overview}</p>
    <div className='gap-5 flex'>
        <button className='bg-white text-black  px-5 py-1 font-bold border border-black rounded-sm hover:bg-slate-500'>◀ Play</button>
        <button className='flex flex-row h-7 sm:h-auto px-2 sm:px-6 py-2 bg-gray-400 rounded-sm  bg-opacity-25 text-white hover:bg-opacity-70 gap-1 items-center font-semibold'>
          <span>
            <img src={infoimage} alt='info' />
          </span>
          More info
        </button>
      
    </div>
    </div>
  )
}

export default VedioTitle;