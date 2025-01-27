
import { API_Options, POPULAR_API } from './constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovie } from './movieSlice';

const usePopularApi = () => {
    const dispatch = useDispatch();

    const fetchPopularData = async()=>{
        const data = await fetch(POPULAR_API,API_Options);
        const data1 = await data.json();
        console.log(data1);
        dispatch(addPopularMovie(data1.results));

    }
    useEffect(()=>{
        fetchPopularData();

    },[])
  
}

export default usePopularApi;