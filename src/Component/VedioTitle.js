import React from 'react'
import infoimage from "../assets/information.png"

const VedioTitle = ({title,overview}) => {
  return (
    <div className='pt-40 px-10'>
    <h1 className='text-6xl font-bold'>{title}</h1>
    <p className='w-1/4 py-6 font-semibold'>{overview}</p>
    <div className='gap-5 flex'>
        <button className='bg-slate-400  px-5 py-1 font-bold border border-black rounded-md bg-opacity-25'>◀ Play</button>
        <div className='bg-gray-400 rounded-sm  bg-opacity-25 px-5 py-1 font-bold border border-black flex flex-row '>
          <img src={infoimage} alt='info icon' />
        <button >More Info</button>
        </div>
      
    </div>
    </div>
  )
}

export default VedioTitle;