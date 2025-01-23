import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({title,movies}) => {
    console.log(movies);
    if(!movies) return;
  return (
    <div className='w-full pt-5 pl-7'>
        
        <h1 className='text-white '>{title}</h1>
            <div className='flex flex-row gap-5 overflow-x-scroll no-scrollbar pt-7'>
                {movies.map((movie,index)=>(
                    <MovieCards key={index} image={movie.poster_path}/>
                ))}
        
        </div>
    </div>
  )
}

export default MovieList;