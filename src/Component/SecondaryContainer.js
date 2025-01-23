import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';


const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movie);
    console.log("movies",movies);
   
  return (
    <div className='w-full z-20 absolute bg-black'>
         <MovieList title="Now Playing" movies={movies.nowplayingmovies}/> 
         <MovieList title="Popular Movie" movies={movies.popularMovie}/>
         <MovieList title="Top Rated" movies={movies.topRated}/>
         
         <div>

         </div>
    </div>
  )
}

export default SecondaryContainer;