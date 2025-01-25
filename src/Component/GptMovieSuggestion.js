import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieNames, movieResults}=useSelector((store)=>store.gpt)
  if(!movieNames)return;
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='bg-black w-[95vw] px-7  sm:px-14  mt-10 opacity-90 rounded-md '>
        {movieNames.map((movieName , index)=>  ( <MovieList key={index} title={movieName} movies={movieResults[index]} />))}
     
    </div>
    </div>
  )
}

export default GptMovieSuggestion;