
import { useEffect } from 'react';
import { API_Options } from './constants';
import { useDispatch } from 'react-redux';
import { addNewPlayingMovies } from './movieSlice';

const useNowPlayingMovie = () => {

    
    const dispatch = useDispatch();
    useEffect(()=>{
      fetchMovieData();
  
    },[])
    const fetchMovieData = async()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_Options);
      const data1 = await data.json();
      console.log(data1);
      dispatch(addNewPlayingMovies(data1.results));
    }
  
}

export default useNowPlayingMovie;