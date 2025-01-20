import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className='fixed bg-gradient-to-b from-black w-full z-10 top-0'>
        <img className="w-60 px-10"src={LOGO_URL} alt="header logo"></img>
        
    </div>
  )
}

export default Header;