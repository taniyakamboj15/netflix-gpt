import React from 'react';
import { useSelector } from 'react-redux';
import VedioTitle from './VedioTitle';
import VedioBackground from './VideoBackground';
import useNowPlayingMovie from '../utils/useNowPlayingMovie';
import usePopularApi from '../utils/usePopularApi';
import useTopRated from '../utils/useTopRated';


const MainContainer = () => {
  useNowPlayingMovie();
  usePopularApi();
  useTopRated();
  
    const movies = useSelector((store)=>store.movie.nowplayingmovies);
    if(!movies)return;
    const mainMovie = movies[0];
    const {original_title,overview,id}=mainMovie;

  return (
    <div >
    < VedioTitle title={original_title} overview={overview}/>
    <VedioBackground movieId={id}/>
    </div>
    
  )
}

export default MainContainer;