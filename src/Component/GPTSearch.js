import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACKGROUNDIMAGE } from '../utils/constants';

const GptSearch = () => {
  return (
    <div      className='min-h-screen bg-repeat bg-top'
    style={{
      backgroundImage: `url(${BACKGROUNDIMAGE})`,
      backgroundSize: "auto",
    }}>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch;