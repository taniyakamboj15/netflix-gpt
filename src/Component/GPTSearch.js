import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGROUNDIMAGE } from '../utils/constants';

const GptSearch = () => {
  return (
  
    <div  className='object-cover min-h-screen'
    style={{
      backgroundImage: `url(${BACKGROUNDIMAGE})`,
      backgroundSize: "auto",
      backgroundAttachment: "fixed",
    }}>
        <GptSearchBar/>
        <GptMovieSuggestion/>

       </div> 
      
  )
}

export default GptSearch;