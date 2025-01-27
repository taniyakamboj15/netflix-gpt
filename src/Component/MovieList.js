import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({title,movies}) => {
  
    if(!movies) return;
  return (
    <div className=' w-full pt-5 sm:pl-7 pl-4'>
        
        <h1 className='text-white text-xs'>{title}</h1>
            <div className=' flex flex-row gap-5 overflow-x-scroll no-scrollbar pt-7'>
                {movies.map((movie,index)=>(
                    <MovieCards key={index} image={movie.poster_path}/>
                ))}
        
        </div>
    </div>
  )
}

export default MovieList;