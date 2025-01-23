
import { useEffect } from 'react';
import { API_Options, NOWPLAYING_API } from './constants';
import { useDispatch } from 'react-redux';
import { addNewPlayingMovies } from './movieSlice';

const useNowPlayingMovie = () => {

    
    const dispatch = useDispatch();
    useEffect(()=>{
      fetchMovieData();
  
    },[])
    const fetchMovieData = async()=>{
      console.log("RUNNING NOW")
      const data = await fetch(NOWPLAYING_API,API_Options);
      const data1 = await data.json();
      console.log(data1);
      dispatch(addNewPlayingMovies(data1.results));
    }
  
}

export default useNowPlayingMovie;