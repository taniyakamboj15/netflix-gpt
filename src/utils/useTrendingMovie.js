import { API_Options, TRENDING_MOVIE_API } from './constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrendingMovie } from './movieSlice';

const useTrendingMovie = () => {
    const dispatch = useDispatch();

    const fetchPopularData = async()=>{
        const data = await fetch(TRENDING_MOVIE_API,API_Options);
        const data1 = await data.json();
        console.log(data1);
        dispatch(addTrendingMovie(data1.results));

    }
    useEffect(()=>{
        fetchPopularData();

    },[])
  
}

export default useTrendingMovie;