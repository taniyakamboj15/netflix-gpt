import React from 'react'
import { useSelector } from 'react-redux'
import VedioTitle from './VedioTitle';

const MainContainer = () => {
    const movies = useSelector((store)=>store.movie.nowplayingmovies);
    console.log(movies);
    if(!movies)return;
    const mainMovie = movies[0]
    console.log(mainMovie);
    const {original_title,overview}=mainMovie;

  return (
    <div className='mt-10'>
    < VedioTitle title={original_title} overview={overview}/>
    </div>
    
  )
}

export default MainContainer;