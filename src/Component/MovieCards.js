import React from 'react'
import { POSTER_PATH } from '../utils/constants';

const MovieCards = ({image}) => {
  return (
    <div className='w-36 flex-none'>
        <img alt="movie card" src={POSTER_PATH + image }></img>
    </div>
  )
}

export default MovieCards;